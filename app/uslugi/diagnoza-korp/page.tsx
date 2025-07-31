import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Brain, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diagnoza KORP - Ocena Rozwoju Psychoruchowego | EduHustawka",
  description:
    "Kompleksowa diagnoza KORP w Białymstoku. Badanie rozwoju psychoruchowego dzieci od 1 miesiąca do 9 lat życia. Wczesne wykrycie trudności rozwojowych.",
  keywords: "diagnoza KORP, rozwój psychoruchowy, badanie rozwoju dziecka, Białystok",
}

export default function DiagnozaKORPPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                  <Brain className="h-8 w-8 text-teal-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6 font-heading heading-fancy pb-4">Diagnoza KORP</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Kompleksowa ocena rozwoju psychoruchowego dzieci od 1 miesiąca życia do 9 lat i 11 miesięcy
                </p>
              </div>
            </AnimatedSection>

            {/* Image and Pricing */}
            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden group">
                    <img
                      src="/child-development-puzzle.png"
                      alt="Badanie desarrollo psychoruchowego dziecka"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4 text-teal-700">Cennik</h2>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">Diagnoza pełna</h3>
                          <p className="text-sm text-gray-600">Kompleksowa ocena wszystkich sfer rozwojowych</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-teal-600">450 zł</p>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Popularne
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-800">Konsultacja z rodzicami</h3>
                          <p className="text-sm text-gray-600">Omówienie wyników i zaleceń</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-teal-600">150 zł</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Content */}
            <AnimatedSection delay={300}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">
                  Sprawdź rozwój swojego dziecka z testem KORP!
                </h2>

                <div className="prose prose-teal max-w-none">
                  <div className="bg-teal-50 p-6 rounded-lg mb-6">
                    <p className="text-teal-800 font-medium mb-2">Czy Twoje dziecko rozwija się harmonijnie?</p>
                    <p className="text-teal-700">
                      Chcesz upewnić się, że osiąga kolejne etapy rozwojowe zgodnie z normami dla swojego wieku?
                      Skorzystaj z diagnostyki przy użyciu KORP – Kart Oceny Rozwoju Psychoruchowego!
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-teal-700">Czym jest KORP?</h3>
                  <p className="mb-4">
                    To nowoczesne, wystandaryzowane narzędzie diagnostyczne, które pozwala ocenić rozwój dziecka już od
                    1. miesiąca życia do 9. roku życia. Test dokładnie analizuje kluczowe sfery rozwojowe:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Badane obszary rozwoju:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rozwój ruchowy – sprawność fizyczna i koordynacja</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Motoryka precyzyjna i lateralizacja</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Spostrzeganie wzrokowe i koordynacja wzrokowo-ruchowa</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Komunikacja i rozwój mowy</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Rozwój emocjonalny i społeczny</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Funkcje behawioralne</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Umiejętności przedszkolne i szkolne</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Dlaczego warto skorzystać z diagnozy KORP?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong>Wczesne wykrycie</strong> ewentualnych trudności
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong>Indywidualne podejście</strong> do każdego dziecka
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong>Precyzyjna analiza</strong> wszystkich sfer rozwoju
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong>Praktyczne wskazówki</strong> dla rodziców i nauczycieli
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>
                            <strong>Podstawa</strong> do planowania terapii
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-teal-700">Przebieg badania</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <strong>Wywiad z rodzicami</strong> - zbieranie informacji o rozwoju dziecka
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <strong>Obserwacja dziecka</strong> - ocena spontanicznych zachowań
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <strong>Badanie strukturalne</strong> - zadania dostosowane do wieku
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <strong>Analiza wyników</strong> - porównanie z normami rozwojowymi
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <strong>Konsultacja</strong> - omówienie wyników i zaleceń z rodzicami
                        </div>
                      </li>
                    </ol>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-teal-700">Dla kogo?</h3>
                  <p className="mb-4">Diagnoza KORP jest szczególnie zalecana dla:</p>
                  <ul className="list-disc list-inside mb-6 space-y-1">
                    <li>Dzieci z podejrzeniem opóźnień rozwojowych</li>
                    <li>Dzieci przed rozpoczęciem terapii</li>
                    <li>Dzieci z trudnościami w nauce</li>
                    <li>Dzieci wymagających oceny przed podjęciem decyzji edukacyjnych</li>
                    <li>Dzieci, u których rodzice obserwują niepokojące objawy</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection delay={400}>
              <div className="bg-teal-50 p-6 md:p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-4 text-teal-700 font-heading">Umów się na diagnozę KORP</h2>
                <p className="text-gray-600 mb-6">
                  Chcesz sprawdzić rozwój swojego dziecka? Skontaktuj się ze mną, aby umówić termin badania.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:+48531509008">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Zadzwoń: 531 509 008
                    </Button>
                  </a>
                  <Link href="/kontakt">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-teal-600 border-teal-600 hover:bg-teal-50 bg-transparent"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Formularz kontaktowy
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
