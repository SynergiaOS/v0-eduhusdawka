export interface TimeSlot {
  id: string
  startTime: string
  endTime: string
  isAvailable: boolean
}

export interface DaySchedule {
  date: string
  dayOfWeek: string
  slots: TimeSlot[]
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  childName: string
  childAge: string
  serviceType: string
  date: string
  timeSlot: string
  notes: string
}

export interface Booking extends BookingFormData {
  id: string
  createdAt: string
  status: "pending" | "confirmed" | "cancelled"
}
