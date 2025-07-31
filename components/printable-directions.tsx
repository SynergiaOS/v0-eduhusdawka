"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Printer, Download, MapPin, Car, Bus, Clock, Phone } from "lucide-react"

export default function PrintableDirections() {
  const [open, setOpen] = useState(false)

  // Dokładne współrzędne GPS dla Polna 17, Pomigacze
  const latitude = 53.1167
  const longitude = 23.0667

  return (
    <div className="mt-4">
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50"
      >
        <Printer className="h-4 w-4" />
        <span>Drukuj wskazówki dojazdu</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogDescription className="sr-only">
            Szczegółowe wskazówki dojazdu do gabinetu EDU HUSTAWKA, które można wydrukować lub pobrać jako PDF
          </DialogDescription>
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-teal-700">Wskazówki dojazdu</DialogTitle>
          </DialogHeader>

          <div className="printable-content space-y-6 my-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <img src="/images/logo-eduhustawka.png" alt="Logo EDU HUSTAWKA" className="h-16 w-auto" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-teal-700">EDU HUSTAWKA</h2>
                  <p className="text-gray-600">Joanna Świrydowicz</p>
                </div>
              </div>
              <div className="text-right">
                <p className="flex items-center justify-end text-gray-700">
                  <Phone className="h-4 w-4 mr-1" /> 531 509 008
                </p>
                <p className="text-gray-700">j.swirydowicz.eduhustawka2024@gmail.com</p>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-teal-800">Adres gabinetu</h3>
                  <p className="text-teal-700">
                    Polna 17
                    <br />
                    18-106 Pomigacze
                  </p>
                  <p className="text-teal-700 text-sm mt-1">
                    <strong>GPS:</strong> {latitude}, {longitude}
                  </p>
                  <p className="mt-2 text-sm text-teal-600">
                    <strong>Uwaga:</strong> Gabinet znajduje się w domu prywatnym. Wejście od strony ogrodu, z prawej
                    strony budynku. Na bramie znajduje się tabliczka "EDU HUSTAWKA".
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-teal-700 mb-3">Jak do nas dojechać:</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Car className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Z Białegostoku</h4>
                    <p className="text-gray-600">
                      Jadąc z Białegostoku, kieruj się na drogę krajową nr 19 w kierunku Lublina. Po około 10 km skręć w
                      prawo na drogę prowadzącą do miejscowości Pomigacze. Po wjeździe do miejscowości, skręć w trzecią
                      ulicę w lewo (ul. Polna). Nasz ośrodek znajduje się pod numerem 17 - biały dom z zielonym dachem i
                      drewnianym płotem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Bus className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Komunikacją publiczną</h4>
                    <p className="text-gray-600">
                      Z Białegostoku możesz dojechać autobusem linii 105, który kursuje co godzinę. Wysiądź na
                      przystanku "Pomigacze Centrum" (przy sklepie spożywczym), a następnie idź pieszo około 500 metrów
                      w kierunku ul. Polnej. Na rozwidleniu dróg skręć w lewo i idź prosto aż do numeru 17.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-teal-700 mb-3">Charakterystyczne punkty:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Biały dom z zielonym dachem i drewnianym płotem</li>
                <li>Tabliczka "EDU HUSTAWKA" na bramie</li>
                <li>Sklep spożywczy "U Marka" na rogu ul. Głównej i Polnej</li>
                <li>Przystanek autobusowy "Pomigacze Centrum" w odległości około 500m</li>
              </ul>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-800">Godziny otwarcia</h4>
                <ul className="text-gray-600">
                  <li>Poniedziałek - Piątek: 9:00 - 17:00</li>
                  <li>Sobota: 9:00 - 13:00</li>
                  <li>Niedziela: Zamknięte</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700">
                <strong>W razie problemów z dotarciem</strong>, prosimy o kontakt telefoniczny pod numerem{" "}
                <span className="font-medium">531 509 008</span>.
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-4 pt-4 border-t">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Zamknij
            </Button>
            <div className="space-x-2">
              <Button variant="outline" onClick={() => window.print()}>
                <Printer className="h-4 w-4 mr-2" />
                Drukuj
              </Button>
              <Button
                onClick={() => {
                  // W rzeczywistej implementacji tutaj byłby kod do generowania PDF
                  alert("Funkcja pobierania PDF będzie dostępna wkrótce.")
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Pobierz PDF
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
