"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import type { DaySchedule, TimeSlot } from "@/types/booking"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Clock, CalendarIcon, Info } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface BookingCalendarProps {
  schedule: DaySchedule[]
  onSelectTimeSlot: (timeSlotId: string) => void
  selectedTimeSlot: string | null
}

export default function BookingCalendar({ schedule, onSelectTimeSlot, selectedTimeSlot }: BookingCalendarProps) {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0)
  const weeksCount = Math.ceil(schedule.length / 7)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const [visibleDays, setVisibleDays] = useState(7)
  const [announcementText, setAnnouncementText] = useState("")
  const daysContainerRef = useRef<HTMLDivElement>(null)
  const timeSlotsRef = useRef<HTMLDivElement>(null)

  // Dostosuj liczbę widocznych dni w zależności od szerokości ekranu
  useEffect(() => {
    setVisibleDays(isMobile ? 3 : 7)
  }, [isMobile])

  // Podziel harmonogram na tygodnie
  const weeks: DaySchedule[][] = []
  for (let i = 0; i < schedule.length; i += visibleDays) {
    weeks.push(schedule.slice(i, i + visibleDays))
  }

  const currentWeek = weeks[currentWeekIndex] || []

  const goToPreviousWeek = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1)
      setAnnouncementText(`Wyświetlanie poprzedniego tygodnia`)

      // Przesunięcie focusu na pierwszy dzień nowego tygodnia po zmianie
      setTimeout(() => {
        const firstDayButton = daysContainerRef.current?.querySelector("button") as HTMLButtonElement | null
        if (firstDayButton) firstDayButton.focus()
      }, 100)
    }
  }

  const goToNextWeek = () => {
    if (currentWeekIndex < weeks.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1)
      setAnnouncementText(`Wyświetlanie następnego tygodnia`)

      // Przesunięcie focusu na pierwszy dzień nowego tygodnia po zmianie
      setTimeout(() => {
        const firstDayButton = daysContainerRef.current?.querySelector("button") as HTMLButtonElement | null
        if (firstDayButton) firstDayButton.focus()
      }, 100)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pl-PL", { day: "numeric", month: "numeric" })
  }

  const formatFullDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
  }

  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  const handleDaySelect = (day: DaySchedule) => {
    setSelectedDay(day.date)
    const formattedDate = formatFullDate(day.date)
    setAnnouncementText(
      `Wybrano dzień: ${formattedDate}. ${
        day.slots.some((slot) => slot.isAvailable)
          ? `Dostępnych terminów: ${day.slots.filter((slot) => slot.isAvailable).length}`
          : "Brak dostępnych terminów w tym dniu."
      }`,
    )

    // Przesunięcie focusu na pierwszy dostępny slot czasowy
    setTimeout(() => {
      const firstSlotButton = timeSlotsRef.current?.querySelector("button:not([disabled])") as HTMLButtonElement | null
      if (firstSlotButton) firstSlotButton.focus()
    }, 100)
  }

  const handleTimeSlotSelect = (timeSlot: TimeSlot, date: string) => {
    if (timeSlot.isAvailable) {
      onSelectTimeSlot(`${date}-${timeSlot.startTime}`)
      setAnnouncementText(`Wybrano termin: ${formatFullDate(date)}, godzina ${timeSlot.startTime}`)
    }
  }

  // Znajdź dzień, którego sloty są aktualnie wyświetlane
  const selectedDaySchedule = schedule.find((day) => day.date === selectedDay)

  // Obsługa nawigacji klawiaturą dla dni
  const handleDayKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, day: DaySchedule) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault()
        const nextButton = e.currentTarget.nextElementSibling as HTMLButtonElement | null
        if (nextButton) {
          nextButton.focus()
        } else if (currentWeekIndex < weeks.length - 1) {
          // Jeśli jesteśmy na ostatnim dniu, przejdź do następnego tygodnia
          goToNextWeek()
        }
        break
      case "ArrowLeft":
        e.preventDefault()
        const prevButton = e.currentTarget.previousElementSibling as HTMLButtonElement | null
        if (prevButton) {
          prevButton.focus()
        } else if (currentWeekIndex > 0) {
          // Jeśli jesteśmy na pierwszym dniu, przejdź do poprzedniego tygodnia
          goToPreviousWeek()
        }
        break
      case "Enter":
      case " ":
        e.preventDefault()
        handleDaySelect(day)
        break
    }
  }

  // Obsługa nawigacji klawiaturą dla slotów czasowych
  const handleTimeSlotKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, timeSlot: TimeSlot, date: string) => {
    const buttons = Array.from(timeSlotsRef.current?.querySelectorAll("button") || [])
    const currentIndex = buttons.indexOf(e.currentTarget)

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault()
        if (currentIndex < buttons.length - 1) {
          ;(buttons[currentIndex + 1] as HTMLButtonElement).focus()
        }
        break
      case "ArrowLeft":
        e.preventDefault()
        if (currentIndex > 0) {
          ;(buttons[currentIndex - 1] as HTMLButtonElement).focus()
        }
        break
      case "ArrowDown":
        e.preventDefault()
        const rowSize = isMobile ? 3 : 5
        if (currentIndex + rowSize < buttons.length) {
          ;(buttons[currentIndex + rowSize] as HTMLButtonElement).focus()
        }
        break
      case "ArrowUp":
        e.preventDefault()
        const rowSizeUp = isMobile ? 3 : 5
        if (currentIndex - rowSizeUp >= 0) {
          ;(buttons[currentIndex - rowSizeUp] as HTMLButtonElement).focus()
        } else {
          // Przejdź z powrotem do wyboru dni
          daysContainerRef.current?.querySelector(`button[data-date="${date}"]`)?.focus()
        }
        break
      case "Enter":
      case " ":
        e.preventDefault()
        if (timeSlot.isAvailable) {
          handleTimeSlotSelect(timeSlot, date)
        }
        break
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6" role="region" aria-label="Kalendarz rezerwacji">
      {/* Ukryty element dla ogłoszeń czytnika ekranu */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcementText}
      </div>

      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-teal-600" aria-hidden="true" />
          <h4 className="text-sm sm:text-base font-medium text-gray-800" id="calendar-heading">
            Wybierz dzień
          </h4>
        </div>
        <div className="flex space-x-1 sm:space-x-2" role="group" aria-label="Nawigacja kalendarza">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPreviousWeek}
            disabled={currentWeekIndex === 0}
            className="h-7 w-7 sm:h-8 sm:w-8 p-0"
            aria-label="Poprzedni tydzień"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextWeek}
            disabled={currentWeekIndex === weeks.length - 1}
            className="h-7 w-7 sm:h-8 sm:w-8 p-0"
            aria-label="Następny tydzień"
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Informacja o przewijaniu na małych ekranach */}
      {isMobile && (
        <div className="flex items-center justify-center text-xs text-gray-500 mb-2">
          <Info className="h-3 w-3 mr-1" aria-hidden="true" />
          <span>Przewiń, aby zobaczyć więcej dni</span>
        </div>
      )}

      {/* Dni tygodnia */}
      <div
        ref={daysContainerRef}
        className={`grid grid-cols-${visibleDays} gap-1 sm:gap-2 mb-3 sm:mb-4 ${isMobile ? "overflow-x-auto pb-2 snap-x" : ""}`}
        role="listbox"
        aria-labelledby="calendar-heading"
        tabIndex={0}
      >
        {currentWeek.map((day, index) => {
          const isAvailable = day.slots.some((slot) => slot.isAvailable)
          const dayLabel = `${day.dayOfWeek}, ${formatFullDate(day.date)}, ${
            isAvailable
              ? `dostępnych terminów: ${day.slots.filter((slot) => slot.isAvailable).length}`
              : "brak dostępnych terminów"
          }`

          return (
            <Button
              key={day.date}
              variant="outline"
              className={cn(
                "flex flex-col h-auto py-1 sm:py-2 px-0 sm:px-1 items-center justify-center min-w-[3rem] sm:min-w-0",
                selectedDay === day.date && "border-teal-600 bg-teal-50",
                !isAvailable && "opacity-50 cursor-not-allowed",
                isMobile && "snap-center",
              )}
              onClick={() => handleDaySelect(day)}
              onKeyDown={(e) => handleDayKeyDown(e, day)}
              disabled={!isAvailable}
              role="option"
              aria-selected={selectedDay === day.date}
              aria-label={dayLabel}
              data-date={day.date}
              tabIndex={0}
            >
              <span className="text-[0.65rem] sm:text-xs text-gray-500 w-full text-center">
                {day.dayOfWeek.substring(0, 3)}
              </span>
              <span className="text-xs sm:text-sm font-medium w-full text-center">{formatDate(day.date)}</span>
            </Button>
          )
        })}
      </div>

      {/* Dostępne godziny */}
      {selectedDaySchedule && (
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center mb-2 sm:mb-3">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-teal-600" aria-hidden="true" />
            <h4 className="text-sm sm:text-base font-medium text-gray-800" id="timeslots-heading">
              Dostępne godziny - {selectedDaySchedule.dayOfWeek}, {formatDate(selectedDaySchedule.date)}
            </h4>
          </div>

          <div
            ref={timeSlotsRef}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 sm:gap-2"
            role="listbox"
            aria-labelledby="timeslots-heading"
            tabIndex={0}
          >
            {selectedDaySchedule.slots.map((slot) => {
              const timeSlotId = `${selectedDaySchedule.date}-${slot.startTime}`
              const isSelected = selectedTimeSlot === timeSlotId
              const slotLabel = `${slot.startTime}, ${
                slot.isAvailable ? (isSelected ? "wybrano" : "dostępny") : "niedostępny"
              }`

              return (
                <Button
                  key={timeSlotId}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "text-xs sm:text-sm py-1 h-auto",
                    !slot.isAvailable && "opacity-50 cursor-not-allowed",
                    isSelected && "bg-teal-600 hover:bg-teal-700",
                  )}
                  onClick={() => handleTimeSlotSelect(slot, selectedDaySchedule.date)}
                  onKeyDown={(e) => handleTimeSlotKeyDown(e, slot, selectedDaySchedule.date)}
                  disabled={!slot.isAvailable}
                  role="option"
                  aria-selected={isSelected}
                  aria-label={slotLabel}
                  tabIndex={0}
                >
                  {slot.startTime}
                </Button>
              )
            })}
          </div>
        </div>
      )}

      {!selectedDay && (
        <div className="mt-4 sm:mt-6 text-center text-gray-500 text-xs sm:text-sm" aria-live="polite">
          Wybierz dzień, aby zobaczyć dostępne godziny
        </div>
      )}
    </div>
  )
}
