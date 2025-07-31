"use client"

import { useServiceRecommendations } from "@/hooks/use-service-recommendations"

export default function ServiceRecommendationSection() {
  const recommendedServices = useServiceRecommendations(3)

  return null // Usunięto całą zawartość sekcji rekomendacji
}
