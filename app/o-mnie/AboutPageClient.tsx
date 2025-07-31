"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Award, Users, GraduationCap, BadgeIcon as Certificate } from "lucide-react"

export default function AboutPageClient() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading heading-fancy">O mnie</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pedagog specjalny z pasją do wspierania rozwoju każdego dziecka
              </p>
            </div>
          </AnimatedSection>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
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
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide" direction="right" delay={200}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-teal-700">Kim jestem</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Jestem pedagogiem specjalnym z wieloletnim doświadczeniem w pracy z dziećmi o zróżnicowanych
                    potrzebach rozwojowych i edukacyjnych. Specjalizuję się w terapii dzieci z niepełnosprawnością
                    intelektualną, ze spektrum autyzmu, zaburzeniami zachowania oraz trudnościami w uczeniu się.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Moje doświadczenie</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Na co dzień pracuję w szkole podstawowej, gdzie wspieram dzieci w zakresie edukacyjnym, emocjonalnym
                    i społecznym. Wcześniej pracowałam w przedszkolu terapeutycznym, w którym zdobyłam cenne
                    doświadczenie w pracy z dziećmi wymagającymi szczególnego wsparcia – m.in. z zaburzeniami rozwoju,
                    trudnościami w komunikacji, regulacją emocji oraz integracją sensoryczną.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">500+</div>
                      <div className="text-sm text-gray-600">dzieci objętych pomocą</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Education Section */}
          <AnimatedSection delay={300}>
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-teal-700 flex items-center justify-center">
                <GraduationCap className="mr-3 h-6 w-6" />
                Wykształcenie i kwalifikacje
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Studia</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-teal-700">Studia magisterskie</h4>
                      <p className="text-sm text-gray-600">
                        Edukacja i rehabilitacja osób z niepełnosprawnością intelektualną
                        <br />
                        <em>Akademia Pedagogiki Specjalnej im. Marii Grzegorzewskiej</em>
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-teal-700">Studia licencjackie</h4>
                      <p className="text-sm text-gray-600">
                        Pedagogika niepełnosprawnych intelektualnie z pedagogiką wczesnoszkolną
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Studia podyplomowe</h3>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700">
                        Pedagogika opiekuńczo-wychowawcza z pomocą psychologiczno-pedagogiczną
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700">Pedagogika korekcyjna</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700">Edukacja i rewalidacja osób ze spektrum autyzmu</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-700">Wczesne wspomaganie rozwoju dziecka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications Section */}
          <AnimatedSection delay={400}>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-teal-700 flex items-center justify-center">
                <Certificate className="mr-3 h-6 w-6" />
                Ukończone kursy i szkolenia
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Trening słuchowy Neuroflow",
                  "Indywidualna Stymulacja Słuchu Johansena IAS",
                  "Karty Oceny Zachowania i Emocji – KOZE",
                  "Karty Oceny Jakościowej Rozwoju – KOJR",
                  "Zaburzenia przetwarzania słuchowego (C)APD",
                  "Karty Oceny Rozwoju Psychoruchowego – KORP",
                  "Symultaniczno-Sekwencyjna Nauka Czytania",
                  "Terapia Ręki – diagnoza i działania terapeutyczne",
                  "Trening Umiejętności Społecznych (TUS)",
                  "PECS poziom 1 – system komunikacji alternatywnej",
                  "Trening Zastępowania Agresji (TZA)",
                  "Terapia behawioralna – Stosowana Analiza Zachowania",
                ].map((course, index) => (
                  <div key={index} className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                    <p className="text-sm text-teal-800 font-medium">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact CTA */}
          <AnimatedSection delay={500}>
            <div className="bg-teal-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Skontaktuj się ze mną</h2>
              <p className="mb-6 text-teal-100">
                Masz pytania o terapię dla swojego dziecka? Chętnie odpowiem na wszystkie wątpliwości.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-teal-50"
                  onClick={() => (window.location.href = "tel:+48531509008")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
                  onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Napisz wiadomość
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  )
}
