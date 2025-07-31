"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, Clock, CheckCircle, Calendar, User } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function BookingSection() {
  const [selectedStep, setSelectedStep] = useState(0)

  const steps = [
    {
      icon: Phone,
      title: "Zadzwoń lub napisz",
      description: "Skontaktuj się telefonicznie lub przez formularz kontaktowy",
    },
    {
      icon: User,
      title: "Rozmowa wstępna",
      description: "Omówimy potrzeby Twojego dziecka i odpowiednie metody terapii",
    },
    {
      icon: Calendar,
      title: "Ustalenie terminu",
      description: "Wspólnie wybierzemy dogodny termin pierwszej wizyty",
    },
    {
      icon: CheckCircle,
      title: "Potwierdzenie",
      description: "Otrzymasz potwierdzenie umówionej wizyty",
    },
  ]

  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading heading-fancy">Umów się na wizytę</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skontaktuj się ze mną, aby omówić potrzeby Twojego dziecka i ustalić termin wizyty
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Contact Options */}
          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-teal-200 hover:border-teal-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-teal-700">Zadzwoń bezpośrednio</CardTitle>
                  <CardDescription>Najszybszy sposób umówienia wizyty</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gray-800 mb-2">531 509 008</p>
                    <div className="flex items-center justify-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Pon-Pt: 8:00-16:00</span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń teraz
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-700">Napisz wiadomość</CardTitle>
                  <CardDescription>Wypełnij formularz kontaktowy</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Odpowiem w ciągu 24 godzin</p>
                    <p className="text-sm text-gray-500">j.swirydowicz.eduhustawka2024@gmail.com</p>
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Wypełnij formularz
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Process Steps */}
          <AnimatedSection delay={400}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Jak przebiega umówienie wizyty?</h3>

              <div className="grid md:grid-cols-4 gap-6">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={index}
                      className={`text-center p-4 rounded-lg transition-all cursor-pointer ${
                        selectedStep === index ? "bg-teal-50 border-2 border-teal-200" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedStep(index)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                          selectedStep === index ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">
                        {index + 1}. {step.title}
                      </div>
                      <div className="text-xs text-gray-600">{step.description}</div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-6 bg-teal-50 rounded-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">{selectedStep + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-800 mb-2">{steps[selectedStep].title}</h4>
                    <p className="text-teal-700">{steps[selectedStep].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Additional Info */}
          <AnimatedSection delay={600}>
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Informacje dodatkowe</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <strong className="text-gray-800">Pierwsza wizyta:</strong>
                    <br />
                    Konsultacja i diagnoza wstępna
                  </div>
                  <div>
                    <strong className="text-gray-800">Czas trwania:</strong>
                    <br />
                    45-60 minut
                  </div>
                  <div>
                    <strong className="text-gray-800">Lokalizacja:</strong>
                    <br />
                    Polna 17, Pomigacze
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
