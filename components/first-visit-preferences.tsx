"use client"

import { useEffect, useState } from "react"
import { useUserPreferences } from "@/contexts/user-preferences-context"
import PreferencesCollector from "./preferences-collector"

export default function FirstVisitPreferences() {
  const { preferences, setFirstVisit } = useUserPreferences()
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    // Only show the preferences collector on first visit
    // and after a short delay to not interrupt the initial page load
    if (preferences.firstVisit) {
      const timer = setTimeout(() => {
        setShowPreferences(true)
        setFirstVisit(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [preferences.firstVisit, setFirstVisit])

  if (!showPreferences) return null

  return <PreferencesCollector onClose={() => setShowPreferences(false)} />
}
