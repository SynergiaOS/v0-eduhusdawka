"use client"

import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Users, Heart, Phone } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="o-mnie" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide" direction="left">
            <div className="relative">
              <OptimizedImage
                src="/images/joanna.png"
                alt="Joanna Świrydowicz - Pedagog Specjalny"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl"
                objectFit="contain"
                objectPosition="center"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-60" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-40" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide" direction="right" delay={200}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading heading-fancy">O mnie</h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Jestem pedagogiem specjalnym z wieloletnim doświadczeniem w pracy z dziećmi o zróżnicowanych
                  potrzebach rozwojowych i edukacyjnych. Specjalizuję się w terapii dzieci z niepełnosprawnością
                  intelektualną, ze spektrum autyzmu, zaburzeniami zachowania oraz trudnościami w uczeniu się.
                </p>

                <p>
                  Na co dzień pracuję w szkole podstawowej, gdzie wspieram dzieci w zakresie edukacyjnym, emocjonalnym i
                  społecznym. Wcześniej pracowałam w przedszkolu terapeutycznym, gdzie zdobyłam cenne doświadczenie w
                  pracy z dziećmi wymagającymi szczególnego wsparcia.
                </p>

                <p>
                  Ukończyłam studia magisterskie na Akademii Pedagogiki Specjalnej im. Marii Grzegorzewskiej w zakresie
                  edukacji i rehabilitacji osób z niepełnosprawnością intelektualną. Swoją wiedzę systematycznie
                  rozwijam podczas licznych szkoleń specjalistycznych.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">15+ lat</div>
                    <div className="text-sm text-gray-600">doświadczenia</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">20+</div>
                    <div className="text-sm text-gray-600">certyfikatów</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">500+</div>
                    <div className="text-sm text-gray-600">dzieci objętych pomocą</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">100%</div>
                    <div className="text-sm text-gray-600">zaangażowania</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => (window.location.href = "tel:+48531509008")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Zadzwoń teraz
                </Button>
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  onClick={() => (window.location.href = "/o-mnie")}
                >
                  Dowiedz się więcej
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
