import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terapia Pedagogiczna - Wsparcie w Nauce | EduHustawka",
  description:
    "Profesjonalna terapia pedagogiczna w Białymstoku. Wsparcie rozwoju poznawczego i przezwyciężanie trudności w nauce.",
}

export default function TerapiaPedagogicznaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
                Terapia Pedagogiczna
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Wsparcie rozwoju poznawczego i przezwyciężanie trudności w nauce
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden group">
                    <img
                      src="/child-development-puzzle.png"
                      alt="Terapia Pedagogiczna"
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
                      <p className="text-sm text-gray-600 mb-2">Indywidualna terapia pedagogiczna</p>
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
                  Jak wygląda Terapia Pedagogiczna?
                </h2>
                <div className="prose prose-teal max-w-none">
                  <p className="mb-4">
                    Terapia Pedagogiczna to zajęcia indywidualne, które mają na celu wsparcie rozwoju poznawczego
                    dziecka i przezwyciężanie trudności w nauce. Zajęcia są dostosowane do indywidualnych potrzeb i
                    możliwości dziecka.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Obszary wsparcia:</h3>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Trudności w czytaniu i pisaniu</li>
                    <li>Problemy z matematyką</li>
                    <li>Rozwój koncentracji uwagi</li>
                    <li>Wzmacnianie pamięci</li>
                    <li>Rozwój myślenia logicznego</li>
                    <li>Organizacja pracy</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Metody terapii:</h3>
                  <p className="mb-4">
                    Podczas zajęć wykorzystujemy różnorodne metody i techniki pracy, które pomagają dziecku w
                    przezwyciężaniu trudności w czytaniu, pisaniu, liczeniu oraz rozwijają koncentrację uwagi, pamięć i
                    myślenie.
                  </p>

                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Metody multisensoryczne</li>
                    <li>Gry edukacyjne</li>
                    <li>Ćwiczenia koncentracji uwagi</li>
                    <li>Techniki zapamiętywania</li>
                    <li>Strategie uczenia się</li>
                    <li>Pomoce dydaktyczne</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Dla kogo?</h3>
                  <p className="mb-4">
                    Terapia pedagogiczna jest przeznaczona dla dzieci w wieku szkolnym (6-15 lat), które mają trudności
                    w nauce, problemy z koncentracją, dysleksję, dyskalkulię lub inne specyficzne trudności w uczeniu
                    się.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Efekty terapii:</h3>
                  <p className="mb-4">
                    Regularna terapia pedagogiczna pomaga dziecku w osiągnięciu lepszych wyników w nauce, zwiększa
                    pewność siebie, rozwija umiejętności uczenia się i pozwala na pełniejsze wykorzystanie potencjału
                    intelektualnego.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-teal-50 p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">Skontaktuj się</h2>
                <div className="text-center">
                  <p className="mb-6">
                    Chcesz umówić się na terapię pedagogiczną lub masz pytania? Skontaktuj się ze mną.
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
