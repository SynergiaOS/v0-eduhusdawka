"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Clock, RefreshCw } from "lucide-react"

interface QueueStats {
  total: number
  pending: number
  processing: number
  completed: number
  failed: number
}

interface QueuedMessage {
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

export default function SMSQueueStats() {
  const [stats, setStats] = useState<QueueStats | null>(null)
  const [messages, setMessages] = useState<QueuedMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/sms-queue")

      if (!response.ok) {
        throw new Error("Nie udało się pobrać statystyk kolejki")
      }

      const data = await response.json()
      setStats(data.stats)
      setMessages(data.messages)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wystąpił nieznany błąd")
    } finally {
      setLoading(false)
    }
  }

  const retryMessage = async (id: string) => {
    try {
      const response = await fetch("/api/sms-queue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "retry", id }),
      })

      if (!response.ok) {
        throw new Error("Nie udało się ponowić wysyłki wiadomości")
      }

      // Odśwież statystyki
      fetchStats()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wystąpił nieznany błąd")
    }
  }

  useEffect(() => {
    fetchStats()

    // Odświeżaj statystyki co 30 sekund
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
            Oczekuje
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Przetwarzanie
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800">
            Wysłano
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800">
            Błąd
          </Badge>
        )
      default:
        return <Badge variant="outline">Nieznany</Badge>
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Statystyki kolejki SMS</span>
          <Button variant="outline" size="sm" onClick={fetchStats} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Odśwież
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-100 p-3 rounded-md">
              <div className="text-sm text-gray-500">Wszystkie</div>
              <div className="text-2xl font-bold">{stats.total}</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-md">
              <div className="text-sm text-yellow-600">Oczekujące</div>
              <div className="text-2xl font-bold">{stats.pending}</div>
            </div>
            <div className="bg-green-50 p-3 rounded-md">
              <div className="text-sm text-green-600">Wysłane</div>
              <div className="text-2xl font-bold">{stats.completed}</div>
            </div>
            <div className="bg-red-50 p-3 rounded-md">
              <div className="text-sm text-red-600">Błędy</div>
              <div className="text-2xl font-bold">{stats.failed}</div>
            </div>
          </div>
        )}

        <h3 className="text-lg font-medium mb-3">Ostatnie wiadomości</h3>

        {loading && !messages.length ? (
          <div className="text-center py-4">Ładowanie...</div>
        ) : messages.length === 0 ? (
          <div className="text-center py-4 text-gray-500">Brak wiadomości w kolejce</div>
        ) : (
          <div className="space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className="border rounded-md p-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium truncate">{msg.phoneNumber}</div>
                  {getStatusBadge(msg.status)}
                </div>
                <p className="text-sm text-gray-600 mb-2">{msg.message}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {new Date(msg.createdAt).toLocaleString()}
                  </div>
                  <div>
                    Próby: {msg.attempts}/{msg.maxAttempts}
                  </div>
                </div>
                {msg.status === "failed" && (
                  <div className="mt-2">
                    <Button variant="outline" size="sm" onClick={() => retryMessage(msg.id)} className="text-xs">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Ponów wysyłkę
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
