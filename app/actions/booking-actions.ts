"use server"

import { v4 as uuidv4 } from "uuid"
import { addToSmsQueue } from "@/lib/sms-queue"

type BookingData = {
  name: string
  email: string
  phone: string
  date: string
  service: string
  message?: string
}

export async function createBooking(data: BookingData) {
  try {
    // W rzeczywistej aplikacji tutaj byłoby zapisanie do bazy danych
    // Symulacja opóźnienia serwera
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generowanie unikalnego identyfikatora rezerwacji
    const reference = `BK-${uuidv4().substring(0, 8).toUpperCase()}`

    // Formatowanie daty dla wiadomości SMS
    const bookingDate = new Date(data.date)
    const formattedDate = bookingDate.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    const formattedTime = bookingDate.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    })

    // Przygotowanie wiadomości SMS
    const smsMessage = `EduHustawka: Potwierdzenie rezerwacji ${reference}. Termin: ${formattedDate}, godz. ${formattedTime}. Dziękujemy!`

    // Dodanie do kolejki SMS
    await addToSmsQueue({
      to: data.phone,
      body: smsMessage,
      scheduledFor: new Date(), // Wysyłka natychmiastowa
    })

    return {
      success: true,
      reference,
      message: "Rezerwacja została pomyślnie utworzona.",
    }
  } catch (error) {
    console.error("Error creating booking:", error)
    return {
      success: false,
      message: "Wystąpił błąd podczas tworzenia rezerwacji.",
    }
  }
}

// Funkcja do sprawdzania dostępności terminu
export async function checkAvailability(date: string, time: string) {
  try {
    // W rzeczywistej aplikacji tutaj byłoby sprawdzenie w bazie danych
    // Symulacja opóźnienia serwera
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Symulacja losowej dostępności (w rzeczywistej aplikacji byłoby to sprawdzane w bazie danych)
    const isAvailable = Math.random() > 0.2 // 80% szans, że termin jest dostępny

    return {
      success: true,
      isAvailable,
    }
  } catch (error) {
    console.error("Error checking availability:", error)
    return {
      success: false,
      isAvailable: false,
      message: "Wystąpił błąd podczas sprawdzania dostępności.",
    }
  }
}
