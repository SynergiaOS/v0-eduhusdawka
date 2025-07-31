"use client"

import { MapPin, Navigation, Car, Bus, Home } from "lucide-react"

export default function DirectionsInfo() {
  // Dokładne współrzędne GPS dla Polna 17, Pomigacze
  const latitude = 53.1167
  const longitude = 23.0667

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full mb-4">
      <h3 className="text-xl font-semibold mb-4 text-teal-700 font-heading">Wskazówki dojazdu</h3>

      <div className="mb-4 p-3 bg-teal-50 rounded-lg border border-teal-100">
        <div className="flex items-start">
          <Home className="h-5 w-5 text-teal-600 mt-1 mr-2 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-teal-800">Gabinet w domu prywatnym</h4>
            <p className="text-sm text-teal-700">
              Gabinet terapeutyczny znajduje się w moim domu prywatnym. Wejście znajduje się od strony ogrodu, z prawej
              strony budynku. Na bramie znajduje się tabliczka "EDU HUSTAWKA".
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <Car className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-gray-800">Z Białegostoku</h4>
            <p className="text-gray-600 text-sm">
              Jadąc z Białegostoku, kieruj się na drogę krajową nr 19 w kierunku Lublina. Po około 10 km skręć w prawo
              na drogę prowadzącą do miejscowości Pomigacze. Po wjeździe do miejscowości, skręć w trzecią ulicę w lewo
              (ul. Polna). Nasz ośrodek znajduje się pod numerem 17 -
              <span className="font-medium">biały dom z zielonym dachem i drewnianym płotem</span>.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Bus className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-gray-800">Komunikacją publiczną</h4>
            <p className="text-gray-600 text-sm">
              Z Białegostoku możesz dojechać autobusem linii 105, który kursuje co godzinę. Wysiądź na przystanku
              "Pomigacze Centrum" (przy sklepie spożywczym), a następnie idź pieszo około 500 metrów w kierunku ul.
              Polnej. Na rozwidleniu dróg skręć w lewo i idź prosto aż do numeru 17.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-gray-800">Parking</h4>
            <p className="text-gray-600 text-sm">
              Na miejscu dostępny jest bezpłatny parking dla naszych klientów. Możesz zaparkować samochód bezpośrednio
              przed domem. Prosimy o nieparkowanie przed bramą sąsiadów.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-gray-800">Współrzędne GPS</h4>
            <p className="text-gray-600 text-sm">
              Szerokość: {latitude}, Długość: {longitude}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          W razie problemów z dotarciem, prosimy o kontakt telefoniczny pod numerem{" "}
          <span className="font-medium">531 509 008</span>.
        </p>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() =>
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, "_blank")
          }
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors"
        >
          <Navigation className="h-4 w-4 mr-2" />
          Nawiguj do gabinetu
        </button>
      </div>
    </div>
  )
}
