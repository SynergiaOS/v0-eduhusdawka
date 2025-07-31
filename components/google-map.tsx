"use client"

import { useState, useRef } from "react"
import { MapPin, Navigation, X, Info, Printer } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog"

interface LocationInfo {
  hours?: string
  phone?: string
  description?: string
  isHomeOffice?: boolean
}

interface GoogleMapProps {
  address?: string
  height?: string
  zoom?: number
  showNavigationButton?: boolean
  className?: string
  locationName?: string
  locationInfo?: LocationInfo
}

export default function GoogleMap({
  address = "Polna 17, 18-106 Pomigacze, Polska",
  height = "300px",
  zoom = 15,
  showNavigationButton = true,
  className = "",
  locationName = "EDU HUSTAWKA - Joanna Świrydowicz",
  locationInfo = {
    hours: "Pon-Pt: 9:00-17:00, Sob: 9:00-13:00",
    phone: "531 509 008",
    description: "Profesjonalna terapia i edukacja specjalna dla dzieci w każdym wieku.",
    isHomeOffice: true,
  },
}: GoogleMapProps) {
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  // Dokładne współrzędne GPS dla Polna 17, Pomigacze
  const latitude = 53.1167
  const longitude = 23.0667

  // Enkoduj adres dla URL - używamy dokładnych współrzędnych GPS
  const encodedAddress = encodeURIComponent(address)

  // URL do nawigacji Google Maps - używamy współrzędnych zamiast adresu dla większej dokładności
  const navigationUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`

  const handleNavigate = () => {
    if (typeof window !== "undefined") {
      window.open(navigationUrl, "_blank")
    }
  }

  const handleShowAddress = () => {
    if (typeof window !== "undefined") {
      // Używamy współrzędnych zamiast adresu dla większej dokładności
      window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank")
    }
  }

  const toggleInfoWindow = () => {
    setShowInfoWindow(!showInfoWindow)
  }

  const toggleFullscreen = () => {
    setIsFullscreenOpen(!isFullscreenOpen)
  }

  // Używamy OpenStreetMap z dokładnymi współrzędnymi
  const osmMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`

  return (
    <div className={cn("relative rounded-lg overflow-hidden shadow-md", className)}>
      <div
        ref={mapRef}
        className="w-full bg-gray-200 relative"
        style={{
          height,
        }}
      >
        {/* Używamy iframe z OpenStreetMap zamiast placeholder */}
        <iframe
          src={osmMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mapa lokalizacji gabinetu EDU HUSTAWKA"
        ></iframe>

        {/* Nakładka z adresem */}
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-sm font-medium">Polna 17, 18-106 Pomigacze</p>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button
          onClick={toggleInfoWindow}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Pokaż informacje"
        >
          <Info className="h-5 w-5 text-teal-600" />
        </button>
        {showNavigationButton && (
          <>
            <button
              onClick={handleNavigate}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Nawiguj do lokalizacji"
            >
              <Navigation className="h-5 w-5 text-teal-600" />
            </button>
            <button
              onClick={handleShowAddress}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Pokaż adres"
            >
              <MapPin className="h-5 w-5 text-teal-600" />
            </button>
          </>
        )}
      </div>

      {/* Info Window */}
      {showInfoWindow && (
        <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-teal-700">{locationName}</h4>
            <button onClick={toggleInfoWindow} className="text-gray-500 hover:text-gray-700" aria-label="Zamknij">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-medium text-gray-800">
              Polna 17
              <br />
              18-106 Pomigacze
            </p>
            <p className="text-xs text-gray-500">
              GPS: {latitude}, {longitude}
            </p>
            {locationInfo?.isHomeOffice && (
              <p className="bg-teal-50 p-2 rounded text-teal-700 text-xs font-medium border-l-2 border-teal-500">
                Gabinet znajduje się w domu prywatnym. Prosimy o dyskrecję i punktualność.
              </p>
            )}
            {locationInfo?.hours && <p>Godziny otwarcia: {locationInfo.hours}</p>}
            {locationInfo?.phone && <p>Telefon: {locationInfo.phone}</p>}
            {locationInfo?.description && <p>{locationInfo.description}</p>}
            <div className="flex space-x-2 pt-2">
              <button
                onClick={handleNavigate}
                className="bg-teal-600 hover:bg-teal-700 text-white text-xs py-1 px-3 rounded flex items-center"
              >
                <Navigation className="h-3 w-3 mr-1" /> Nawiguj
              </button>
              <button
                onClick={handleShowAddress}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs py-1 px-3 rounded flex items-center"
              >
                <MapPin className="h-3 w-3 mr-1" /> Pokaż adres
              </button>
              <button
                onClick={() => window.print()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs py-1 px-3 rounded flex items-center"
              >
                <Printer className="h-3 w-3 mr-1" /> Drukuj wskazówki
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal pełnoekranowy z poprawioną dostępnością */}
      <Dialog open={isFullscreenOpen} onOpenChange={setIsFullscreenOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] max-h-[90vh] h-[90vh] p-0 overflow-hidden">
          <DialogDescription className="sr-only">
            Pełnoekranowa mapa lokalizacji gabinetu EDU HUSTAWKA
          </DialogDescription>
          <div className="relative w-full h-full">
            <iframe
              src={osmMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa lokalizacji gabinetu EDU HUSTAWKA"
            ></iframe>
            <button
              onClick={() => setIsFullscreenOpen(false)}
              className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-700 shadow-md p-3 h-auto rounded-full"
              aria-label="Zamknij pełny ekran"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
