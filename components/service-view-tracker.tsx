"use client"

import { useEffect } from "react"
import { useUserPreferences } from "@/contexts/user-preferences-context"

interface ServiceViewTrackerProps {
  serviceId: string
}

export default function ServiceViewTracker({ serviceId }: ServiceViewTrackerProps) {
  const { addViewedService } = useUserPreferences()

  useEffect(() => {
    if (serviceId) {
      addViewedService(serviceId)
    }
  }, [serviceId, addViewedService])

  // This component doesn't render anything
  return null
}
