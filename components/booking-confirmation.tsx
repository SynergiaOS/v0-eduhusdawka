import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, Phone } from "lucide-react"
import Link from "next/link"

interface BookingConfirmationProps {
  name: string
  service: string
  date: string
  time: string
  reference: string
  smsNotification: boolean
  phone: string
}

export default function BookingConfirmation({
  name,
  service,
  date,
  time,
  reference,
  smsNotification,
  phone,
}: BookingConfirmationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-700">Rezerwacja potwierdzona!</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4">
        Dziękujemy, {name}! Twoja wizyta została pomyślnie zarezerwowana.
      </p>

      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 max-w-md mx-auto">
        <div className="flex items-start mb-2">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs sm:text-sm text-gray-500">Data wizyty:</p>
            <p className="text-sm sm:text-base font-medium">{date}</p>
          </div>
        </div>

        <div className="flex items-start mb-2">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
          <div className="text-left">
            <p className="text-xs sm:text-sm text-gray-500">Godzina:</p>
            <p className="text-sm sm:text-base font-medium">{time}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-xs sm:text-sm text-gray-500">Usługa:</p>
            <p className="text-sm sm:text-base font-medium">{service}</p>
          </div>
        </div>
      </div>

      {smsNotification && (
        <div className="flex items-center justify-center mb-4 text-xs sm:text-sm text-gray-600">
          <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-teal-600" />
          <p>Przypomnienie SMS zostanie wysłane na numer {phone} 24h przed wizytą</p>
        </div>
      )}

      <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 sm:p-4 mb-4 max-w-md mx-auto">
        <p className="text-xs sm:text-sm text-yellow-800 mb-1">Numer rezerwacji:</p>
        <p className="text-sm sm:text-base font-mono font-medium">{reference}</p>
        <p className="text-xs text-yellow-700 mt-2">
          Zachowaj ten numer. Może być potrzebny w przypadku zmiany lub odwołania wizyty.
        </p>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
        <Link href="/" passHref>
          <Button variant="outline" className="text-xs sm:text-sm">
            Powrót do strony głównej
          </Button>
        </Link>

        <Link href="/kontakt" passHref>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm">Kontakt</Button>
        </Link>
      </div>
    </div>
  )
}
