import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Search, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strona nie znaleziona | EduHustawka",
  description: "Przepraszamy, ale strona której szukasz nie istnieje.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="relative w-64 h-64 mx-auto mb-8">
                <Image
                  src="/placeholder.svg?key=77fc3"
                  alt="Strona nie znaleziona"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-teal-800 mb-4 font-heading">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 font-heading">
                Ups! Strona nie znaleziona
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                  <Home className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-800 mb-2">Strona główna</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Wróć do strony głównej, aby znaleźć potrzebne informacje.
                  </p>
                  <Link href="/">
                    <Button variant="outline" className="w-full text-teal-600 border-teal-600 hover:bg-teal-50">
                      Strona główna
                    </Button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                  <MapPin className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-800 mb-2">Kontakt</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Skontaktuj się z nami, jeśli potrzebujesz pomocy lub masz pytania.
                  </p>
                  <Link href="/#kontakt">
                    <Button variant="outline" className="w-full text-teal-600 border-teal-600 hover:bg-teal-50">
                      Kontakt
                    </Button>
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                  <Search className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-800 mb-2">Oferta</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Sprawdź naszą ofertę usług terapeutycznych i diagnostycznych.
                  </p>
                  <Link href="/#oferta">
                    <Button variant="outline" className="w-full text-teal-600 border-teal-600 hover:bg-teal-50">
                      Oferta
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Link href="/">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Wróć do strony głównej
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
