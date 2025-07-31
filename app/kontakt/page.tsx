import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import { MapPin, Phone, Mail, Home } from "lucide-react"
import SocialIcons from "@/components/social-icons"
import GoogleMap from "@/components/google-map"
import type { Metadata } from "next"
import DirectionsInfo from "@/components/directions-info"
import PrintableDirections from "@/components/printable-directions"
import ErrorBoundary from "@/components/error-boundary"
import { ContactFormError, MapError } from "@/components/error-fallbacks"
import { FormLoadingState, LoadingSpinner } from "@/components/loading-states"

export const metadata: Metadata = {
  title: "Kontakt | EduHustawka",
  description: "Skontaktuj się z nami, aby umówić wizytę lub uzyskać więcej informacji o naszych usługach.",
}

export default function ContactPage() {
  // Dokładne współrzędne GPS dla Polna 17, Pomigacze
  const latitude = 53.1167
  const longitude = 23.0667

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">Kontakt</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Skontaktuj się z nami, aby umówić wizytę lub uzyskać więcej informacji o naszych usługach. Jesteśmy
              dostępni telefonicznie, mailowo oraz przez media społecznościowe.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="left" delay={200}>
              <div className="space-y-8">
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover-scale">
                  <h3 className="text-xl font-semibold mb-6 text-teal-700 font-heading">Informacje kontaktowe</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">Adres</h4>
                        <p className="text-gray-600">
                          Polna 17
                          <br />
                          18-106 Pomigacze
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          GPS: {latitude}, {longitude}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Home className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">Lokalizacja gabinetu</h4>
                        <p className="text-gray-600">
                          Gabinet znajduje się w domu prywatnym. Wejście od strony ogrodu, z prawej strony budynku. Na
                          bramie znajduje się tabliczka "EDU HUSTAWKA".
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">Telefon</h4>
                        <p className="text-gray-600">531 509 008</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">Email</h4>
                        <p className="text-gray-600 break-words">j.swirydowicz.eduhustawka2024@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start pt-2">
                      <div className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">Media społecznościowe</h4>
                        <div className="mt-2">
                          <SocialIcons iconSize={22} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-700">
                      Wizyty można umawiać telefonicznie lub mailowo. Odpowiem na wszystkie pytania i pomogę dobrać
                      odpowiednią formę terapii dla Twojego dziecka.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={400}>
              <ErrorBoundary fallback={ContactFormError}>
                <Suspense fallback={<FormLoadingState />}>
                  <ContactForm />
                </Suspense>
              </ErrorBoundary>
            </AnimatedSection>

            {/* Full-width map that spans both columns */}
            <AnimatedSection className="md:col-span-2 mb-8" delay={600}>
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                <h2 className="text-2xl font-semibold mb-4 text-teal-700 font-heading">Jak do nas dojechać</h2>
                <p className="text-gray-700 mb-4">
                  Nasz gabinet terapeutyczny znajduje się w domu prywatnym w spokojnej okolicy, łatwo dostępnej zarówno
                  samochodem jak i komunikacją publiczną. Poniżej znajdziesz mapę oraz szczegółowe wskazówki dojazdu.
                </p>
                <div className="flex items-center text-teal-700 font-medium">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Polna 17, 18-106 Pomigacze</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="md:col-span-2 mt-12" delay={600}>
              <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading text-center">
                Jak do nas dojechać
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <ErrorBoundary fallback={MapError}>
                    <Suspense fallback={<LoadingSpinner text="Ładowanie mapy..." />}>
                      <GoogleMap
                        address="Polna 17, 18-106 Pomigacze, Polska"
                        height="450px"
                        zoom={13}
                        showNavigationButton={true}
                        className="w-full rounded-lg shadow-md"
                        locationName="EDU HUSTAWKA - Joanna Świrydowicz"
                        locationInfo={{
                          hours: "Pon-Pt: 9:00-17:00, Sob: 9:00-13:00",
                          phone: "531 509 008",
                          description: "Profesjonalna terapia i edukacja specjalna dla dzieci w każdym wieku.",
                          isHomeOffice: true,
                        }}
                      />
                    </Suspense>
                  </ErrorBoundary>
                </div>
                <div className="md:col-span-1">
                  <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner size="sm" />}>
                      <DirectionsInfo />
                      <PrintableDirections />
                    </Suspense>
                  </ErrorBoundary>
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
