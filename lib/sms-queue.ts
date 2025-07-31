/**
 * This file manages the SMS queue using a simple in-memory queue.
 * In a production environment, a more robust queueing system like Redis or RabbitMQ should be used.
 */

import { getSMSProvider, type SMSProvider, type SMSResult } from "./sms-service"

interface QueuedSMS {
  id: string
  phoneNumber: string
  message: string
  attempts: number
  maxAttempts: number
  status: "pending" | "processing" | "failed" | "completed"
  createdAt: string
  lastAttempt?: string
  nextAttempt?: string
}

interface QueueStats {
  total: number
  pending: number
  processing: number
  completed: number
  failed: number
}

class SMSQueue {
  private queue: QueuedSMS[] = []
  private processing = false
  private readonly maxRetries: number = 3
  private readonly retryDelay: number = 60000 // 1 minute
  private readonly smsProvider: SMSProvider

  constructor() {
    this.smsProvider = getSMSProvider()
  }

  enqueue(phoneNumber: string, message: string, options: { priority: number } = { priority: 1 }): string {
    const id = `sms_${Date.now()}_${Math.random()}`
    const newMessage: QueuedSMS = {
      id,
      phoneNumber,
      message,
      attempts: 0,
      maxAttempts: this.maxRetries,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    this.queue.push(newMessage)
    this.sortQueue() // Sort the queue based on priority
    this.processQueue() // Start processing if not already running
    return id
  }

  private sortQueue(): void {
    // Sort by priority (lower value means higher priority)
    this.queue.sort((a, b) => {
      // Assuming higher priority messages have a 'priority' property with a lower numerical value
      const priorityA = this.getMessagePriority(a)
      const priorityB = this.getMessagePriority(b)
      return priorityA - priorityB
    })
  }

  private getMessagePriority(message: QueuedSMS): number {
    // Default priority if not explicitly defined (lower number = higher priority)
    return 1 // Adjust as needed
  }

  async processQueue(): Promise<void> {
    if (this.processing) return
    if (this.queue.length === 0) return

    this.processing = true
    while (this.queue.length > 0) {
      const message = this.queue.shift()
      if (!message) break

      message.status = "processing"
      message.lastAttempt = new Date().toISOString()

      try {
        const result: SMSResult = await this.smsProvider.sendSMS(message.phoneNumber, message.message)

        if (result.success) {
          message.status = "completed"
        } else {
          message.status = "failed"
          message.attempts++
          message.nextAttempt = new Date(Date.now() + this.retryDelay).toISOString()

          if (message.attempts <= message.maxAttempts) {
            this.queue.push(message) // Add back to queue for retry
            this.sortQueue()
          }
        }
      } catch (error) {
        console.error("Błąd podczas przetwarzania wiadomości SMS:", error)
        message.status = "failed"
        message.attempts++
        message.nextAttempt = new Date(Date.now() + this.retryDelay).toISOString()

        if (message.attempts <= message.maxAttempts) {
          this.queue.push(message) // Add back to queue for retry
          this.sortQueue()
        }
      }
    }
    this.processing = false
  }

  getStats(): QueueStats {
    const total = this.queue.length
    const pending = this.queue.filter((msg) => msg.status === "pending").length
    const processing = this.queue.filter((msg) => msg.status === "processing").length
    const completed = this.queue.filter((msg) => msg.status === "completed").length
    const failed = this.queue.filter((msg) => msg.status === "failed").length

    return { total, pending, processing, completed, failed }
  }

  getAllMessages(): QueuedSMS[] {
    return [...this.queue]
  }

  retrySMS(id: string): boolean {
    const message = this.queue.find((msg) => msg.id === id && msg.status === "failed")
    if (!message || message.attempts >= message.maxAttempts) {
      return false
    }

    message.status = "pending"
    message.attempts++
    message.nextAttempt = undefined
    this.sortQueue()
    this.processQueue()
    return true
  }
}

// Singleton instance
let smsQueue: SMSQueue | null = null

// Function to get the SMS queue instance
export function getSMSQueue(): SMSQueue {
  if (!smsQueue) {
    smsQueue = new SMSQueue()
  }
  return smsQueue
}

export async function addToSmsQueue(message: { to: string; body: string; scheduledFor: Date }): Promise<void> {
  const queue = getSMSQueue()
  queue.enqueue(message.to, message.body)
}
