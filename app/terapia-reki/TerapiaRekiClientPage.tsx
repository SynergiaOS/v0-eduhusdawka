"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hand, Phone, MessageCircle, CheckCircle, Clock, AlertTriangle, Target } from "lucide-react"

export default function TerapiaRekiClientPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Hand className="h-10 w-10 text-purple-600" />
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Terapia ręki</h1>
                    <p className="text-xl text-purple-600">Rozwój motoryki małej i grafomotoryki</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
                  <p className="text-yellow-800 font-semibold">
                    "To dzięki ręce człowiek zarabia na życie, rodzice pieszczą swoje dzieci, muzyk gra sonaty,
                    ociemniały czyta a głuchy mówi."
                  </p>
                  <p className="text-yellow-700 text-sm mt-1">- Sir Charles Bell</p>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Bez umiejętności grafomotorycznych dziecku trudniej jest... mówić! Obszary ruchowe ręki i mowy
                  znajdują się w mózgu człowieka bardzo blisko siebie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Umów terapię ręki
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 bg-transparent"
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
                  src="/images/hand-therapy.png"
                  alt="Terapia ręki - ćwiczenia motoryczne"
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

      {/* For whom Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dla kogo jest terapia ręki?</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-red-50 rounded-2xl p-8 mb-12 border-l-4 border-red-400">
                <h3 className="text-xl font-semibold text-red-800 mb-4">Rodzicu, jeśli Twoje dziecko:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>niechętnie pisze, rysuje, lepi z plasteliny</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>ma trudności z ubieraniem się, zapinaniem guzików</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>zaciska dłonie zbyt mocno na przedmiotach</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>unika dotykania nowych faktur i powierzchni</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>ma słabą koordynację wzrokowo-ruchową</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>pisze nieczytelnie lub bardzo wolno</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>ma trudności z używaniem nożyczek</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>szybko się męczy podczas pisania</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={300}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-purple-700 flex items-center">
                      <Target className="h-6 w-6 mr-2" />
                      Cele terapii ręki
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Poprawa sprawności ruchowej rąk i palców</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Doskonalenie precyzji ruchów palców</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Rozwój umiejętności chwytu i manipulacji</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Nauka płynnego i estetycznego pisania</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Wzmocnienie mięśni dłoni i przedramienia</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Poprawa koordynacji wzrokowo-ruchowej</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Metody terapii</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Ćwiczenia wzmacniające mięśnie dłoni</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Zabawy rozwijające motorykę małą</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Trening grafomotoryczny</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Ćwiczenia z różnymi fakturami</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Nauka prawidłowego chwytu narzędzi</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Integracja sensoryczna</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Jak przebiega terapia?</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={200}>
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-purple-600">1</span>
                    </div>
                    <CardTitle>Diagnoza</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Ocena aktualnego poziomu rozwoju motoryki małej i identyfikacja obszarów wymagających wsparcia.
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
                    <CardTitle>Plan terapii</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Opracowanie indywidualnego planu terapeutycznego dostosowanego do potrzeb i możliwości dziecka.
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
                    <CardTitle>Regularne sesje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Systematyczne zajęcia terapeutyczne z wykorzystaniem różnorodnych metod i narzędzi.
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

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={200}>
              <Card className="border-2 border-purple-200">
                <CardHeader className="text-center bg-purple-50">
                  <CardTitle className="text-xl text-purple-700">Sesja indywidualna</CardTitle>
                  <CardDescription>Terapia ręki 1:1</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800 mb-2">80 zł</div>
                    <p className="text-gray-600">za 45 minut</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Indywidualne podejście</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Dostosowane ćwiczenia</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Materiały do domu</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Umów sesję
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="border-2 border-green-200">
                <CardHeader className="text-center bg-green-50">
                  <CardTitle className="text-xl text-green-700">Pakiet 4 sesji</CardTitle>
                  <CardDescription>Oszczędź 20 zł</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800 mb-2">300 zł</div>
                    <p className="text-gray-600">zamiast 320 zł</p>
                    <p className="text-sm text-green-600 font-semibold">Oszczędzasz 20 zł!</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>4 sesje indywidualne</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Plan ćwiczeń domowych</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Konsultacje z rodzicami</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Wybierz pakiet
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-8 text-center">
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center justify-center text-sm text-purple-800">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Czas trwania sesji: 45 minut | Lokalizacja: Polna 17, Pomigacze</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Umów się na terapię ręki</h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                Skontaktuj się ze mną, aby umówić terapię ręki dla Twojego dziecka. Odpowiem na wszystkie pytania i
                pomogę wybrać najlepszy plan terapii.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Zadzwoń</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-2">531 509 008</p>
                    <p className="text-sm text-gray-600 mb-4">Pon-Pt: 8:00-16:00</p>
                    <Button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
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
