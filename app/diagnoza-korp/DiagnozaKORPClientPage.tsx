"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Phone, MessageCircle, CheckCircle, Clock, Star } from "lucide-react"

export default function DiagnozaKORPClientPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-10 w-10 text-teal-600" />
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Diagnoza KORP</h1>
                    <p className="text-xl text-teal-600">Karty Oceny Rozwoju Psychoruchowego</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Kompleksowe badanie rozwoju psychoruchowego dzieci od 1 miesiąca życia do 9 lat i 11 miesięcy.
                  Sprawdź, czy Twoje dziecko rozwija się harmonijnie i osiąga kolejne etapy rozwojowe zgodnie z normami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Umów badanie KORP
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 bg-transparent"
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
                  src="/child-development-puzzle.png"
                  alt="Badanie rozwoju psychoruchowego dziecka"
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

      {/* What is KORP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Czym jest KORP?</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-teal-50 rounded-2xl p-8 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  KORP to nowoczesne, wystandaryzowane narzędzie diagnostyczne, które pozwala ocenić rozwój dziecka już
                  od 1. miesiąca życia do 9. roku życia. Test dokładnie analizuje kluczowe sfery rozwojowe, umożliwiając
                  wczesne wykrycie ewentualnych trudności i zaplanowanie odpowiedniego wsparcia.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={300}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-teal-700">Obszary badania KORP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Rozwój ruchowy – sprawność fizyczna i koordynacja</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Motoryka precyzyjna i lateralizacja</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Spostrzeganie wzrokowe i koordynacja wzrokowo-ruchowa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Komunikacja i rozwój mowy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Rozwój emocjonalny i społeczny</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Funkcje behawioralne</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Umiejętności przedszkolne i szkolne</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Dlaczego warto?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Wczesne wykrycie ewentualnych trudności rozwojowych</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Indywidualne podejście do każdego dziecka</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Precyzyjna analiza wszystkich sfer rozwoju</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Przydatne wskazówki dla rodziców i nauczycieli</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Podstawa do planowania terapii i wsparcia</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Obiektywna ocena postępów w rozwoju</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Jak przebiega badanie?</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={200}>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-teal-600">1</span>
                    </div>
                    <CardTitle>Konsultacja wstępna</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Rozmowa z rodzicami o rozwoju dziecka, jego mocnych stronach i obszarach budzących niepokój.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <CardTitle>Badanie KORP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Przeprowadzenie kompleksowego badania wszystkich obszarów rozwoju w przyjaznej atmosferze.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <CardTitle>Omówienie wyników</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Szczegółowe omówienie wyników i rekomendacji dotyczących dalszego wsparcia rozwoju dziecka.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cennik</h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={200}>
              <Card className="border-2 border-teal-200">
                <CardHeader className="text-center bg-teal-50">
                  <CardTitle className="text-2xl text-teal-700">Badanie KORP</CardTitle>
                  <CardDescription>Kompleksowa diagnoza rozwoju psychoruchowego</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-800 mb-2">200 zł</div>
                    <p className="text-gray-600">za pełne badanie</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Konsultacja wstępna z rodzicami</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Kompleksowe badanie wszystkich obszarów</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Szczegółowy raport z wynikami</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Omówienie wyników i rekomendacji</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Wskazówki dla rodziców</span>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center text-sm text-teal-800">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Czas trwania: 60-90 minut</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Umów badanie KORP
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Umów się na badanie</h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                Skontaktuj się ze mną, aby umówić badanie KORP dla Twojego dziecka. Odpowiem na wszystkie pytania i
                pomogę wybrać najlepszy termin.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Zadzwoń</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-2">531 509 008</p>
                    <p className="text-sm text-gray-600 mb-4">Pon-Pt: 8:00-16:00</p>
                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      onClick={() => (window.location.href = "tel:+48531509008")}
                    >
                      Zadzwoń teraz
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Napisz</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      j.swirydowicz.eduhustawka2024@gmail.com
                      <br />
                      Odpowiem w ciągu 24h
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
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
