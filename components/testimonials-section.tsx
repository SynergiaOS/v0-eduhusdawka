"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    role: "Mama Michała (8 lat)",
    content:
      "Pani Joanna to prawdziwy profesjonalista. Dzięki jej pomocy mój syn znacznie poprawił koncentrację i wyniki w nauce. Polecam z całego serca!",
    rating: 5,
    service: "Terapia pedagogiczna",
  },
  {
    id: 2,
    name: "Marcin Nowak",
    role: "Tata Zosi (6 lat)",
    content:
      "Córka ma spektrum autyzmu i dzięki terapii u Pani Joanny zaczęła lepiej komunikować się z otoczeniem. Jesteśmy bardzo wdzięczni za profesjonalne podejście.",
    rating: 5,
    service: "Wsparcie autyzmu",
  },
  {
    id: 3,
    name: "Katarzyna Wiśniewska",
    role: "Mama Kacpra (7 lat)",
    content:
      "Trening słuchowy Johansena przyniósł niesamowite rezultaty. Syn lepiej się koncentruje i ma mniej problemów z nauką. Bardzo dziękujemy!",
    rating: 5,
    service: "Trening słuchowy",
  },
  {
    id: 4,
    name: "Tomasz Lewandowski",
    role: "Tata Oli (5 lat)",
    content:
      "Pani Joanna ma ogromną wiedzę i doświadczenie. Córka z niecierpliwością czeka na każdą wizytę. Terapia przynosi świetne efekty.",
    rating: 5,
    service: "Integracja sensoryczna",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading heading-fancy">Opinie rodziców</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zobacz, co mówią rodzice dzieci, z którymi pracuję
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-teal-200" />

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-800 text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-600 mb-2">{currentTestimonial.role}</div>
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                    {currentTestimonial.service}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? "bg-teal-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={400}>
            <div className="grid grid-cols-3 gap-8 mt-12 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-gray-600">Zadowolonych rodzin</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
                <div className="text-gray-600">Lat doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
                <div className="text-gray-600">Pozytywnych opinii</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
