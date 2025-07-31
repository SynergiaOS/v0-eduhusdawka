import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wczesna Nauka Czytania - Wsparcie Rozwoju | EduHustawka",
  description:
    "Wczesna nauka czytania w Białymstoku. Zajęcia wspierające rozwój umiejętności czytania u dzieci w wieku przedszkolnym i wczesnoszkolnym.",
}

export default function WczesnaNaukaCzytaniaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
                Wczesna Nauka Czytania
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Zajęcia wspierające rozwój umiejętności czytania u dzieci
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden group">
                    <img
                      src="/images/early-reading.png"
                      alt="Wczesna Nauka Czytania"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4 text-teal-700">Cennik usługi</h2>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Sesja terapeutyczna (45 min)</h3>
                      <p className="text-sm text-gray-600 mb-2">Indywidualne zajęcia nauki czytania</p>
                      <p className="text-xl font-bold text-teal-600">150 zł</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Pakiet 5 sesji</h3>
                      <p className="text-sm text-gray-600 mb-2">Oszczędność 50 zł</p>
                      <p className="text-xl font-bold text-teal-600">700 zł</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Pakiet 10 sesji</h3>
                      <p className="text-sm text-gray-600 mb-2">Oszczędność 150 zł</p>
                      <p className="text-xl font-bold text-teal-600">1350 zł</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">
                  Jak przebiega Wczesna Nauka Czytania?
                </h2>
                <div className="prose prose-teal max-w-none">
                  <p className="mb-4">
                    Wczesna Nauka Czytania to zajęcia, które wspierają rozwój umiejętności czytania u dzieci w wieku
                    przedszkolnym i wczesnoszkolnym. Wykorzystujemy różnorodne metody dostosowane do indywidualnych
                    potrzeb i możliwości dziecka.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Etapy nauki czytania:</h3>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Rozpoznawanie liter i ich brzmień</li>
                    <li>Łączenie liter w sylaby</li>
                    <li>Czytanie prostych wyrazów</li>
                    <li>Rozumienie czytanego tekstu</li>
                    <li>Płynne czytanie</li>
                    <li>Analiza i interpretacja tekstu</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Metody pracy:</h3>
                  <p className="mb-4">
                    Podczas zajęć dzieci uczą się rozpoznawania liter, łączenia ich w sylaby i wyrazy, rozumienia
                    czytanego tekstu. Wszystko odbywa się w formie zabawy, z wykorzystaniem gier, zabawek edukacyjnych,
                    książeczek i innych pomocy dydaktycznych.
                  </p>

                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Metoda sylabowa</li>
                    <li>Metoda fonetyczna</li>
                    <li>Gry i zabawy edukacyjne</li>
                    <li>Książeczki obrazkowe</li>
                    <li>Karty z literami i wyrazami</li>
                    <li>Multimedialne pomoce dydaktyczne</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Dla kogo?</h3>
                  <p className="mb-4">
                    Zajęcia są przeznaczone dla dzieci w wieku 4-8 lat, które rozpoczynają naukę czytania lub mają
                    trudności z opanowaniem tej umiejętności. Program jest dostosowany do tempa rozwoju każdego dziecka.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Korzyści z zajęć:</h3>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Rozwój umiejętności czytania ze zrozumieniem</li>
                    <li>Zwiększenie pewności siebie</li>
                    <li>Przygotowanie do nauki szkolnej</li>
                    <li>Rozwój koncentracji uwagi</li>
                    <li>Wzmocnienie pamięci wzrokowej</li>
                    <li>Poprawa koordynacji wzrokowo-ruchowej</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Struktura zajęć:</h3>
                  <ol className="list-decimal list-inside mb-4 space-y-2">
                    <li>Rozgrzewka i aktywizacja (10 min)</li>
                    <li>Nauka nowych liter/sylab (15 min)</li>
                    <li>Ćwiczenia praktyczne (15 min)</li>
                    <li>Podsumowanie i zabawa (5 min)</li>
                  </ol>

                  <p className="mb-4">
                    Każde dziecko pracuje w swoim tempie, a zajęcia są dostosowane do jego indywidualnych potrzeb i
                    możliwości. Wykorzystujemy pozytywne wzmocnienia i zachęcamy do eksperymentowania z językiem.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-teal-50 p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">Skontaktuj się</h2>
                <div className="text-center">
                  <p className="mb-6">
                    Chcesz zapisać dziecko na zajęcia wczesnej nauki czytania lub masz pytania? Skontaktuj się ze mną.
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
