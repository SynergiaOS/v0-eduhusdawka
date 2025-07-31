"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { availableServices } from "@/data/available-slots"
import { Check, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { pl } from "date-fns/locale"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Przykładowe dostępne godziny - w rzeczywistej aplikacji byłyby pobierane z API
  const availableTimes = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2)
    } else if (step === 2 && selectedService) {
      setStep(3)
    }
  }

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1)
    } else if (step === 3) {
      setStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Symulacja wysyłania danych do API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Resetowanie formularza po 3 sekundach
    setTimeout(() => {
      setIsSuccess(false)
      setStep(1)
      setSelectedDate(undefined)
      setSelectedTime(null)
      setSelectedService("")
      setFormData({
        name: "",
        email: "",
        phone: "",
        childName: "",
        childAge: "",
        notes: "",
      })
      onClose()
    }, 3000)
  }

  const disabledDates = {
    before: new Date(),
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-teal-800">
            {isSuccess ? "Rezerwacja przyjęta!" : "Zarezerwuj wizytę online"}
          </DialogTitle>
          <DialogDescription>
            {isSuccess
              ? "Dziękujemy za rezerwację. Wkrótce skontaktujemy się z Tobą, aby potwierdzić termin."
              : "Wybierz dogodny termin i wypełnij formularz, aby zarezerwować wizytę."}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Rezerwacja potwierdzona</h3>
            <p className="text-gray-600 text-center mb-6">Na Twój adres email wysłaliśmy potwierdzenie rezerwacji.</p>
            <div className="bg-gray-50 p-4 rounded-lg w-full">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Data:</div>
                <div className="font-medium">
                  {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: pl }) : ""}
                </div>
                <div className="text-gray-500">Godzina:</div>
                <div className="font-medium">{selectedTime}</div>
                <div className="text-gray-500">Usługa:</div>
                <div className="font-medium">
                  {selectedService
                    ? availableServices.find((s) => s.id === selectedService)?.name || selectedService
                    : ""}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">1. Wybierz termin wizyty</h3>
                  <div className="flex flex-col space-y-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={disabledDates}
                      className="rounded-md border mx-auto"
                      locale={pl}
                    />

                    {selectedDate && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Dostępne godziny na {format(selectedDate, "dd MMMM", { locale: pl })}
                        </h4>
                        <div className="grid grid-cols-4 gap-2">
                          {availableTimes.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={selectedTime === time ? "default" : "outline"}
                              className={cn("text-sm", selectedTime === time && "bg-teal-600 hover:bg-teal-700")}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Dalej
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">2. Wybierz rodzaj usługi</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service">Rodzaj usługi</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Wybierz rodzaj usługi" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableServices.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Wstecz
                  </Button>
                  <Button
                    onClick={handleNextStep}
                    disabled={!selectedService}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Dalej
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">3. Podaj swoje dane</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Imię i nazwisko rodzica/opiekuna *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childName">Imię dziecka *</Label>
                      <Input
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childAge">Wiek dziecka *</Label>
                      <Input
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Label htmlFor="notes">Dodatkowe informacje</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Opisz krótko powód wizyty, specjalne potrzeby lub inne istotne informacje"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Podsumowanie rezerwacji</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-500">Data:</div>
                    <div className="font-medium">
                      {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: pl }) : ""}
                    </div>
                    <div className="text-gray-500">Godzina:</div>
                    <div className="font-medium">{selectedTime}</div>
                    <div className="text-gray-500">Usługa:</div>
                    <div className="font-medium">
                      {selectedService
                        ? availableServices.find((s) => s.id === selectedService)?.name || selectedService
                        : ""}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handlePrevStep}>
                    Wstecz
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.name ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.childName ||
                      !formData.childAge
                    }
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    {isSubmitting ? "Przetwarzanie..." : "Zarezerwuj wizytę"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
