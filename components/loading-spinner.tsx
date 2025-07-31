"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { MapPin } from "lucide-react"

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600">Ładowanie...</p>
      </div>
    </div>
  )
}

interface MapLoadingProps {
  className?: string
}

export function MapLoading({ className }: MapLoadingProps) {
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("flex flex-col items-center justify-center w-full h-full", className)}>
      <MapPin className="h-12 w-12 text-teal-300 mb-4 animate-bounce" />
      <p className="text-gray-500 font-medium">Ładowanie mapy{dots}</p>
      <div className="mt-4 flex space-x-2">
        <div className="w-3 h-3 bg-teal-200 rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></div>
        <div className="w-3 h-3 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
        <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: "600ms" }}></div>
      </div>
    </div>
  )
}
