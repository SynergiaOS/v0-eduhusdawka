import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trening Neuroflow - Innowacyjna Terapia | EduHustawka",
  description:
    "Trening Neuroflow w Białymstoku. Innowacyjna metoda terapii dla dzieci z trudnościami w nauce oparta na neurobiologii.",
}

export default function TreningNeuroflowPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
                Trening Neuroflow
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Innowacyjna metoda terapii dla dzieci z trudnościami w nauce
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden group">
                    <img
                      src="/focused-mind-training.png"
                      alt="Trening Neuroflow"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4 text-teal-700">Cennik usługi</h2>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Pierwsza diagnoza wstępna</h3>
                      <p className="text-sm text-gray-600 mb-2">Diagnoza przed rozpoczęciem treningu</p>
                      <p className="text-xl font-bold text-teal-600">500 zł</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Etap I (8-10 tygodni)</h3>
                      <p className="text-sm text-gray-600 mb-2">Pierwszy etap treningu</p>
                      <p className="text-xl font-bold text-teal-600">470 zł</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Etap II (8-10 tygodni)</h3>
                      <p className="text-sm text-gray-600 mb-2">Drugi etap treningu</p>
                      <p className="text-xl font-bold text-teal-600">470 zł</p>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-gray-800">Etap III (8-10 tygodni)</h3>
                      <p className="text-sm text-gray-600 mb-2">Trzeci etap treningu</p>
                      <p className="text-xl font-bold text-teal-600">470 zł</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Diagnoza kontrolna</h3>
                      <p className="text-sm text-gray-600 mb-2">Kontrola postępów</p>
                      <p className="text-xl font-bold text-teal-600">300 zł</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">Czym jest Trening Neuroflow?</h2>
                <div className="prose prose-teal max-w-none">
                  <p className="mb-4">
                    Trening Neuroflow to innowacyjna metoda terapii dla dzieci z trudnościami w nauce, oparta na
                    najnowszych badaniach z zakresu neurobiologii i psychologii poznawczej. Metoda ta wykorzystuje
                    specjalnie zaprojektowane ćwiczenia, które stymulują rozwój określonych funkcji poznawczych.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Cele treningu:</h3>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Poprawa koncentracji uwagi</li>
                    <li>Rozwój pamięci roboczej</li>
                    <li>Wzmocnienie funkcji wykonawczych</li>
                    <li>Poprawa przetwarzania informacji</li>
                    <li>Rozwój umiejętności planowania</li>
                    <li>Zwiększenie kontroli impulsów</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Struktura treningu:</h3>
                  <p className="mb-4">
                    Trening składa się z trzech etapów, każdy trwający 8-10 tygodni. W trakcie każdego etapu dziecko
                    wykonuje codziennie krótkie ćwiczenia, które są dostosowane do jego indywidualnych potrzeb i
                    możliwości.
                  </p>

                  <div className="bg-teal-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Etap I - Podstawy</h4>
                    <p className="text-sm text-teal-700">Rozwój podstawowych funkcji uwagi i koncentracji</p>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Etap II - Rozwój</h4>
                    <p className="text-sm text-teal-700">Wzmacnianie pamięci roboczej i funkcji wykonawczych</p>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-teal-800 mb-2">Etap III - Integracja</h4>
                    <p className="text-sm text-teal-700">
                      Integracja nabytych umiejętności w codziennym funkcjonowaniu
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Dla kogo?</h3>
                  <p className="mb-4">
                    Trening Neuroflow jest przeznaczony dla dzieci w wieku 6-16 lat z trudnościami w nauce, problemami z
                    koncentracją, ADHD, dysleksją oraz innymi specyficznymi trudnościami w uczeniu się.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Jak przebiega trening?</h3>
                  <ol className="list-decimal list-inside mb-4 space-y-2">
                    <li>Diagnoza wstępna i ustalenie celów</li>
                    <li>Codzienne ćwiczenia w domu (15-20 min)</li>
                    <li>Regularne konsultacje z terapeutą</li>
                    <li>Monitorowanie postępów</li>
                    <li>Dostosowywanie poziomu trudności</li>
                  </ol>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-teal-50 p-6 md:p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">Skontaktuj się</h2>
                <div className="text-center">
                  <p className="mb-6">Chcesz rozpocząć trening Neuroflow lub masz pytania? Skontaktuj się ze mną.</p>
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
