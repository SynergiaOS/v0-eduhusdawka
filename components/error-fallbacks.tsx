"use client"

import { AlertCircle, Home, RefreshCw, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ErrorFallbackProps {
  error?: Error
  reset?: () => void
}

export function ContactFormError({ error, reset }: ErrorFallbackProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
      <div className="text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem z formularzem kontaktowym</h3>
        <p className="text-gray-600 mb-4">
          Nie udało się załadować formularza. Możesz skontaktować się z nami bezpośrednio.
        </p>
        <div className="space-y-3">
          {reset && (
            <Button onClick={reset} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Spróbuj ponownie
            </Button>
          )}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <a href="tel:531509008">Zadzwoń: 531 509 008</a>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <a href="mailto:j.swirydowicz.eduhustawka2024@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BookingFormError({ error, reset }: ErrorFallbackProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
      <div className="text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem z rezerwacją</h3>
        <p className="text-gray-600 mb-4">
          Nie udało się załadować systemu rezerwacji. Skontaktuj się z nami telefonicznie.
        </p>
        <div className="space-y-3">
          {reset && (
            <Button onClick={reset} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Spróbuj ponownie
            </Button>
          )}
          <Button variant="outline" asChild className="w-full bg-transparent">
            <a href="tel:531509008">Zadzwoń: 531 509 008</a>
          </Button>
          <Button variant="outline" asChild className="w-full bg-transparent">
            <Link href="/kontakt">Przejdź do kontaktu</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ServicesError({ error, reset }: ErrorFallbackProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
      <div className="text-center">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem z ładowaniem usług</h3>
        <p className="text-gray-600 mb-4">
          Nie udało się załadować listy usług. Sprawdź połączenie internetowe i spróbuj ponownie.
        </p>
        <div className="space-y-3">
          {reset && (
            <Button onClick={reset} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Spróbuj ponownie
            </Button>
          )}
          <Button variant="outline" asChild className="w-full bg-transparent">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Powrót do strony głównej
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function MapError({ error, reset }: ErrorFallbackProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 h-64 flex items-center justify-center">
      <div className="text-center">
        <AlertCircle className="h-8 w-8 text-gray-500 mx-auto mb-2" />
        <p className="text-gray-600 mb-3">Nie udało się załadować mapy</p>
        <div className="text-sm text-gray-500 mb-3">
          <p>Adres: Polna 17, 18-106 Pomigacze</p>
          <p>GPS: 53.1167, 23.0667</p>
        </div>
        {reset && (
          <Button size="sm" variant="outline" onClick={reset}>
            <RefreshCw className="h-3 w-3 mr-1" />
            Spróbuj ponownie
          </Button>
        )}
      </div>
    </div>
  )
}
