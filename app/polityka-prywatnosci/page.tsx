import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka Prywatności | EduHustawka",
  description: "Informacje o tym, jak przetwarzamy Twoje dane osobowe i używamy plików cookie.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 font-heading">Polityka Prywatności</h1>

              <div className="prose prose-teal max-w-none">
                <p>Ostatnia aktualizacja: 25 kwietnia 2024</p>

                <h2>1. Wprowadzenie</h2>
                <p>
                  Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób EduHustawka - Joanna Świrydowicz zbiera,
                  wykorzystuje i chroni informacje, które są nam przekazywane podczas korzystania z naszej strony
                  internetowej.
                </p>

                <h2>2. Jakie dane zbieramy</h2>
                <p>Możemy zbierać następujące rodzaje informacji:</p>
                <ul>
                  <li>
                    <strong>Dane osobowe</strong>: imię i nazwisko, adres e-mail, numer telefonu, które podajesz
                    wypełniając formularze na naszej stronie.
                  </li>
                  <li>
                    <strong>Dane o użytkowaniu</strong>: informacje o tym, jak korzystasz z naszej strony, zbierane za
                    pomocą plików cookie i podobnych technologii.
                  </li>
                </ul>

                <h2>3. Jak wykorzystujemy Twoje dane</h2>
                <p>Wykorzystujemy zebrane informacje w następujących celach:</p>
                <ul>
                  <li>Aby odpowiedzieć na Twoje zapytania przesłane przez formularz kontaktowy.</li>
                  <li>Aby umożliwić rezerwację wizyt online.</li>
                  <li>Aby analizować ruch na stronie i poprawiać jej funkcjonowanie.</li>
                  <li>Aby dostosować treści do Twoich potrzeb.</li>
                </ul>

                <h2>4. Pliki cookie</h2>
                <p>
                  Nasza strona wykorzystuje pliki cookie, które są małymi plikami tekstowymi przechowywanymi na Twoim
                  urządzeniu. Używamy następujących rodzajów plików cookie:
                </p>
                <ul>
                  <li>
                    <strong>Niezbędne pliki cookie</strong>: Są wymagane do prawidłowego działania strony i nie mogą być
                    wyłączone.
                  </li>
                  <li>
                    <strong>Analityczne pliki cookie</strong>: Pomagają nam zrozumieć, jak odwiedzający korzystają z
                    naszej strony. Używamy Google Analytics do zbierania anonimowych informacji o ruchu na stronie.
                  </li>
                  <li>
                    <strong>Marketingowe pliki cookie</strong>: Używane do śledzenia odwiedzających na różnych stronach
                    w celu wyświetlania odpowiednich reklam.
                  </li>
                </ul>

                <h2>5. Twoje prawa</h2>
                <p>Zgodnie z RODO, masz prawo do:</p>
                <ul>
                  <li>Dostępu do swoich danych osobowych.</li>
                  <li>Sprostowania swoich danych osobowych.</li>
                  <li>Usunięcia swoich danych osobowych.</li>
                  <li>Ograniczenia przetwarzania swoich danych osobowych.</li>
                  <li>Przenoszenia swoich danych osobowych.</li>
                  <li>Sprzeciwu wobec przetwarzania swoich danych osobowych.</li>
                </ul>

                <h2>6. Kontakt</h2>
                <p>
                  Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki Prywatności, prosimy o kontakt:
                  j.swirydowicz.eduhustawka2024@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
