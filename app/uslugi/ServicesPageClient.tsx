"use client"

import { useState, useEffect, useRef } from "react"
import { availableServices } from "@/data/available-slots"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Search, Filter, X, ArrowRight, Star } from "lucide-react"
import AnimatedPageSection from "@/components/animated-page-section"

// Kategorie usług
const categories = [
  { id: "all", name: "Wszystkie" },
  { id: "diagnostyka", name: "Diagnostyka" },
  { id: "terapia", name: "Terapia" },
  { id: "trening", name: "Treningi" },
  { id: "edukacja", name: "Edukacja" },
]

// Mapowanie usług do kategorii
const getServiceCategory = (serviceId: string) => {
  if (serviceId.includes("diagnoza")) return "diagnostyka"
  if (serviceId.includes("terapia")) return "terapia"
  if (serviceId.includes("trening")) return "trening"
  return "edukacja"
}

export default function ServicesPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredServices, setFilteredServices] = useState(availableServices)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filtrowanie usług na podstawie wyszukiwania i kategorii
  useEffect(() => {
    let filtered = availableServices

    // Filtrowanie według wyszukiwania
    if (searchTerm) {
      filtered = filtered.filter(
        (service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtrowanie według kategorii
    if (selectedCategory !== "all") {
      filtered = filtered.filter((service) => getServiceCategory(service.id) === selectedCategory)
    }

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory])

  // Resetowanie filtrów
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    if (searchInputRef.current) {
      searchInputRef.current.value = ""
    }
  }

  // Animacje dla elementów listy
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedPageSection animation="slide" className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading heading-fancy">Nasze Usługi</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferujemy szeroki zakres usług diagnostycznych i terapeutycznych dla dzieci w różnym wieku. Każda usługa
              jest dostosowana do indywidualnych potrzeb dziecka.
            </p>
          </AnimatedPageSection>

          <AnimatedPageSection animation="fade" delay={0.2} className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Wyszukiwarka */}
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Szukaj usług..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setSearchTerm("")}
                      aria-label="Wyczyść wyszukiwanie"
                    >
                      <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    </button>
                  )}
                </div>

                {/* Filtr kategorii */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                  <Filter className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <div className="flex gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                          selectedCategory === category.id
                            ? "bg-teal-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedPageSection>

          {/* Lista usług */}
          <div className="max-w-6xl mx-auto">
            {filteredServices.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredServices.map((service) => (
                  <motion.div key={service.id} variants={itemVariants} className="group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        {/* Efekt paralaksy dla zdjęcia */}
                        <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Oznaczenie "Popularne" dla wybranych usług */}
                        {["diagnoza-korp", "terapia-reki", "indywidualna-stymulacja-sluchu-johansena"].includes(
                          service.id,
                        ) && (
                          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popularne
                          </div>
                        )}
                      </div>

                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                        <div className="mt-auto">
                          <Link href={`/uslugi/${service.id}`}>
                            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white group">
                              <span>Szczegóły</span>
                              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <AnimatedPageSection animation="fade" className="text-center py-12">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold mb-4">Nie znaleziono usług</h3>
                  <p className="text-gray-600 mb-6">
                    Nie znaleziono usług spełniających kryteria wyszukiwania. Spróbuj zmienić kryteria wyszukiwania.
                  </p>
                  <Button onClick={resetFilters} className="bg-teal-600 hover:bg-teal-700 text-white">
                    Resetuj filtry
                  </Button>
                </div>
              </AnimatedPageSection>
            )}
          </div>

          {/* Sekcja CTA */}
          <AnimatedPageSection animation="scale" delay={0.3} className="mt-16">
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg shadow-xl p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Nie wiesz, która usługa będzie najlepsza?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Skontaktuj się z nami, aby umówić się na bezpłatną konsultację. Pomożemy wybrać najlepszą formę wsparcia
                dla Twojego dziecka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <Button className="bg-white text-teal-700 hover:bg-gray-100">Skontaktuj się z nami</Button>
                </Link>
                <a href="tel:+48531509008">
                  <Button className="bg-teal-800 hover:bg-teal-900 text-white">Zadzwoń lub napisz SMS</Button>
                </a>
              </div>
            </div>
          </AnimatedPageSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}
