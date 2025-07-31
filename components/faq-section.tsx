"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const faqItems = [
  {
    id: 1,
    question: "Jak długo trwa terapia?",
    answer:
      "Czas trwania terapii zależy od indywidualnych potrzeb dziecka i rodzaju problemów. Zazwyczaj pierwsze efekty widoczne są po 2-3 miesiącach regularnych sesji. Pełny cykl terapii może trwać od 6 miesięcy do 2 lat.",
  },
  {
    id: 2,
    question: "Jak często odbywają się sesje?",
    answer:
      "Częstotliwość sesji dostosowuję do potrzeb dziecka. Zazwyczaj zalecam 1-2 sesje tygodniowo. W przypadku intensywnej terapii może to być nawet 3 razy w tygodniu, szczególnie na początku procesu terapeutycznego.",
  },
  {
    id: 3,
    question: "Czy rodzice mogą być obecni podczas terapii?",
    answer:
      "Tak, obecność rodziców jest mile widziana, szczególnie w przypadku młodszych dzieci. Rodzice mogą obserwować sesje i uczyć się technik, które będą mogli stosować w domu, co znacznie zwiększa skuteczność terapii.",
  },
  {
    id: 4,
    question: "Jakie dokumenty są potrzebne na pierwszą wizytę?",
    answer:
      "Na pierwszą wizytę warto zabrać: opinię psychologiczno-pedagogiczną (jeśli jest), wyniki badań specjalistycznych, dokumentację medyczną dotyczącą dziecka oraz informacje o dotychczasowych terapiach.",
  },
  {
    id: 5,
    question: "Czy terapia jest refundowana?",
    answer:
      "Część terapii może być refundowana przez NFZ w ramach wczesnego wspomagania rozwoju dziecka lub jako świadczenia rehabilitacyjne. Szczegóły dotyczące refundacji omówimy podczas pierwszej konsultacji.",
  },
  {
    id: 6,
    question: "Od jakiego wieku można rozpocząć terapię?",
    answer:
      "Terapię można rozpocząć już od najmłodszych lat życia. Wczesne wspomaganie rozwoju prowadzę od 6. miesiąca życia. Im wcześniej rozpoczniemy interwencję, tym lepsze są rokowania na przyszłość.",
  },
]

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading heading-fancy">Często zadawane pytania</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące terapii
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 50}>
              <div className="mb-4">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full bg-white rounded-lg p-6 text-left hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{item.question}</h3>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    )}
                  </div>

                  {openItems.includes(item.id) && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="text-center mt-12">
            <div className="bg-teal-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Nie znalazłeś odpowiedzi na swoje pytanie?</h3>
              <p className="text-teal-700 mb-6">
                Skontaktuj się ze mną bezpośrednio - chętnie odpowiem na wszystkie wątpliwości
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => (window.location.href = "tel:+48531509008")}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Zadzwoń: 531 509 008
                </button>
                <button
                  onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors bg-transparent"
                >
                  Napisz wiadomość
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
