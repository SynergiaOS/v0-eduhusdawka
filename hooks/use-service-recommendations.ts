"use client"

import { useUserPreferences } from "@/contexts/user-preferences-context"
import { availableServices } from "@/data/available-slots"

export function useServiceRecommendations(limit = 3) {
  const { preferences } = useUserPreferences()

  // Get recommended services based on user preferences and viewed services
  const getRecommendedServices = () => {
    // If no preferences are set, return random services
    if (!preferences.preferredCategories.length && !preferences.viewedServices.length) {
      return getRandomServices(limit)
    }

    // Filter out services that the user has already viewed
    const notViewedServices = availableServices.filter((service) => !preferences.viewedServices.includes(service.id))

    // If there are no services left that the user hasn't viewed, return random services
    if (notViewedServices.length === 0) {
      return getRandomServices(limit)
    }

    // Sort services by relevance to user preferences
    const sortedServices = notViewedServices.sort((a, b) => {
      // This is a simple relevance calculation that could be improved
      // For now, we just check if the service name or description contains any of the preferred categories
      const aRelevance = getServiceRelevance(a, preferences.preferredCategories)
      const bRelevance = getServiceRelevance(b, preferences.preferredCategories)

      return bRelevance - aRelevance
    })

    // Return the top N services
    return sortedServices.slice(0, limit)
  }

  // Helper function to get random services
  const getRandomServices = (count: number) => {
    const shuffled = [...availableServices].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  // Helper function to calculate service relevance based on preferred categories
  const getServiceRelevance = (service: any, categories: string[]) => {
    if (!categories || categories.length === 0) return 0

    let relevance = 0

    // Check if service name or description contains any of the preferred categories
    categories.forEach((category) => {
      const categoryLower = category.toLowerCase()
      if (service.name.toLowerCase().includes(categoryLower)) {
        relevance += 2
      }
      if (service.description.toLowerCase().includes(categoryLower)) {
        relevance += 1
      }
    })

    return relevance
  }

  return getRecommendedServices()
}
