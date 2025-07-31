"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, ChevronDown, ChevronUp, Info } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useRouter } from "next/navigation"
import { useAnalytics } from "@/hooks/use-analytics"

// Typy danych dla usług
interface ServiceDetail {
  name: string
  price: string
  description?: string
}

interface PricingService {
  id: string
  name: string
  details: ServiceDetail[]
  description: string
  popular?: boolean
  new?: boolean
}

// Dane usług z cenami - zaktualizowane dla spójności
const pricingServices: PricingService[] = [
  {
    id: "diagnoza-korp",
    name: "Diagnoza KORP",
    description: "Kompleksowa ocena rozwoju psychomotorycznego dziecka",
    popular: true,
    details: [
      { name: "Diagnoza pełna", price: "450 zł", description: "Pełna diagnoza obejmująca wszystkie sfery rozwojowe" },
      { name: "Konsultacja z rodzicami", price: "150 zł", description: "Omówienie wyników i zaleceń" },
    ],
  },
  {
    id: "trening-umiejetnosci-spolecznych",
    name: "Trening Umiejętności Społecznych (TUS)",
    description: "Zajęcia grupowe rozwijające kompetencje społeczne i emocjonalne",
    details: [
      { name: "Zajęcia grupowe (90 min, 4-6 osób)", price: "200 zł" },
      { name: "Pakiet 5 zajęć", price: "900 zł", description: "Oszczędność 100 zł" },
    ],
  },
  {
    id: "terapia-reki",
    name: "Terapia Ręki",
    description: "Usprawnianie małej motoryki i koordynacji wzrokowo-ruchowej",
    popular: true,
    details: [
      { name: "Sesja terapeutyczna (45 min)", price: "150 zł" },
      { name: "Pakiet 5 sesji", price: "700 zł", description: "Oszczędność 50 zł" },
      { name: "Pakiet 10 sesji", price: "1350 zł", description: "Oszczędność 150 zł" },
    ],
  },
  {
    id: "terapia-pedagogiczna",
    name: "Terapia Pedagogiczna",
    description: "Wsparcie rozwoju poznawczego i przezwyciężanie trudności w nauce",
    details: [
      { name: "Sesja terapeutyczna (45 min)", price: "150 zł" },
      { name: "Pakiet 5 sesji", price: "700 zł", description: "Oszczędność 50 zł" },
      { name: "Pakiet 10 sesji", price: "1350 zł", description: "Oszczędność 150 zł" },
    ],
  },
  {
    id: "indywidualna-stymulacja-sluchu-johansena",
    name: "Trening Słuchowy Johansena",
    description: "Terapia słuchowa wspomagająca rozwój mowy i koncentracji",
    details: [
      { name: "Diagnoza pełna", price: "500 zł" },
      { name: "Diagnoza uproszczona", price: "350 zł", description: "Na podstawie obserwacji i wywiadu z rodzicem" },
      {
        name: "Przygotowanie indywidualnego programu",
        price: "około 250 zł",
        description:
          "Na podstawie diagnozy w Instytucie Johansena przygotowana jest indywidualna płyta CD lub nagrania do pobrania online",
      },
      { name: "Diagnoza kontrolna (co 8-10 tyg.) - pełne badanie", price: "350 zł" },
      {
        name: "Diagnoza kontrolna uproszczona (co 8-10 tyg.)",
        price: "300 zł",
        description: "Na podstawie obserwacji i wywiadu z rodzicem",
      },
    ],
  },
  {
    id: "trening-neuroflow",
    name: "Trening Neuroflow",
    description: "Innowacyjna metoda terapii dla dzieci z trudnościami w nauce",
    new: true,
    details: [
      { name: "Pierwsza diagnoza wstępna", price: "500 zł" },
      { name: "Etap I (8-10 tygodni)", price: "470 zł" },
      { name: "Etap II (8-10 tygodni)", price: "470 zł" },
      { name: "Etap III (8-10 tygodni)", price: "470 zł" },
      { name: "Diagnoza kontrolna", price: "300 zł" },
    ],
  },
  {
    id: "wczesna-nauka-czytania",
    name: "Wczesna Nauka Czytania",
    description: "Zajęcia wspierające naukę czytania metodami dostosowanymi do potrzeb dziecka",
    details: [
      { name: "Sesja terapeutyczna (45 min)", price: "150 zł" },
      { name: "Pakiet 5 sesji", price: "700 zł", description: "Oszczędność 50 zł" },
      { name: "Pakiet 10 sesji", price: "1350 zł", description: "Oszczędność 150 zł" },
    ],
  },
]

