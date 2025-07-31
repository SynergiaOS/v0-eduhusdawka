"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import FaqSection from "@/components/faq-section"
import BookingSection from "@/components/booking-section"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import {
  Phone,
  MessageCircle,
  Star,
  Award,
  Brain,
  Users,
  Hand,
  BookOpen,
  Headphones,
  Zap,
  Book,
  Mic,
} from "lucide-react"

export default function HomeClient() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-white/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                  <span className="text-teal-700">Wsparcie rozwoju</span>
                  <br />
                  <span className="text-gray-800">każdego dziecka</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Pedagog specjalny z wieloletnim doświadczeniem. Specjalizuję się w terapii dzieci z
                  niepełnosprawnością intelektualną, spektrum autyzmu i trudnościami w nauce.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń teraz
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg bg-transparent"
                    onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Napisz wiadomość
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span>15+ lat doświadczenia</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-teal-600 mr-1" />
                    <span>Certyfikowany specjalista</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="relative z-10">
                  <OptimizedImage
                    src="/images/hero-children.png"
                    alt="Dzieci podczas terapii pedagogicznej"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                    priority
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full opacity-40" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-teal-100">Lat doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-teal-100">Dzieci objętych pomocą</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">7</div>
                <div className="text-teal-100">Specjalizacji</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-teal-100">Zaangażowania</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AboutSection />

      {/* Services Section - Column Layout */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading heading-fancy">Moje Usługi</h2>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* KORP - Karty Oceny Rozwoju Psychoruchowego */}
            <AnimatedSection>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Brain className="h-6 w-6 md:h-8 md:w-8 text-teal-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">KARTY OCENY ROZWOJU PSYCHORUCHOWEGO (KORP)</h3>
                      <p className="text-teal-100">
                        BADANIE ROZWOJU PSYCHORUCHOWEGO DZIECI OD 1 MIESIĄCA ŻYCIA DO 9 LAT I 11 MIESIĘCY
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="md:flex">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <OptimizedImage
                        src="/child-development-puzzle.png"
                        alt="Badanie rozwoju psychoruchowego dziecka"
                        width={300}
                        height={200}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-teal-700 mb-3">
                          Sprawdź rozwój swojego dziecka z testem KORP!
                        </h4>
                        <p className="text-gray-600 mb-4">
                          Czy Twoje dziecko rozwija się harmonijnie? Chcesz upewnić się, że osiąga kolejne etapy
                          rozwojowe zgodnie z normami dla swojego wieku? Skorzystaj z diagnostyki przy użyciu KORP –
                          Kart Oceny Rozwoju Psychoruchowego!
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Czym jest KORP?</h5>
                          <p className="text-gray-600 mb-4">
                            To nowoczesne, wystandaryzowane narzędzie diagnostyczne, które pozwala ocenić rozwój dziecka
                            już od 1. miesiąca życia do 9. roku życia. Test dokładnie analizuje kluczowe sfery
                            rozwojowe:
                          </p>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Rozwój ruchowy – sprawność fizyczna i
                              koordynacja
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Motoryka precyzyjna i lateralizacja
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Spostrzeganie wzrokowe i koordynacja
                              wzrokowo-ruchowa
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Komunikacja i rozwój mowy
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Rozwój emocjonalny i społeczny
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Funkcje behawioralne
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Umiejętności przedszkolne i szkolne
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">
                            Dlaczego warto skorzystać z diagnozy KORP?
                          </h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🔹</span>Wczesne wykrycie ewentualnych trudności
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🔹</span>Indywidualne podejście
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🔹</span>Precyzyjna analiza
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🔹</span>Przydatne wskazówki dla rodziców i
                              nauczycieli
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button
                          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3"
                          onClick={() => (window.location.href = "tel:+48531509008")}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Umów badanie KORP
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Trening Umiejętności Społecznych */}
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Trening Umiejętności Społecznych (TUS)</h3>
                      <p className="text-blue-100">Zajęcia wspierające rozwój Twojego dziecka!</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="md:flex">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <OptimizedImage
                        src="/images/hero-children.png"
                        alt="Dzieci podczas treningu umiejętności społecznych"
                        width={300}
                        height={200}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <p className="text-gray-600 mb-4">
                        Trening Umiejętności Społecznych (TUS) to regularne spotkania grupowe dla dzieci i młodzieży,
                        które mają trudności w interakcjach społecznych.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Zajęcia pomagają w:</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>inicjowaniu i podtrzymywaniu relacji z
                              rówieśnikami
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>lepszym rozumieniu emocji – własnych i
                              innych osób
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>regulacji emocji, radzeniu sobie ze stresem
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>opanowaniu zachowań niepożądanych
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Co zyskują uczestnicy?</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">⭐️</span>zawierania znajomości i prowadzenia rozmów
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">⭐️</span>rozpoznawania, wyrażania i regulowania
                              emocji
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">⭐️</span>adekwatnego reagowania na trudne sytuacje
                            </li>
                            <li className="flex items-start">
                              <span className="text-yellow-500 mr-2">⭐️</span>konstruktywnego rozwiązywania konfliktów
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-sm text-blue-800">
                          <span className="font-semibold">👨‍👩‍👧‍👦 Grupy:</span> Kameralne, do 8 osób, dobrane na
                          podstawie indywidualnej konsultacji.
                        </p>
                      </div>

                      <div className="text-center">
                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                          onClick={() => (window.location.href = "tel:+48531509008")}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Zapisz na TUS
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Terapia ręki */}
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Hand className="h-6 w-6 md:h-8 md:w-8 text-purple-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Terapia ręki</h3>
                      <p className="text-purple-100 italic">
                        "To dzięki ręce człowiek zarabia na życie, rodzice pieszczą swoje dzieci, muzyk gra sonaty,
                        ociemniały czyta a głuchy mówi." - Sir Charles Bell
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="md:flex">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <OptimizedImage
                        src="/images/hand-therapy.png"
                        alt="Terapia ręki - ćwiczenia motoryczne"
                        width={300}
                        height={200}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                        <p className="text-yellow-800 font-semibold">
                          Bez umiejętności grafomotorycznych dziecku trudniej jest… mówić!
                        </p>
                        <p className="text-yellow-700 text-sm mt-1">
                          Obszary ruchowe ręki i mowy znajdują się w mózgu człowieka bardzo blisko siebie.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Dla kogo jest terapia ręki?</h5>
                          <p className="text-gray-600 mb-3">Rodzicu, jeśli Twoje dziecko:</p>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>niechętnie pisze, rysuje, lepi z plasteliny
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>ma trudności z ubieraniem się, zapinaniem
                              guzików
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>zaciska dłonie zbyt mocno na przedmiotach
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>unika dotykania nowych faktur i powierzchni
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Cele terapii ręki:</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>poprawa sprawności ruchowej rąk
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>doskonalenie precyzji ruchów palców
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>rozwój umiejętności chwytu i manipulacji
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>nauka płynnego i estetycznego pisania
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button
                          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                          onClick={() => (window.location.href = "tel:+48531509008")}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Umów terapię ręki
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Terapia pedagogiczna */}
            <AnimatedSection delay={300}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-green-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Terapia pedagogiczna</h3>
                      <p className="text-green-100">Skuteczne wsparcie dla dzieci z trudnościami w nauce</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="md:flex">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <OptimizedImage
                        src="/colorful-learning-tools.png"
                        alt="Terapia pedagogiczna"
                        width={300}
                        height={200}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <p className="text-gray-600 mb-4">
                        Terapia pedagogiczna to specjalistyczne wsparcie dla dzieci, które mają trudności w nauce i
                        rozwoju. Pomaga przezwyciężać trudności w czytaniu, pisaniu, liczeniu oraz innych czynnościach
                        szkolnych.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Dla kogo jest terapia?</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>z trudnościami w nauce (czytanie, pisanie,
                              liczenie)
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>z problemami w funkcjach wzrokowych i
                              słuchowych
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>z zaburzeniami mowy
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">❌</span>z trudnościami w koncentracji i pamięci
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Cele terapii:</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>Wspieranie rozwoju funkcji poznawczych
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>Wyrównywanie braków w wiadomościach
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>Eliminowanie niepowodzeń szkolnych
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">🎯</span>Budowanie motywacji do nauki
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                          onClick={() => (window.location.href = "tel:+48531509008")}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Umów terapię pedagogiczną
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Indywidualna Stymulacja Słuchu IAS */}
            <AnimatedSection delay={400}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Headphones className="h-6 w-6 md:h-8 md:w-8 text-indigo-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        Indywidualna Stymulacja Słuchu dr K. Johansena (IAS)
                      </h3>
                      <p className="text-indigo-100">Skuteczna metoda wspierająca rozwój słuchu, mowy i koncentracji</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="aspect-video mb-4">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/uxCj7pgGD7M"
                        title="JIAS-trening słuchowy"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3">Czym jest metoda IAS?</h5>
                        <p className="text-gray-600 mb-3">
                          Terapia słuchowa podobna do metody Tomatisa, różniąca się sposobem realizacji. Odbywa się w
                          warunkach domowych i opiera się na słuchaniu specjalnie nagranej muzyki.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">📌</span>Nie wymaga specjalistycznego sprzętu
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">📌</span>Codzienna sesja ok. 10 minut
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">📌</span>Program trwa 6-18 miesięcy
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3">Korzyści z terapii IAS:</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>poprawa koncentracji i uwagi słuchowej
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>lepsze przetwarzanie słuchowe
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>poprawa czytania i rozumienia języka
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>większa płynność wypowiedzi
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                      <p className="text-indigo-800 text-sm">
                        <span className="font-semibold">🏠 Zalety:</span> Możliwość przeprowadzania w domu, łączenie z
                        innymi terapiami, komfortowa atmosfera, rozłożone w czasie koszty.
                      </p>
                    </div>

                    <div className="text-center">
                      <Button
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3"
                        onClick={() => (window.location.href = "tel:+48531509008")}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Umów diagnozę IAS
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Aktywny Trening Słuchowy NEUROFLOW */}
            <AnimatedSection delay={500}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-cyan-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Aktywny Trening Słuchowy NEUROFLOW</h3>
                      <p className="text-cyan-100">
                        Nowoczesny trening słuchowy wspierający rozwój słuchu, mowy i zdolności poznawczych
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="aspect-video mb-4">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/knZi4V6EGOo"
                        title="Aktywny Trening Słuchowy Neuroflow"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3">Dla kogo jest Neuroflow?</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>Dzieci od 4. roku życia z APD
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>Trudności z koncentracją i nauką
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>Problemy z rozumieniem mowy w hałasie
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>Dysleksja, ADHD, SLI
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3">Efekty treningu:</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🎯</span>Poprawa umiejętności językowych
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🎯</span>Lepsze wyniki w nauce
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🎯</span>Lepsza koncentracja
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🎯</span>Wzrost pewności siebie
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                      <p className="text-cyan-800 text-sm">
                        <span className="font-semibold">💻 Terapia online:</span> 3 razy w tygodniu, 20-25 minut,
                        program trwa ok. 8 miesięcy.
                      </p>
                    </div>

                    <div className="text-center">
                      <Button
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3"
                        onClick={() => (window.location.href = "tel:+48531509008")}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Rozpocznij Neuroflow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Wczesna Nauka Czytania */}
            <AnimatedSection delay={600}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Book className="h-6 w-6 md:h-8 md:w-8 text-orange-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Wczesna Nauka Czytania</h3>
                      <p className="text-orange-100">Symultaniczno-Sekwencyjna Metoda Czytania</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="md:flex">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <OptimizedImage
                        src="/images/early-reading.png"
                        alt="Wczesna Nauka Czytania"
                        width={300}
                        height={200}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <p className="text-gray-600 mb-4">
                        Skuteczna metoda nauki czytania oparta na sprawdzonej Symultaniczno-Sekwencyjnej Nauce Czytania
                        (metodzie prof. Cieszyńskiej). Innowacyjne podejście wspierające rozwój mowy i umiejętności
                        czytania.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Dla kogo?</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>trudności w czytaniu i pisaniu (ryzyko
                              dysleksji)
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>opóźniony rozwój mowy
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>zaburzenia ze spektrum autyzmu
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>dwujęzyczność
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Jak działa metoda?</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">✔</span>Czytanie sylabami
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">✔</span>Stopniowe wprowadzanie materiału
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">✔</span>Aktywacja obu półkul mózgowych
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">✔</span>Nauka przez ruch i zabawę
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button
                          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                          onClick={() => (window.location.href = "tel:+48531509008")}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Zapisz na naukę czytania
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Forbrain */}
            <AnimatedSection delay={700}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-6">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Mic className="h-6 w-6 md:h-8 md:w-8 text-pink-100" />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Forbrain</h3>
                      <p className="text-pink-100">Urządzenie do treningu słuchowo-głosowego</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="md:flex">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <OptimizedImage
                        src="/focused-mind-training.png"
                        alt="Forbrain"
                        width={300}
                        height={200}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <p className="text-gray-600 mb-4">
                        Forbrain to urządzenie poddane ocenie klinicznej, przeznaczone dla terapeutów i pedagogów
                        pracujących z osobami z trudnościami w uczeniu się, przetwarzaniu słuchowym, komunikacji, uwadze
                        lub zapamiętywaniu.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Zastosowanie:</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Trudności w uczeniu się
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Problemy z przetwarzaniem słuchowym
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Zaburzenia komunikacji
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>Problemy z uwagą i zapamiętywaniem
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Korzyści:</h5>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🎯</span>Poprawa percepcji własnego głosu
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🎯</span>Lepsze przetwarzanie informacji
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🎯</span>Bezpieczne i łatwe w obsłudze
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-2">🎯</span>Możliwość użycia w domu
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Button
                          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3"
                          onClick={() => (window.location.href = "tel:+48531509008")}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Dowiedz się więcej o Forbrain
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <BookingSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading heading-fancy">
              Skontaktuj się ze mną
            </h2>
          </AnimatedSection>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
