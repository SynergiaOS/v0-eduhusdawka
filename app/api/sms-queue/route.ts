import { NextResponse } from "next/server"
import { getSMSQueue } from "@/lib/sms-queue"

// Endpoint API do pobierania statystyk kolejki SMS
export async function GET(request: Request) {
  try {
    const queue = getSMSQueue()
    const stats = queue.getStats()
    const messages = queue.getAllMessages()

    return NextResponse.json({
      stats,
      messages: messages.map((msg) => ({
        ...msg,
        message: msg.message.substring(0, 50) + (msg.message.length > 50 ? "..." : ""),
      })),
    })
  } catch (error) {
    console.error("Błąd podczas pobierania statystyk kolejki SMS:", error)
    return NextResponse.json({ error: "Wystąpił błąd podczas pobierania statystyk kolejki" }, { status: 500 })
  }
}

// Endpoint API do ponownego wysyłania nieudanych wiadomości
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { action, id } = data

    if (action === "retry" && id) {
      const queue = getSMSQueue()
      const result = queue.retrySMS(id)

      if (result) {
        return NextResponse.json({ success: true, message: "Zaplanowano ponowną próbę wysłania wiadomości" })
      } else {
        return NextResponse.json(
          { error: "Nie znaleziono wiadomości lub nie można jej ponownie wysłać" },
          { status: 400 },
        )
      }
    }

    return NextResponse.json({ error: "Nieprawidłowe żądanie" }, { status: 400 })
  } catch (error) {
    console.error("Błąd podczas przetwarzania żądania kolejki SMS:", error)
    return NextResponse.json({ error: "Wystąpił błąd podczas przetwarzania żądania" }, { status: 500 })
  }
}