// Kategorie filtrowania
const filterCategories = [
  { id: "all", name: "Wszystkie usługi" },
  { id: "popular", name: "Popularne" },
  { id: "new", name: "Nowości" },
  { id: "diagnostic", name: "Diagnostyka" },
  { id: "therapy", name: "Terapia" },
]

export default function PricingSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [expandedServices, setExpandedServices] = useState<string[]>([])
  const router = useRouter()
  const { trackEvent } = useAnalytics()

  // Filtrowanie usług
  const filteredServices = pricingServices.filter((service) => {
    if (activeFilter === "all") return true
    if (activeFilter === "popular" && service.popular) return true
    if (activeFilter === "new" && service.new) return true
    if (
      activeFilter === "diagnostic" &&
      (service.id === "diagnoza-korp" || service.id === "indywidualna-stymulacja-sluchu-johansena")
    )
      return true
    if (activeFilter === "therapy" && service.id !== "diagnoza-korp") return true
    return false
  })

  const handleBookNow = (serviceId: string, serviceName: string) => {
    trackEvent("pricing_book_click", "Pricing", serviceName)
    router.push("/rezerwacja")
  }

  const toggleServiceExpand = (serviceId: string) => {
    setExpandedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const isServiceExpanded = (serviceId: string) => {
    return expandedServices.includes(serviceId)
  }

  return (
    <section id="cennik" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
            Cennik Usług
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Oferuję szeroki zakres usług diagnostycznych i terapeutycznych dostosowanych do indywidualnych potrzeb
            każdego dziecka. Poniżej znajdziesz szczegółowy cennik.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id ? "bg-teal-600 hover:bg-teal-700" : "text-gray-700"}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="min-w-[640px]">
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="px-4 py-3 text-left text-teal-800 font-semibold border-b border-teal-100">Usługa</th>
                    <th className="px-4 py-3 text-right text-teal-800 font-semibold border-b border-teal-100">Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service, index) => (
                    <React.Fragment key={service.id}>
                      <tr
                        className={cn(
                          "border-b border-gray-200 hover:bg-gray-50 transition-colors",
                          index % 2 === 0 ? "bg-white" : "bg-gray-50",
                        )}
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div>
                              <div className="font-medium text-gray-800 flex flex-wrap items-center gap-2">
                                {service.name}
                                {service.popular && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                    Popularne
                                  </span>
                                )}
                                {service.new && (
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Nowość
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">{service.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleServiceExpand(service.id)}
                              className="text-teal-600 border-teal-600 hover:bg-teal-50 min-h-[40px]"
                            >
                              {isServiceExpanded(service.id) ? (
                                <>
                                  <ChevronUp className="h-4 w-4 mr-1" /> Zwiń
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-4 w-4 mr-1" /> Cennik
                                </>
                              )}
                            </Button>
                            <Link href={`/uslugi/${service.id}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-teal-600 border-teal-600 hover:bg-teal-50 min-h-[40px]"
                              >
                                <Info className="h-4 w-4 mr-1" /> Szczegóły
                              </Button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      {isServiceExpanded(service.id) && (
                        <tr>
                          <td colSpan={2} className="px-0 py-0 border-b border-gray-200">
                            <div className="bg-gray-50 p-4">
                              <div className="overflow-x-auto -mx-4 px-4">
                                <div className="min-w-[500px]">
                                  <table className="w-full border-collapse">
                                    <thead>
                                      <tr className="bg-gray-100">
                                        <th className="px-4 py-2 text-left text-gray-700 font-medium">Nazwa</th>
                                        <th className="px-4 py-2 text-right text-gray-700 font-medium">Cena</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {service.details.map((detail, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                          <td className="px-4 py-3 border-t border-gray-200">
                                            <div>
                                              <div className="font-medium text-gray-800">{detail.name}</div>
                                              {detail.description && (
                                                <div className="text-sm text-gray-500 mt-1">{detail.description}</div>
                                              )}
                                            </div>
                                          </td>
                                          <td className="px-4 py-3 text-right border-t border-gray-200 font-semibold text-gray-800 whitespace-nowrap">
                                            {detail.price}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <Link href={`/uslugi/${service.id}`}>
                                  <Button variant="link" className="text-teal-600 p-0 h-auto font-medium">
                                    Dowiedz się więcej o usłudze <ArrowRight className="h-4 w-4 ml-1" />
                                  </Button>
                                </Link>
                                <Button
                                  onClick={() => handleBookNow(service.id, service.name)}
                                  className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto"
                                >
                                  Zarezerwuj wizytę
                                </Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Potrzebujesz więcej informacji lub masz pytania dotyczące cennika?</p>
            <Button
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="text-teal-600 border-teal-600 hover:bg-teal-50"
            >
              Skontaktuj się ze mną
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
