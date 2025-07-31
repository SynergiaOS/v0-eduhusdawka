import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trening Słuchowy Johansena - Terapia Słuchowa | EduHustawka",
  description:
    "Indywidualna Stymulacja Słuchu Johansena w Białymstoku. Nowoczesna metoda terapii słuchowej wspierająca rozwój mowy i koncentracji.",
}

export default function TreningSluchowyJohansenaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
                Trening Słuchowy Johansena
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Indywidualna Stymulacja Słuchu (IAS) - nowoczesna metoda terapii słuchowej
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden group">
                    <img
                      src="/johansen-sound-training.png"
                      alt="Trening Słuchowy Johansena"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4 text-teal-700">Cennik usługi</h2>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Diagnoza pełna</h3>
                      <p className="text-sm text-gray-600 mb-2">Kompleksowa diagnoza słuchowa</p>
                      <p className="text-xl font-bold text-teal-600">500 zł</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Diagnoza uproszczona</h3>
                      <p className="text-sm text-gray-600 mb-2">Na podstawie obserwacji i wywiadu</p>
                      <p className="text-xl font-bold text-teal-600">350 zł</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Program indywidualny</h3>
                      <p className="text-sm text-gray-600 mb-2">Płyta CD lub nagrania online</p>
                      <p className="text-xl font-bold text-teal-600">około 250 zł</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Diagnoza kontrolna pełna</h3>
                      <p className="text-sm text-gray-600 mb-2">Co 8-10 tygodni</p>
                      <p className="text-xl font-bold text-teal-600">350 zł</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Diagnoza kontrolna uproszczona</h3>
                      <p className="text-sm text-gray-600 mb-2">Co 8-10 tygodni</p>
                      <p className="text-xl font-bold text-teal-600">300 zł</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">
                  Na czym polega Trening Słuchowy Johansena?
                </h2>
                <div className="prose prose-teal max-w-none">
                  <p className="mb-4">
                    Trening Słuchowy Johansena to metoda terapii słuchowej, która polega na słuchaniu specjalnie
                    zmodyfikowanej muzyki przez słuchawki. Muzyka ta jest indywidualnie dostosowana do potrzeb każdego
                    dziecka na podstawie przeprowadzonej diagnozy.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Korzyści z terapii:</h3>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Wspomaganie rozwoju mowy</li>
                    <li>Poprawa koncentracji uwagi</li>
                    <li>Rozwój umiejętności językowych</li>
                    <li>Wsparcie komunikacji</li>
                    <li>Redukcja nadwrażliwości słuchowej</li>
                    <li>Poprawa przetwarzania słuchowego</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Dla kogo?</h3>
                  <p className="mb-4">
                    Metoda ta jest szczególnie polecana dla dzieci z zaburzeniami przetwarzania słuchowego, trudnościami
                    w nauce czytania i pisania, zaburzeniami mowy, problemami z koncentracją oraz dzieci ze spektrum
                    autyzmu.
                  </p>

                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Zaburzenia przetwarzania słuchowego</li>
                    <li>Opóźnienia rozwoju mowy</li>
                    <li>Trudności w nauce czytania</li>
                    <li>Problemy z koncentracją</li>
                    <li>Spektrum autyzmu</li>
                    <li>Nadwrażliwość słuchowa</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Przebieg terapii:</h3>
                  <ol className="list-decimal list-inside mb-4 space-y-2">
                    <li>Diagnoza wstępna (pełna lub uproszczona)</li>
                    <li>Przygotowanie indywidualnego programu przez Instytut Johansena</li>
                    <li>Słuchanie muzyki w domu (10-15 min dziennie)</li>
                    <li>Diagnoza kontrolna po 8-10 tygodniach</li>
                    <li>Modyfikacja programu w razie potrzeby</li>
                  </ol>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Jak to działa?</h3>
                  <p className="mb-4">
                    Specjalnie zmodyfikowana muzyka stymuluje różne częstotliwości słuchowe, co pomaga w reorganizacji
                    procesów słuchowych w mózgu. Terapia jest bezpieczna, nieinwazyjna i może być prowadzona w domu.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-teal-50 p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">Skontaktuj się</h2>
                <div className="text-center">
                  <p className="mb-6">
                    Chcesz rozpocząć trening słuchowy Johansena lub masz pytania? Skontaktuj się ze mną.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:+48531509008">
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white">Zadzwoń: 531 509 008</Button>
                    </a>
                    <Link href="/kontakt">
                      <Button
                        variant="outline"
                        className="text-teal-600 border-teal-600 hover:bg-teal-50 bg-transparent"
                      >
                        Formularz kontaktowy
                      </Button>
                    </Link>
                  </div>
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
