import type { Booking } from "@/types/booking"
import { getSMSQueue } from "./sms-queue"

// Interfejs dla dostawcy usług SMS
export interface SMSProvider {
  sendSMS: (phoneNumber: string, message: string) => Promise<SMSResult>
}

// Typ wyniku wysyłania SMS
export interface SMSResult {
  success: boolean
  messageId?: string
  error?: string
}

// Klasa bazowa dla dostawcy SMS
export class TwilioSMSProvider implements SMSProvider {
  private accountSid: string
  private authToken: string
  private fromNumber: string

  constructor() {
    // Pobieramy dane konfiguracyjne z zmiennych środowiskowych
    this.accountSid = process.env.TWILIO_ACCOUNT_SID || ""
    this.authToken = process.env.TWILIO_AUTH_TOKEN || ""
    this.fromNumber = process.env.TWILIO_PHONE_NUMBER || ""
  }

  async sendSMS(phoneNumber: string, message: string): Promise<SMSResult> {
    try {
      // Sprawdzamy czy mamy wszystkie potrzebne dane konfiguracyjne
      if (!this.accountSid || !this.authToken || !this.fromNumber) {
        throw new Error("Brak konfiguracji Twilio")
      }

      // Formatujemy numer telefonu (dodajemy +48 jeśli nie ma prefiksu kraju)
      const formattedPhone = this.formatPhoneNumber(phoneNumber)

      // W rzeczywistej implementacji, tutaj byłoby wywołanie API Twilio
      // Dla celów demonstracyjnych, symulujemy sukces
      console.log(`Wysyłanie SMS do ${formattedPhone}: ${message}`)

      // Symulacja opóźnienia API
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Symulacja losowych błędów (20% szans na błąd) - tylko do testowania mechanizmu ponownych prób
      if (Math.random() < 0.2) {
        throw new Error("Symulowany błąd API Twilio")
      }

      return {
        success: true,
        messageId: `msg_${Date.now()}`,
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania SMS:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Nieznany błąd",
      }
    }
  }

  private formatPhoneNumber(phoneNumber: string): string {
    // Usuwamy wszystkie znaki niebędące cyframi
    const digitsOnly = phoneNumber.replace(/\D/g, "")

    // Jeśli numer nie zaczyna się od +, dodajemy prefiks kraju +48 (Polska)
    if (!phoneNumber.startsWith("+")) {
      return `+48${digitsOnly}`
    }

    return phoneNumber
  }
}

// Singleton instancja dostawcy SMS
let smsProvider: SMSProvider | null = null

// Funkcja do uzyskania instancji dostawcy SMS
export function getSMSProvider(): SMSProvider {
  if (!smsProvider) {
    smsProvider = new TwilioSMSProvider()
  }
  return smsProvider
}

// Funkcja do wysyłania powiadomień SMS o rezerwacji (teraz używa kolejki)
export async function sendBookingConfirmationSMS(booking: Booking): Promise<SMSResult> {
  const queue = getSMSQueue()

  const message = `EduHustawka: Dziękujemy za rezerwację wizyty. Termin: ${booking.date}, godz. ${
    booking.timeSlot.split("-")[1]
  }. Potwierdzenie zostało wysłane na adres email: ${booking.email}.`

  // Dodaj do kolejki z wysokim priorytetem
  queue.enqueue(booking.phone, message, { priority: 2 })

  // Zwróć sukces, ponieważ wiadomość została dodana do kolejki
  return {
    success: true,
    messageId: `queued_${Date.now()}`,
  }
}

// Funkcja do wysyłania przypomnień o wizycie (teraz używa kolejki)
export async function sendBookingReminderSMS(booking: Booking): Promise<SMSResult> {
  const queue = getSMSQueue()

  const message = `EduHustawka: Przypominamy o wizycie jutro o godz. ${
    booking.timeSlot.split("-")[1]
  }. W razie pytań prosimy o kontakt.`

  // Dodaj do kolejki z normalnym priorytetem
  queue.enqueue(booking.phone, message, { priority: 1 })

  // Zwróć sukces, ponieważ wiadomość została dodana do kolejki
  return {
    success: true,
    messageId: `queued_${Date.now()}`,
  }
}

// Nowa funkcja do wysyłania powiadomień o anulowaniu rezerwacji
export async function sendBookingCancellationSMS(booking: Booking): Promise<SMSResult> {
  const queue = getSMSQueue()

  const message = `EduHustawka: Twoja rezerwacja na dzień ${booking.date} została anulowana. W razie pytań prosimy o kontakt.`

  // Dodaj do kolejki z wysokim priorytetem
  queue.enqueue(booking.phone, message, { priority: 2 })

  // Zwróć sukces, ponieważ wiadomość została dodana do kolejki
  return {
    success: true,
    messageId: `queued_${Date.now()}`,
  }
}
