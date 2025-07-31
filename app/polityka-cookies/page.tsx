import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Cookies | EduHustawka",
  description: "Informacje o plikach cookies używanych na stronie EduHustawka oraz o tym, jak nimi zarządzać.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 font-heading">Polityka Cookies</h1>

              <div className="prose prose-teal max-w-none">
                <p>Ostatnia aktualizacja: 25 kwietnia 2024</p>

                <h2>1. Czym są pliki cookies?</h2>
                <p>
                  Pliki cookies (tzw. "ciasteczka") to małe pliki tekstowe, które są zapisywane na urządzeniu
                  użytkownika (komputerze, tablecie, smartfonie) podczas przeglądania stron internetowych. Zawierają one
                  różne informacje, które są niezbędne do prawidłowego funkcjonowania serwisu internetowego lub pomagają
                  dostosować treści do preferencji użytkownika.
                </p>

                <h2>2. Jakie rodzaje plików cookies używamy?</h2>
                <p>Na naszej stronie używamy następujących rodzajów plików cookies:</p>

                <h3>2.1. Niezbędne pliki cookies</h3>
                <p>
                  Są to pliki, które są konieczne do prawidłowego funkcjonowania strony internetowej. Bez nich strona
                  nie mogłaby działać poprawnie. Te pliki cookies nie przechowują żadnych danych osobowych i nie mogą
                  być wyłączone.
                </p>
                <p>Przykłady niezbędnych plików cookies:</p>
                <ul>
                  <li>Pliki cookies związane z sesją użytkownika</li>
                  <li>Pliki cookies związane z preferencjami wyświetlania (np. tryb jasny/ciemny)</li>
                  <li>Pliki cookies związane z bezpieczeństwem (np. wykrywanie prób włamania)</li>
                </ul>

                <h3>2.2. Analityczne pliki cookies</h3>
                <p>
                  Te pliki cookies pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają z naszej strony. Dzięki
                  nim możemy analizować ruch na stronie, popularność poszczególnych podstron oraz optymalizować
                  działanie serwisu. Wszystkie informacje zbierane przez te pliki są anonimowe i zagregowane.
                </p>
                <p>Przykłady analitycznych plików cookies:</p>
                <ul>
                  <li>Google Analytics - służy do analizy ruchu na stronie</li>
                  <li>Pliki cookies śledzące czas spędzony na stronie</li>
                  <li>Pliki cookies śledzące źródło ruchu (skąd użytkownik trafił na stronę)</li>
                </ul>

                <h3>2.3. Marketingowe pliki cookies</h3>
                <p>
                  Te pliki cookies są używane do śledzenia preferencji użytkowników w celu wyświetlania odpowiednich
                  reklam. Mogą być również używane przez naszych partnerów reklamowych do tworzenia profilu
                  zainteresowań użytkownika i wyświetlania odpowiednich reklam na innych stronach.
                </p>
                <p>Przykłady marketingowych plików cookies:</p>
                <ul>
                  <li>Pliki cookies używane do remarketingu</li>
                  <li>Pliki cookies używane do śledzenia konwersji</li>
                  <li>Pliki cookies partnerów reklamowych</li>
                </ul>

                <h2>3. Jak długo przechowywane są pliki cookies?</h2>
                <p>Pliki cookies mogą być przechowywane przez różne okresy, w zależności od ich rodzaju:</p>
                <ul>
                  <li>
                    <strong>Sesyjne pliki cookies</strong> - są przechowywane tylko podczas sesji przeglądania i są
                    usuwane po zamknięciu przeglądarki.
                  </li>
                  <li>
                    <strong>Stałe pliki cookies</strong> - pozostają na urządzeniu użytkownika przez określony czas lub
                    do momentu ich ręcznego usunięcia.
                  </li>
                </ul>

                <h2>4. Jak zarządzać plikami cookies?</h2>
                <p>
                  Większość przeglądarek internetowych domyślnie akceptuje pliki cookies. Możesz jednak zmienić
                  ustawienia swojej przeglądarki, aby odrzucać pliki cookies lub otrzymywać powiadomienia o ich
                  wysyłaniu.
                </p>
                <p>
                  Poniżej znajdują się linki do instrukcji dotyczących zarządzania plikami cookies w najpopularniejszych
                  przeglądarkach:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/pl/kb/ciasteczka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                </ul>
                <p>
                  Pamiętaj, że ograniczenie lub wyłączenie plików cookies może wpłynąć na funkcjonalność naszej strony.
                  Niektóre funkcje mogą być niedostępne lub działać nieprawidłowo.
                </p>

                <h2>5. Cookies stron trzecich</h2>
                <p>
                  Na naszej stronie mogą być również używane pliki cookies pochodzące od podmiotów trzecich, takich jak
                  Google Analytics. Te pliki cookies są używane do analizy ruchu na stronie i pomagają nam zrozumieć,
                  jak użytkownicy korzystają z naszej strony.
                </p>
                <p>
                  Google Analytics używa plików cookies do zbierania informacji o tym, jak użytkownicy korzystają z
                  naszej strony. Te informacje są używane do tworzenia raportów i pomagają nam ulepszać naszą stronę.
                  Pliki cookies zbierają informacje w sposób anonimowy, w tym liczbę odwiedzających stronę, skąd
                  odwiedzający przyszli na stronę i jakie podstrony odwiedzili.
                </p>
                <p>
                  Więcej informacji na temat plików cookies Google Analytics można znaleźć na{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    stronie polityki prywatności Google
                  </a>
                  .
                </p>

                <h2>6. Zmiany w polityce cookies</h2>
                <p>
                  Zastrzegamy sobie prawo do zmiany niniejszej polityki cookies w dowolnym momencie. Wszelkie zmiany
                  będą publikowane na tej stronie. Zachęcamy do regularnego sprawdzania tej strony, aby być na bieżąco z
                  naszą polityką cookies.
                </p>

                <h2>7. Kontakt</h2>
                <p>
                  Jeśli masz jakiekolwiek pytania dotyczące naszej polityki cookies, prosimy o kontakt:
                  j.swirydowicz.eduhustawka2024@gmail.com
                </p>

                <div className="mt-8 flex justify-center">
                  <Link href="/">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">Powrót do strony głównej</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
