"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useConsent } from "@/contexts/consent-context"
import Link from "next/link"

export default function CookieBanner() {
  const { consents, setConsent, setAllConsents, hasInteracted, saveConsents } = useConsent()
  const [showDetails, setShowDetails] = useState(false)

  if (hasInteracted) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto p-4">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800">Polityka prywatności i plików cookie</h3>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-500 hover:text-gray-700"
              aria-label={showDetails ? "Ukryj szczegóły" : "Pokaż szczegóły"}
            >
              {showDetails ? <X className="h-5 w-5" /> : <span className="text-sm underline">Szczegóły</span>}
            </button>
          </div>

          <p className="text-sm text-gray-600">
            Nasza strona używa plików cookie, aby zapewnić najlepsze doświadczenia. Klikając "Akceptuj wszystkie",
            zgadzasz się na używanie wszystkich plików cookie. Możesz również dostosować swoje preferencje.
          </p>

          {showDetails && (
            <div className="bg-gray-50 p-4 rounded-md space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Niezbędne</h4>
                  <p className="text-xs text-gray-500">
                    Te pliki cookie są niezbędne do działania strony i nie mogą być wyłączone.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={consents.necessary}
                    disabled
                    className="opacity-50 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Analityczne</h4>
                  <p className="text-xs text-gray-500">
                    Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={consents.analytics}
                    onChange={(e) => setConsent("analytics", e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Marketingowe</h4>
                  <p className="text-xs text-gray-500">
                    Używane do śledzenia odwiedzających na różnych stronach w celu wyświetlania odpowiednich reklam.
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={consents.marketing}
                    onChange={(e) => setConsent("marketing", e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="text-xs text-gray-500 mt-2">
                <p>
                  Więcej informacji znajdziesz w naszej{" "}
                  <Link href="/polityka-prywatnosci" className="text-teal-600 hover:underline">
                    Polityce Prywatności
                  </Link>{" "}
                  oraz{" "}
                  <Link href="/polityka-cookies" className="text-teal-600 hover:underline">
                    Polityce Cookies
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setAllConsents(false)
                saveConsents()
              }}
              className="text-gray-700"
            >
              Tylko niezbędne
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setConsent("analytics", true)
                setConsent("marketing", false)
                saveConsents()
              }}
              className="text-teal-600 border-teal-600"
            >
              Analityczne
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setAllConsents(true)
                saveConsents()
              }}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Akceptuj wszystkie
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
