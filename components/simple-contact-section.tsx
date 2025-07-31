"use client"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export default function SimpleContactSection() {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading heading-fancy">
            Umów się na wizytę
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kontakt */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-teal-700">Kontakt bezpośredni</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a href="tel:+48531509008" className="text-teal-600 hover:underline">
                        531 509 008
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <p className="font-medium">Lokalizacja</p>
                      <p className="text-gray-600">Białystok</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <p className="font-medium">Dostępność</p>
                      <p className="text-gray-600">Pon-Pt: 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Działania */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-teal-700">Jak się umówić?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      1
                    </div>
                    <p className="text-gray-600">Zadzwoń lub napisz wiadomość</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      2
                    </div>
                    <p className="text-gray-600">Omówimy potrzeby Twojego dziecka</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      3
                    </div>
                    <p className="text-gray-600">Ustalimy termin pierwszej wizyty</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
                  onClick={() => (window.location.href = "tel:+48531509008")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 bg-transparent"
                  onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Napisz wiadomość
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
