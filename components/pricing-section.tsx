"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, Info } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { useRouter } from "next/navigation"
import { useAnalytics } from "@/hooks/use-analytics"

// Typy danych dla usług
interface PricingItem {
  id: string
  serviceName: string
  itemName: string
  description: string
  price: string
  popular?: boolean
  new?: boolean
}

// Dane usług z cenami - przekształcone do formatu tabeli
const pricingItems: PricingItem[] = [
  {
    id: "diagnoza-korp-pelna",
    serviceName: "Diagnoza KORP",
    itemName: "Diagnoza pełna",
    description: "Kompleksowa ocena rozwoju psychomotorycznego dziecka obejmująca wszystkie sfery rozwojowe",
    price: "450 zł",
    popular: true,
  },
  {
    id: "diagnoza-korp-konsultacja",
    serviceName: "Diagnoza KORP",
    itemName: "Konsultacja z rodzicami",
    description: "Omówienie wyników diagnozy i przedstawienie zaleceń terapeutycznych",
    price: "150 zł",
  },
  {
    id: "tus-grupowe",
    serviceName: "Trening Umiejętności Społecznych",
    itemName: "Zajęcia grupowe (90 min, 4-6 osób)",
    description: "Zajęcia grupowe rozwijające kompetencje społeczne i emocjonalne dzieci",
    price: "200 zł",
  },
  {
    id: "tus-pakiet",
    serviceName: "Trening Umiejętności Społecznych",
    itemName: "Pakiet 5 zajęć",
    description: "Pakiet zajęć grupowych TUS - oszczędność 100 zł w porównaniu do ceny pojedynczych zajęć",
    price: "900 zł",
  },
  {
    id: "terapia-reki-sesja",
    serviceName: "Terapia Ręki",
    itemName: "Sesja terapeutyczna (45 min)",
    description: "Indywidualna terapia usprawniająca małą motorykę i koordynację wzrokowo-ruchową",
    price: "150 zł",
    popular: true,
  },
  {
    id: "terapia-reki-pakiet5",
    serviceName: "Terapia Ręki",
    itemName: "Pakiet 5 sesji",
    description: "Pakiet 5 sesji terapii ręki - oszczędność 50 zł",
    price: "700 zł",
  },
  {
    id: "terapia-reki-pakiet10",
    serviceName: "Terapia Ręki",
    itemName: "Pakiet 10 sesji",
    description: "Pakiet 10 sesji terapii ręki - oszczędność 150 zł",
    price: "1350 zł",
  },
  {
    id: "terapia-pedagogiczna-sesja",
    serviceName: "Terapia Pedagogiczna",
    itemName: "Sesja terapeutyczna (45 min)",
    description: "Wsparcie rozwoju poznawczego i przezwyciężanie trudności w nauce",
    price: "150 zł",
  },
  {
    id: "terapia-pedagogiczna-pakiet5",
    serviceName: "Terapia Pedagogiczna",
    itemName: "Pakiet 5 sesji",
    description: "Pakiet 5 sesji terapii pedagogicznej - oszczędność 50 zł",
    price: "700 zł",
  },
  {
    id: "terapia-pedagogiczna-pakiet10",
    serviceName: "Terapia Pedagogiczna",
    itemName: "Pakiet 10 sesji",
    description: "Pakiet 10 sesji terapii pedagogicznej - oszczędność 150 zł",
    price: "1350 zł",
  },
  {
    id: "johansen-diagnoza-pelna",
    serviceName: "Trening Słuchowy Johansena",
    itemName: "Diagnoza pełna",
    description: "Kompleksowa diagnoza słuchowa przed rozpoczęciem treningu",
    price: "500 zł",
  },
  {
    id: "johansen-diagnoza-uproszczona",
    serviceName: "Trening Słuchowy Johansena",
    itemName: "Diagnoza uproszczona",
    description: "Diagnoza na podstawie obserwacji i wywiadu z rodzicem",
    price: "350 zł",
  },
  {
    id: "johansen-program",
    serviceName: "Trening Słuchowy Johansena",
    itemName: "Przygotowanie indywidualnego programu",
    description: "Indywidualna płyta CD lub nagrania do pobrania online przygotowane przez Instytut Johansena",
    price: "około 250 zł",
  },
  {
    id: "johansen-kontrolna-pelna",
    serviceName: "Trening Słuchowy Johansena",
    itemName: "Diagnoza kontrolna - pełne badanie",
    description: "Kontrolna diagnoza po 8-10 tygodniach treningu - pełne badanie",
    price: "350 zł",
  },
  {
    id: "johansen-kontrolna-uproszczona",
    serviceName: "Trening Słuchowy Johansena",
    itemName: "Diagnoza kontrolna uproszczona",
    description: "Kontrolna diagnoza na podstawie obserwacji i wywiadu z rodzicem",
    price: "300 zł",
  },
  {
    id: "neuroflow-diagnoza",
    serviceName: "Trening Neuroflow",
    itemName: "Pierwsza diagnoza wstępna",
    description: "Wstępna diagnoza przed rozpoczęciem innowacyjnej terapii Neuroflow",
    price: "500 zł",
    new: true,
  },
  {
    id: "neuroflow-etap1",
    serviceName: "Trening Neuroflow",
    itemName: "Etap I (8-10 tygodni)",
    description: "Pierwszy etap treningu Neuroflow dla dzieci z trudnościami w nauce",
    price: "470 zł",
    new: true,
  },
  {
    id: "neuroflow-etap2",
    serviceName: "Trening Neuroflow",
    itemName: "Etap II (8-10 tygodni)",
    description: "Drugi etap treningu Neuroflow - kontynuacja terapii",
    price: "470 zł",
    new: true,
  },
  {
    id: "neuroflow-etap3",
    serviceName: "Trening Neuroflow",
    itemName: "Etap III (8-10 tygodni)",
    description: "Trzeci etap treningu Neuroflow - zaawansowana terapia",
    price: "470 zł",
    new: true,
  },
  {
    id: "neuroflow-kontrolna",
    serviceName: "Trening Neuroflow",
    itemName: "Diagnoza kontrolna",
    description: "Kontrolna diagnoza postępów w trakcie treningu Neuroflow",
    price: "300 zł",
    new: true,
  },
  {
    id: "czytanie-sesja",
    serviceName: "Wczesna Nauka Czytania",
    itemName: "Sesja terapeutyczna (45 min)",
    description: "Zajęcia wspierające naukę czytania metodami dostosowanymi do potrzeb dziecka",
    price: "150 zł",
  },
  {
    id: "czytanie-pakiet5",
    serviceName: "Wczesna Nauka Czytania",
    itemName: "Pakiet 5 sesji",
    description: "Pakiet 5 sesji nauki czytania - oszczędność 50 zł",
    price: "700 zł",
  },
  {
    id: "czytanie-pakiet10",
    serviceName: "Wczesna Nauka Czytania",
    itemName: "Pakiet 10 sesji",
    description: "Pakiet 10 sesji nauki czytania - oszczędność 150 zł",
    price: "1350 zł",
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
  const router = useRouter()
  const { trackEvent } = useAnalytics()

  // Filtrowanie usług
  const filteredItems = pricingItems.filter((item) => {
    if (activeFilter === "all") return true
    if (activeFilter === "popular" && item.popular) return true
    if (activeFilter === "new" && item.new) return true
    if (activeFilter === "diagnostic" && (item.serviceName.includes("Diagnoza") || item.itemName.includes("Diagnoza")))
      return true
    if (activeFilter === "therapy" && !item.serviceName.includes("Diagnoza") && !item.itemName.includes("Diagnoza"))
      return true
    return false
  })

  const handleBookNow = (serviceId: string, serviceName: string) => {
    trackEvent("pricing_book_click", "Pricing", serviceName)
    router.push("/rezerwacja")
  }

  const getServiceSlug = (serviceName: string) => {
    const slugMap: { [key: string]: string } = {
      "Diagnoza KORP": "diagnoza-korp",
      "Trening Umiejętności Społecznych": "trening-umiejetnosci-spolecznych",
      "Terapia Ręki": "terapia-reki",
      "Terapia Pedagogiczna": "terapia-pedagogiczna",
      "Trening Słuchowy Johansena": "indywidualna-stymulacja-sluchu-johansena",
      "Trening Neuroflow": "trening-neuroflow",
      "Wczesna Nauka Czytania": "wczesna-nauka-czytania",
    }
    return slugMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, "-")
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
            <div className="min-w-[800px]">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Kategoria usługi</th>
                    <th className="px-6 py-4 text-left font-semibold">Nazwa</th>
                    <th className="px-6 py-4 text-left font-semibold">Opis</th>
                    <th className="px-6 py-4 text-right font-semibold">Cena</th>
                    <th className="px-6 py-4 text-center font-semibold">Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className={cn(
                        "border-b border-gray-200 hover:bg-gray-50 transition-colors",
                        index % 2 === 0 ? "bg-white" : "bg-gray-50",
                      )}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-teal-700">{item.serviceName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-gray-800">{item.itemName}</span>
                          {item.popular && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              Popularne
                            </span>
                          )}
                          {item.new && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Nowość
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs">{item.description}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="font-bold text-lg text-teal-600">{item.price}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col sm:flex-row justify-center gap-2">
                          <Link href={`/uslugi/${getServiceSlug(item.serviceName)}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-teal-600 border-teal-600 hover:bg-teal-50 w-full sm:w-auto bg-transparent"
                            >
                              <Info className="h-4 w-4 mr-1" /> Szczegóły
                            </Button>
                          </Link>
                          <Button
                            onClick={() => handleBookNow(item.id, item.serviceName)}
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto"
                          >
                            Rezerwuj
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Wskaźnik przewijania dla urządzeń mobilnych */}
          <div className="md:hidden text-center mt-4">
            <p className="text-sm text-gray-500">← Przesuń palcem, aby zobaczyć więcej →</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="mt-12 text-center">
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Informacje dodatkowe</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-teal-700">
                <div>
                  <strong>Pakiety:</strong> Wybierając pakiety sesji, oszczędzasz na pojedynczych wizytach
                </div>
                <div>
                  <strong>Płatność:</strong> Możliwość płatności gotówką lub przelewem
                </div>
                <div>
                  <strong>Anulowanie:</strong> Prosimy o informację o anulowaniu minimum 24h wcześniej
                </div>
                <div>
                  <strong>Konsultacje:</strong> Pierwsza konsultacja obejmuje szczegółowy wywiad z rodzicami
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">Potrzebujesz więcej informacji lub masz pytania dotyczące cennika?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="text-teal-600 border-teal-600 hover:bg-teal-50"
              >
                Skontaktuj się ze mną
              </Button>
              <Button onClick={() => router.push("/rezerwacja")} className="bg-teal-600 hover:bg-teal-700 text-white">
                <ArrowRight className="h-4 w-4 mr-2" />
                Zarezerwuj wizytę
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
