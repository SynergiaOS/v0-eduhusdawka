import { Suspense } from "react"
import AppointmentForm from "@/components/appointment-form"
import AnimatedSection from "@/components/animated-section"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"
import { BookingFormError } from "@/components/error-fallbacks"
import { FormLoadingState } from "@/components/loading-states"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rezerwacja Wizyty Online | Pedagog Specjalny | EduHustawka",
  description:
    "Zarezerwuj wizytę u pedagoga specjalnego w Białymstoku. Wybierz dogodny termin terapii ręki, diagnozy KORP lub innych usług dla Twojego dziecka.",
}

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
              Rezerwacja Wizyty Online | EduHustawka
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Zarezerwuj wizytę u pedagoga specjalnego w Białymstoku. Wybierz dogodny termin terapii ręki, diagnozy KORP
              lub innych usług dla Twojego dziecka. Prosty proces rezerwacji online.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <ErrorBoundary fallback={BookingFormError}>
                <Suspense fallback={<FormLoadingState />}>
                  <AppointmentForm />
                </Suspense>
              </ErrorBoundary>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />

      {/* Strukturyzowane dane Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Rezerwacja wizyt u pedagoga specjalnego",
            provider: {
              "@type": "LocalBusiness",
              name: "EduHustawka - Joanna Świrydowicz",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pomigacze, ul. Polna 17",
                addressLocality: "Turośń Kościelna",
                postalCode: "18-106",
                addressCountry: "PL",
              },
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: "150.00",
              priceCurrency: "PLN",
            },
          }),
        }}
      />
    </div>
  )
}
