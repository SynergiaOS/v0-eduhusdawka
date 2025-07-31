"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ConsentType = "necessary" | "analytics" | "marketing"

interface ConsentContextType {
  consents: Record<ConsentType, boolean>
  setConsent: (type: ConsentType, value: boolean) => void
  setAllConsents: (value: boolean) => void
  hasInteracted: boolean
  setHasInteracted: (value: boolean) => void
  saveConsents: () => void
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined)

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consents, setConsents] = useState<Record<ConsentType, boolean>>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })
  const [hasInteracted, setHasInteracted] = useState(false)

  // Load saved consents from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedConsents = localStorage.getItem("cookie-consents")
      const savedInteraction = localStorage.getItem("cookie-interaction")

      if (savedConsents) {
        try {
          const parsedConsents = JSON.parse(savedConsents)
          setConsents((prev) => ({ ...prev, ...parsedConsents }))
        } catch (error) {
          console.error("Error parsing saved consents:", error)
        }
      }

      if (savedInteraction === "true") {
        setHasInteracted(true)
      }
    }
  }, [])

  const setConsent = (type: ConsentType, value: boolean) => {
    setConsents((prev) => ({ ...prev, [type]: value }))
  }

  const setAllConsents = (value: boolean) => {
    setConsents({
      necessary: true, // Always required
      analytics: value,
      marketing: value,
    })
  }

  const saveConsents = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consents", JSON.stringify(consents))
      localStorage.setItem("cookie-interaction", "true")
      setHasInteracted(true)
    }
  }

  return (
    <ConsentContext.Provider
      value={{
        consents,
        setConsent,
        setAllConsents,
        hasInteracted,
        setHasInteracted,
        saveConsents,
      }}
    >
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const context = useContext(ConsentContext)
  if (context === undefined) {
    throw new Error("useConsent must be used within a ConsentProvider")
  }
  return context
}
