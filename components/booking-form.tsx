"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import BookingCalendar from "@/components/booking-calendar"
import BookingConfirmation from "@/components/booking-confirmation"
import { createBooking } from "@/app/actions/booking-actions"
import type { DaySchedule } from "@/types/booking"
import { availableSlots } from "@/data/available-slots"
import { useUserPreferences } from "@/contexts/user-preferences-context"

export default function BookingForm() {
  const { toast } = useToast()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingReference, setBookingReference] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    childName: "",
    childAge: "",
    message: "",
    acceptTerms: false,
    smsNotification: true,
  })
  const { trackServiceBooking } = useUserPreferences()

  // Referencje do elementów formularza dla zarządzania focusem
  const stepOneHeadingRef = useRef<HTMLHeadingElement>(null)
  const stepTwoHeadingRef = useRef<HTMLHeadingElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  // Przesunięcie focusu po zmianie kroku
  useEffect(() => {
    if (step === 1 && stepOneHeadingRef.current) {
      stepOneHeadingRef.current.focus()
    } else if (step === 2 && stepTwoHeadingRef.current) {
      stepTwoHeadingRef.current.focus()
    }
  }, [step])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectTimeSlot = (timeSlotId: string) => {
    setSelectedTimeSlot(timeSlotId)
  }

  const handleNextStep = () => {
    if (step === 1 && !selectedTimeSlot) {
      toast({
        title: "Wybierz termin",
        description: "Proszę wybrać dostępny termin wizyty.",
        variant: "destructive",
      })
      return
    }

    setStep(step + 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !selectedTimeSlot ||
      !formData.acceptTerms
    ) {
      toast({
        title: "Błąd formularza",
        description: "Proszę wypełnić wszystkie wymagane pola i zaakceptować regulamin.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const [date, time] = selectedTimeSlot.split("-")
      const result = await createBooking({
        ...formData,
        date,
        time,
      })

      if (result.success) {
        // Śledzimy rezerwację usługi
        trackServiceBooking(formData.service)

        setBookingReference(result.reference || "")
        setBookingConfirmed(true)
        setStep(3)
      } else {
        toast({
          title: "Błąd rezerwacji",
          description: result.message || "Wystąpił błąd podczas rezerwacji. Spróbuj ponownie później.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Błąd systemu",
        description: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.",
        variant: "destructive",
      })
      console.error("Booking error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Funkcja do formatowania daty i godziny
  const formatDateTime = (timeSlotId: string | null) => {
    if (!timeSlotId) return { date: "", time: "" }

    const [dateStr, timeStr] = timeSlotId.split("-")
    const date = new Date(dateStr)

    const formattedDate = date.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })

    return { date: formattedDate, time: timeStr }
  }

  const { date: formattedDate, time: formattedTime } = formatDateTime(selectedTimeSlot)

  if (bookingConfirmed) {
    return (
      <BookingConfirmation
        name={formData.name}
        service={formData.service}
        date={formattedDate}
        time={formattedTime}
        reference={bookingReference}
        smsNotification={formData.smsNotification}
        phone={formData.phone}
      />
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" role="region" aria-label="Formularz rezerwacji">
      {/* Nagłówek z krokami */}
      <div className="bg-teal-600 p-3 sm:p-4" role="navigation" aria-label="Kroki formularza">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                step >= 1 ? "bg-white text-teal-600" : "bg-teal-400 text-white"
              }`}
              aria-hidden="true"
            >
              1
            </div>
            <span
              className="text-white text-xs sm:text-sm font-medium hidden sm:inline"
              aria-current={step === 1 ? "step" : undefined}
            >
              Wybierz termin
            </span>
          </div>
          <div className="h-0.5 flex-grow mx-1 sm:mx-2 bg-teal-400" aria-hidden="true"></div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                step >= 2 ? "bg-white text-teal-600" : "bg-teal-400 text-white"
              }`}
              aria-hidden="true"
            >
              2
            </div>
            <span
              className="text-white text-xs sm:text-sm font-medium hidden sm:inline"
              aria-current={step === 2 ? "step" : undefined}
            >
              Dane osobowe
            </span>
          </div>
          <div className="h-0.5 flex-grow mx-1 sm:mx-2 bg-teal-400" aria-hidden="true"></div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                step >= 3 ? "bg-white text-teal-600" : "bg-teal-400 text-white"
              }`}
              aria-hidden="true"
            >
              3
            </div>
            <span
              className="text-white text-xs sm:text-sm font-medium hidden sm:inline"
              aria-current={step === 3 ? "step" : undefined}
            >
              Potwierdzenie
            </span>
          </div>
        </div>

        {/* Ukryty tekst dla czytników ekranu */}
        <div className="sr-only" aria-live="polite">
          Krok {step} z 3: {step === 1 ? "Wybierz termin" : step === 2 ? "Dane osobowe" : "Potwierdzenie"}
        </div>
      </div>

      {/* Zawartość formularza */}
      <form onSubmit={handleSubmit} className="p-3 sm:p-4 md:p-6">
        {step === 1 && (
          <div>
            <h3
              ref={stepOneHeadingRef}
              className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-teal-700"
              tabIndex={-1}
            >
              Wybierz termin wizyty
            </h3>
            <BookingCalendar
              schedule={availableSlots as DaySchedule[]}
              onSelectTimeSlot={handleSelectTimeSlot}
              selectedTimeSlot={selectedTimeSlot}
            />

            {selectedTimeSlot && (
              <div className="mt-4 p-3 bg-teal-50 rounded-md border border-teal-100" role="status" aria-live="polite">
                <h4 className="font-medium text-teal-700 text-sm sm:text-base">Wybrany termin:</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  {formattedDate}, godz. {formattedTime}
                </p>
              </div>
            )}

            <div className="mt-4 sm:mt-6 flex justify-end">
              <Button
                type="button"
                onClick={handleNextStep}
                className="bg-teal-600 hover:bg-teal-700 text-white"
                aria-label="Przejdź do danych osobowych"
              >
                Dalej
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3
              ref={stepTwoHeadingRef}
              className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-teal-700"
              tabIndex={-1}
            >
              Dane osobowe
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name" id="name-label">
                    Imię i nazwisko rodzica/opiekuna *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                    aria-labelledby="name-label"
                    aria-required="true"
                    ref={nameInputRef}
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" id="email-label">
                    Adres e-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                    aria-labelledby="email-label"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="phone" id="phone-label">
                    Numer telefonu *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                    aria-labelledby="phone-label"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="service" id="service-label">
                    Wybierz usługę *
                  </Label>
                  <Select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base"
                    aria-labelledby="service-label"
                    aria-required="true"
                  >
                    <option value="">Wybierz usługę</option>
                    <option value="diagnoza-korp">Diagnoza KORP</option>
                    <option value="terapia-reki">Terapia Ręki</option>
                    <option value="trening-umiejetnosci-spolecznych">Trening Umiejętności Społecznych</option>
                    <option value="indywidualna-stymulacja-sluchu-johansena">
                      Indywidualna Stymulacja Słuchu Johansena
                    </option>
                    <option value="trening-neuroflow">Trening Neuroflow</option>
                    <option value="wczesna-nauka-czytania">Wczesna Nauka Czytania</option>
                    <option value="konsultacja">Konsultacja</option>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="childName" id="childName-label">
                    Imię dziecka
                  </Label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    className="text-sm sm:text-base"
                    aria-labelledby="childName-label"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="childAge" id="childAge-label">
                    Wiek dziecka
                  </Label>
                  <Input
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className="text-sm sm:text-base"
                    aria-labelledby="childAge-label"
                  />
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="message" id="message-label">
                  Dodatkowe informacje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="text-sm sm:text-base"
                  placeholder="Opisz cel wizyty, specjalne potrzeby lub inne istotne informacje"
                  aria-labelledby="message-label"
                />
              </div>

              <div className="flex items-start space-x-2 pt-1 sm:pt-2">
                <Checkbox
                  id="smsNotification"
                  checked={formData.smsNotification}
                  onCheckedChange={(checked) => handleCheckboxChange("smsNotification", checked as boolean)}
                  aria-labelledby="smsNotification-label"
                />
                <Label
                  htmlFor="smsNotification"
                  id="smsNotification-label"
                  className="text-xs sm:text-sm font-normal leading-tight"
                >
                  Chcę otrzymać przypomnienie SMS o wizycie 24h przed terminem
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleCheckboxChange("acceptTerms", checked as boolean)}
                  required
                  aria-labelledby="acceptTerms-label"
                  aria-required="true"
                />
                <Label
                  htmlFor="acceptTerms"
                  id="acceptTerms-label"
                  className="text-xs sm:text-sm font-normal leading-tight"
                >
                  Akceptuję{" "}
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    className="text-teal-600 hover:underline"
                    rel="noreferrer"
                  >
                    politykę prywatności
                  </a>{" "}
                  i wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji usługi *
                </Label>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 flex justify-between">
              <Button type="button" variant="outline" onClick={handlePrevStep} aria-label="Wróć do wyboru terminu">
                Wstecz
              </Button>
              <Button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white"
                disabled={isSubmitting}
                aria-label="Zarezerwuj wizytę"
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Przetwarzanie..." : "Zarezerwuj wizytę"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
