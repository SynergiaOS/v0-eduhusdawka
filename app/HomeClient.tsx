"use client"

import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import FaqSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  Users,
  Hand,
  BookOpen,
  Headphones,
  Zap,
  Phone,
  MessageCircle,
  Star,
  Award,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-teal-50 to-teal-100">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-teal-600/5 to-teal-600/10" />

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
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => (window.location.href = "tel:+48531509008")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń teraz
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
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
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-100 rounded-full opacity-40" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section id="services" className="py-20 bg-gradient-to-br from-teal-50 to-teal-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading text-teal-800">Moje Usługi</h2>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* KORP - Karty Oceny Rozwoju Psychoruchowego */}
              <AnimatedSection>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <OptimizedImage
                      src="/child-development-puzzle.png"
                      alt="Diagnoza KORP - kompleksowa ocena rozwoju dziecka"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Brain className="inline h-4 w-4 mr-1" />
                        KORP
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-teal-800">Diagnoza KORP</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Kompleksowa Ocena Rozwoju Psychoruchowego to profesjonalne narzędzie diagnostyczne, które pozwala
                      na szczegółową ocenę rozwoju dziecka w różnych obszarach.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal-600">od 200 zł</span>
                      <Link
                        href="/diagnoza-korp"
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-lg hover:shadow-xl"
                      >
                        <ArrowRight className="inline h-4 w-4 mr-2" />
                        Dowiedz się więcej
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Terapia ręki */}
              <AnimatedSection delay={100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <OptimizedImage
                      src="/images/hand-therapy.png"
                      alt="Terapia ręki - usprawnianie motoryki małej"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Hand className="inline h-4 w-4 mr-1" />
                        Terapia ręki
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-teal-800">Terapia ręki</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Specjalistyczna terapia usprawniająca motorykę małą, koordynację wzrokowo-ruchową oraz
                      przygotowująca do nauki pisania.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal-600">od 80 zł</span>
                      <Link
                        href="/terapia-reki"
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-lg hover:shadow-xl"
                      >
                        <ArrowRight className="inline h-4 w-4 mr-2" />
                        Dowiedz się więcej
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Trening Umiejętności Społecznych */}
              <AnimatedSection delay={200}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <OptimizedImage
                      src="/colorful-learning-tools.png"
                      alt="Trening Umiejętności Społecznych"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Users className="inline h-4 w-4 mr-1" />
                        TUS
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-teal-800">Trening Umiejętności Społecznych</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Program rozwijający umiejętności społeczne, komunikację interpersonalną oraz radzenie sobie w
                      różnych sytuacjach społecznych.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal-600">od 100 zł</span>
                      <Link
                        href="/trening-umiejetnosci-spolecznych"
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium shadow-lg hover:shadow-xl"
                      >
                        <ArrowRight className="inline h-4 w-4 mr-2" />
                        Dowiedz się więcej
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Terapia pedagogiczna */}
              <AnimatedSection delay={300}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <OptimizedImage
                      src="/colorful-learning-tools.png"
                      alt="Terapia pedagogiczna"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <BookOpen className="inline h-4 w-4 mr-1" />
                        Terapia
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-teal-800">Terapia pedagogiczna</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Wsparcie w nauce i rozwoju umiejętności edukacyjnych, dostosowane do indywidualnych potrzeb
                      dziecka.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal-600">od 80 zł</span>
                      <Link
                        href="/terapia-pedagogiczna"
                        className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-medium shadow-lg hover:shadow-xl"
                      >
                        <ArrowRight className="inline h-4 w-4 mr-2" />
                        Dowiedz się więcej
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* IAS Johansena */}
              <AnimatedSection delay={400}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                      <div className="aspect-video w-full max-w-sm">
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
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Headphones className="inline h-4 w-4 mr-1" />
                        IAS
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-teal-800">IAS Johansena</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Innowacyjna metoda terapii słuchowej wspierająca rozwój mowy, języka i koncentracji poprzez
                      specjalnie przygotowaną muzykę.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal-600">od 150 zł</span>
                      <Link
                        href="/trening-sluchowy-johansena"
                        className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-medium shadow-lg hover:shadow-xl"
                      >
                        <ArrowRight className="inline h-4 w-4 mr-2" />
                        Dowiedz się więcej
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* NEUROFLOW */}
              <AnimatedSection delay={500}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                      <div className="aspect-video w-full max-w-sm">
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
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Zap className="inline h-4 w-4 mr-1" />
                        NEUROFLOW
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-teal-800">NEUROFLOW</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Nowoczesna metoda neurostymulacji słuchowej łącząca muzykę z ruchem. Wspiera rozwój funkcji
                      poznawczych i motorycznych.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-teal-600">od 120 zł</span>
                      <Link
                        href="/trening-neuroflow"
                        className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-colors font-medium shadow-lg hover:shadow-xl"
                      >
                        <ArrowRight className="inline h-4 w-4 mr-2" />
                        Dowiedz się więcej
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Gotowy na pierwszą konsultację?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Zadzwoń lub napisz do nas, aby umówić się na bezpłatną konsultację. Wspólnie znajdziemy najlepsze
              rozwiązanie dla Twojego dziecka.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zadzwoń</h3>
                <p className="text-gray-600 mb-4">Porozmawiajmy o potrzebach Twojego dziecka</p>
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => (window.location.href = "tel:+48531509008")}
                >
                  531 509 008
                </Button>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Napisz</h3>
                <p className="text-gray-600 mb-4">Wypełnij formularz kontaktowy</p>
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Formularz
                </Button>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Odwiedź</h3>
                <p className="text-gray-600 mb-4">Umów się na wizytę w gabinecie</p>
                <Link href="/kontakt">
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
                    Lokalizacja
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-teal-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Godziny pracy</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p>
                    <strong>Poniedziałek - Piątek:</strong> 9:00 - 18:00
                  </p>
                  <p>
                    <strong>Sobota:</strong> 9:00 - 14:00
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Niedziela:</strong> Zamknięte
                  </p>
                  <p>
                    <strong>Konsultacje telefoniczne:</strong> Codziennie 8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <BlogSection />
      <FaqSection />

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading heading-fancy">
              Formularz kontaktowy
            </h2>
          </AnimatedSection>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
