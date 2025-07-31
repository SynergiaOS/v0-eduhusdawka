"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AppointmentForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    smsConfirmation: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Błąd formularza",
        description: "Proszę wypełnić wszystkie wymagane pola.",
        variant: "destructive",
      })
      return
    }

    // Create email subject and body
    const subject = `Prośba o umówienie wizyty: ${formData.service}`
    const body = `
Imię i nazwisko: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Usługa: ${formData.service}
Preferowana data: ${formData.preferredDate || "Nie określono"}
Preferowana godzina: ${formData.preferredTime || "Nie określono"}
Potwierdzenie SMS: ${formData.smsConfirmation ? "TAK" : "NIE"}

Wiadomość:
${formData.message || "Brak dodatkowej wiadomości"}
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:j.swirydowicz.eduhustawka2024@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    toast({
      title: "Formularz przygotowany",
      description: "Otwieranie klienta poczty z wypełnionymi danymi...",
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-6 text-teal-700 font-heading">Umów wizytę</h3>

      <Button
        className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg font-medium transition-all hover:scale-105"
        onClick={() => (window.location.href = "/rezerwacja")}
      >
        <Calendar className="h-5 w-5 mr-2" />
        Zarezerwuj termin wizyty
      </Button>

      <p className="mt-4 text-sm text-gray-500">Kliknij przycisk powyżej, aby przejść do systemu rezerwacji online.</p>
    </div>
  )
}
