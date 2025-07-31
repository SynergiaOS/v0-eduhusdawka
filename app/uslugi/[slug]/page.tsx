import { availableServices } from "@/data/available-slots"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceViewTracker from "@/components/service-view-tracker"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import type { Metadata } from "next"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = availableServices.find((s) => s.id === params.slug)

  if (!service) {
    return {
      title: "Usługa nie znaleziona | EduHustawka",
      description: "Przepraszamy, ale szukana usługa nie istnieje.",
    }
  }

  return {
    title: `${service.name} | Usługi EduHustawka`,
    description: `Dowiedz się więcej o usłudze ${service.name} w EduHustawka.`,
    openGraph: {
      title: service.name,
      description: `Dowiedz się więcej o usłudze ${service.name} w EduHustawka.`,
      type: "website",
      images: service.image
        ? [
            {
              url: service.image,
              width: 1200,
              height: 630,
              alt: service.name,
            },
          ]
        : [],
    },
  }
}

export async function generateStaticParams() {
  return availableServices.map((service) => ({
    slug: service.id,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = availableServices.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <ServiceViewTracker serviceId={params.slug} />
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-heading heading-fancy pb-4">
                {service.name}
              </h1>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{service.description}</p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden group">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4 text-teal-700">Informacje o usłudze</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-800">Cena:</h3>
                      <p className="text-gray-700">{service.price} zł</p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800">Czas trwania:</h3>
                      <p className="text-gray-700">{service.duration} minut</p>
                    </div>

                    <div className="pt-4">
                      <Link href="/rezerwacja">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Zarezerwuj wizytę</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">Szczegółowy opis</h2>
                <div className="prose prose-teal max-w-none">
                  <p className="mb-4">{service.description}</p>

                  {service.id === "diagnoza-korp" && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Na czym polega diagnoza KORP?</h3>
                      <p className="mb-4">
                        Diagnoza KORP (Karty Oceny Rozwoju Psychomotorycznego) to kompleksowe narzędzie diagnostyczne,
                        które pozwala na ocenę rozwoju dziecka w wielu obszarach. Badanie obejmuje ocenę motoryki dużej
                        i małej, koordynacji wzrokowo-ruchowej, percepcji wzrokowej i słuchowej, mowy oraz funkcji
                        poznawczych.
                      </p>
                      <p className="mb-4">
                        Podczas diagnozy dziecko wykonuje szereg zadań dostosowanych do jego wieku, które pozwalają
                        określić poziom rozwoju w poszczególnych sferach. Na podstawie wyników opracowywany jest
                        szczegółowy raport z zaleceniami do dalszej pracy.
                      </p>
                    </>
                  )}

                  {service.id === "trening-umiejetnosci-spolecznych" && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">
                        Jak przebiega Trening Umiejętności Społecznych?
                      </h3>
                      <p className="mb-4">
                        Trening Umiejętności Społecznych (TUS) to zajęcia grupowe, podczas których dzieci uczą się
                        rozpoznawania emocji, komunikacji, współpracy i rozwiązywania konfliktów. Zajęcia prowadzone są
                        w małych grupach (4-6 osób) i dostosowane do wieku oraz potrzeb uczestników.
                      </p>
                      <p className="mb-4">
                        Podczas zajęć wykorzystujemy różnorodne metody: gry i zabawy, odgrywanie ról, dyskusje,
                        ćwiczenia praktyczne. Dzieci uczą się przez doświadczenie, w bezpiecznym i wspierającym
                        środowisku.
                      </p>
                    </>
                  )}

                  {service.id === "terapia-reki" && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">
                        Dla kogo przeznaczona jest Terapia Ręki?
                      </h3>
                      <p className="mb-4">
                        Terapia Ręki jest szczególnie polecana dla dzieci z trudnościami w zakresie motoryki małej,
                        koordynacji wzrokowo-ruchowej, nieprawidłowym chwytem pisarskim, trudnościami w pisaniu,
                        rysowaniu i innych czynnościach manualnych.
                      </p>
                      <p className="mb-4">
                        Zajęcia obejmują ćwiczenia usprawniające pracę dłoni i palców, ćwiczenia grafomotoryczne, zabawy
                        manipulacyjne, ćwiczenia stabilizacji postawy i wiele innych, dostosowanych do indywidualnych
                        potrzeb dziecka.
                      </p>
                    </>
                  )}

                  {service.id === "terapia-pedagogiczna" && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">
                        Jak wygląda Terapia Pedagogiczna?
                      </h3>
                      <p className="mb-4">
                        Terapia Pedagogiczna to zajęcia indywidualne, które mają na celu wsparcie rozwoju poznawczego
                        dziecka i przezwyciężanie trudności w nauce. Zajęcia są dostosowane do indywidualnych potrzeb i
                        możliwości dziecka.
                      </p>
                      <p className="mb-4">
                        Podczas zajęć wykorzystujemy różnorodne metody i techniki pracy, które pomagają dziecku w
                        przezwyciężaniu trudności w czytaniu, pisaniu, liczeniu oraz rozwijają koncentrację uwagi,
                        pamięć i myślenie.
                      </p>
                    </>
                  )}

                  {service.id === "indywidualna-stymulacja-sluchu-johansena" && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">
                        Na czym polega Trening Słuchowy Johansena?
                      </h3>
                      <p className="mb-4">
                        Trening Słuchowy Johansena to metoda terapii słuchowej, która polega na słuchaniu specjalnie
                        zmodyfikowanej muzyki przez słuchawki. Muzyka ta jest indywidualnie dostosowana do potrzeb
                        każdego dziecka na podstawie przeprowadzonej diagnozy.
                      </p>
                      <p className="mb-4">
                        Metoda ta wspomaga rozwój mowy, poprawia koncentrację uwagi, wspiera rozwój umiejętności
                        językowych i komunikacyjnych. Jest szczególnie polecana dla dzieci z zaburzeniami przetwarzania
                        słuchowego, trudnościami w nauce czytania i pisania, zaburzeniami mowy.
                      </p>
                    </>
                  )}

                  {service.id === "trening-neuroflow" && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">Czym jest Trening Neuroflow?</h3>
                      <p className="mb-4">
                        Trening Neuroflow to innowacyjna metoda terapii dla dzieci z trudnościami w nauce, oparta na
                        najnowszych badaniach z zakresu neurobiologii i psychologii poznawczej. Metoda ta wykorzystuje
                        specjalnie zaprojektowane ćwiczenia, które stymulują rozwój określonych funkcji poznawczych.
                      </p>
                      <p className="mb-4">
                        Trening składa się z trzech etapów, każdy trwający 8-10 tygodni. W trakcie każdego etapu dziecko
                        wykonuje codziennie krótkie ćwiczenia, które są dostosowane do jego indywidualnych potrzeb i
                        możliwości.
                      </p>
                    </>
                  )}

                  {service.id === "wczesna-nauka-czytania" && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3 text-teal-700">
                        Jak przebiega Wczesna Nauka Czytania?
                      </h3>
                      <p className="mb-4">
                        Wczesna Nauka Czytania to zajęcia, które wspierają rozwój umiejętności czytania u dzieci w wieku
                        przedszkolnym i wczesnoszkolnym. Wykorzystujemy różnorodne metody dostosowane do indywidualnych
                        potrzeb i możliwości dziecka.
                      </p>
                      <p className="mb-4">
                        Podczas zajęć dzieci uczą się rozpoznawania liter, łączenia ich w sylaby i wyrazy, rozumienia
                        czytanego tekstu. Wszystko odbywa się w formie zabawy, z wykorzystaniem gier, zabawek
                        edukacyjnych, książeczek i innych pomocy dydaktycznych.
                      </p>
                    </>
                  )}

                  <p className="mt-6">
                    Każda sesja jest dostosowana do indywidualnych potrzeb dziecka. Nasz zespół specjalistów posiada
                    wieloletnie doświadczenie w pracy z dziećmi o różnych potrzebach rozwojowych.
                  </p>
                  <p>
                    W przypadku pytań lub wątpliwości, zachęcamy do kontaktu telefonicznego lub mailowego. Chętnie
                    odpowiemy na wszystkie pytania i pomożemy wybrać najlepszą formę wsparcia dla Twojego dziecka.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-teal-700 font-heading">Zarezerwuj wizytę</h2>
                <div className="flex flex-col items-center">
                  <p className="text-center mb-4">
                    Zarezerwuj wizytę już teraz i zapewnij swojemu dziecku profesjonalne wsparcie.
                  </p>
                  <Link href="/rezerwacja">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">Przejdź do rezerwacji</Button>
                  </Link>
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
