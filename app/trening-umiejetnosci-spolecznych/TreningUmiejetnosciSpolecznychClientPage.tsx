"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Phone, MessageCircle, CheckCircle, Clock, Star, Heart, Brain } from "lucide-react"

export default function TreningUmiejetnosciSpolecznychClientPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-10 w-10 text-blue-600" />
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                      Trening Umiejętności Społecznych
                    </h1>
                    <p className="text-xl text-blue-600">TUS - Zajęcia wspierające rozwój Twojego dziecka</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Trening Umiejętności Społecznych (TUS) to regularne spotkania grupowe dla dzieci i młodzieży, które
                  mają trudności w interakcjach społecznych. Zajęcia pomagają w budowaniu pewności siebie i lepszym
                  funkcjonowaniu w grupie rówieśniczej.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Zapisz na TUS
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 bg-transparent"
                    onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Zadaj pytanie
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <OptimizedImage
                  src="/images/hero-children.png"
                  alt="Dzieci podczas treningu umiejętności społecznych"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  objectFit="cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Czym jest TUS?</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trening Umiejętności Społecznych to program zajęć grupowych, który pomaga dzieciom i młodzieży w
                  rozwijaniu kompetencji społecznych, emocjonalnych i komunikacyjnych. Zajęcia odbywają się w małych
                  grupach, co zapewnia indywidualne podejście do każdego uczestnika.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={300}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-700 flex items-center">
                      <Heart className="h-6 w-6 mr-2" />
                      Zajęcia pomagają w:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>inicjowaniu i podtrzymywaniu relacji z rówieśnikami</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>lepszym rozumieniu emocji – własnych i innych osób</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>regulacji emocji, radzeniu sobie ze stresem</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>opanowaniu zachowań niepożądanych</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>budowaniu pewności siebie</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-yellow-600 flex items-center">
                      <Star className="h-6 w-6 mr-2" />
                      Co zyskują uczestnicy?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>zawierania znajomości i prowadzenia rozmów</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>rozpoznawania, wyrażania i regulowania emocji</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>adekwatnego reagowania na trudne sytuacje</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>konstruktywnego rozwiązywania konfliktów</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>współpracy w grupie</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* For whom Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dla kogo są zajęcia TUS?</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <Card className="mb-8">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-700 flex items-center">
                    <Brain className="h-6 w-6 mr-2" />
                    TUS jest szczególnie pomocny dla dzieci:
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>z zespołem Aspergera i autyzmem</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>z ADHD i problemami z koncentracją</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>nieśmiałych i wycofanych</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>z problemami w nawiązywaniu kontaktów</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>z trudnościami w regulacji emocji</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>z problemami behawioralnymi</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>z niską samooceną</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>przygotowujących się do szkoły</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-800">Grupy</h3>
                </div>
                <p className="text-blue-700">
                  Kameralne grupy do 8 osób, dobrane na podstawie indywidualnej konsultacji. Uczestnicy są dobierani pod
                  względem wieku, poziomu rozwoju i specyficznych potrzeb.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Metody pracy</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={200}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <CardTitle>Gry i zabawy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gry planszowe, zabawy ruchowe i scenki teatralne rozwijające umiejętności społeczne.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💭</span>
                  </div>
                  <CardTitle>Rozmowy i dyskusje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Moderowane rozmowy na tematy ważne dla dzieci, nauka wyrażania opinii i słuchania innych.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <CardTitle>Projekty grupowe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Wspólne tworzenie, planowanie i realizacja projektów rozwijających współpracę.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cennik</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={200}>
              <Card className="border-2 border-blue-200">
                <CardHeader className="text-center bg-blue-50">
                  <CardTitle className="text-xl text-blue-700">Zajęcia grupowe TUS</CardTitle>
                  <CardDescription>Grupa 6-8 dzieci</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800 mb-2">60 zł</div>
                    <p className="text-gray-600">za 60 minut</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Zajęcia w małej grupie</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Indywidualne podejście</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Materiały i pomoce</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Konsultacje z rodzicami</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Zapisz na TUS
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="border-2 border-green-200">
                <CardHeader className="text-center bg-green-50">
                  <CardTitle className="text-xl text-green-700">Karnet miesięczny</CardTitle>
                  <CardDescription>4 zajęcia - oszczędź 20 zł</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800 mb-2">220 zł</div>
                    <p className="text-gray-600">zamiast 240 zł</p>
                    <p className="text-sm text-green-600 font-semibold">Oszczędzasz 20 zł!</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>4 zajęcia grupowe</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Stały termin w tygodniu</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Regularne konsultacje</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Materiały do domu</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Wybierz karnet
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-8 text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center justify-center text-sm text-blue-800">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Zajęcia odbywają się raz w tygodniu | Lokalizacja: Polna 17, Pomigacze</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Zapisz dziecko na TUS</h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                Skontaktuj się ze mną, aby zapisać dziecko na Trening Umiejętności Społecznych. Omówimy potrzeby Twojego
                dziecka i dobierzemy odpowiednią grupę.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Zadzwoń</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-2">531 509 008</p>
                    <p className="text-sm text-gray-600 mb-4">Pon-Pt: 8:00-16:00</p>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => (window.location.href = "tel:+48531509008")}
                    >
                      Zadzwoń teraz
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Napisz</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      j.swirydowicz.eduhustawka2024@gmail.com
                      <br />
                      Odpowiem w ciągu 24h
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      onClick={() => (window.location.href = "/#kontakt")}
                    >
                      Formularz kontaktowy
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
