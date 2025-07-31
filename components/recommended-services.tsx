"use client"

import { useServiceRecommendations } from "@/hooks/use-service-recommendations"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import PreferencesCollector from "./preferences-collector"

interface RecommendedServicesProps {
  limit?: number
  showPreferencesButton?: boolean
}

export default function RecommendedServices({ limit = 3, showPreferencesButton = true }: RecommendedServicesProps) {
  const recommendedServices = useServiceRecommendations(limit)
  const [showPreferences, setShowPreferences] = useState(false)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 relative">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-teal-600 font-medium">{service.price} zł</span>
                <Link href={`/uslugi/${service.id}`}>
                  <Button variant="outline" size="sm">
                    Więcej informacji
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPreferencesButton && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowPreferences(true)}
            className="text-teal-600 border-teal-600 hover:bg-teal-50"
          >
            Dostosuj rekomendacje
          </Button>
        </div>
      )}

      {showPreferences && <PreferencesCollector onClose={() => setShowPreferences(false)} />}
    </div>
  )
}
