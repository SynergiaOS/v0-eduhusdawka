"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function SimpleContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Gotowy na pierwszą konsultację?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Zadzwoń lub napisz do nas, aby umówić się na bezpłatną konsultację. Wspólnie znajdziemy najlepsze
            rozwiązanie dla Twojego dziecka.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zadzwoń</h3>
              <p className="text-gray-600 mb-4">Porozmawiajmy o potrzebach Twojego dziecka</p>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => (window.location.href = "tel:+48531509008")}
              >
                531 509 008
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Napisz</h3>
              <p className="text-gray-600 mb-4">Wypełnij formularz kontaktowy</p>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Formularz
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Odwiedź</h3>
              <p className="text-gray-600 mb-4">Umów się na wizytę w gabinecie</p>
              <Link href="/kontakt">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
                  Lokalizacja
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-teal-50 rounded-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-teal-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Godziny pracy</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p>
                  <strong>Poniedziałek - Piątek:</strong> 9:00 - 18:00
                </p>
                <p>
                  <strong>Sobota:</strong> 9:00 - 14:00
                </p>
              </div>
              <div>
                <p>
                  <strong>Niedziela:</strong> Zamknięte
                </p>
                <p>
                  <strong>Konsultacje telefoniczne:</strong> Codziennie 8:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
