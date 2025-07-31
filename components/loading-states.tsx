"use client"

import { Loader2, Heart, Brain, Hand } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
  text?: string
}

export function LoadingSpinner({ size = "md", className, text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center p-8", className)}>
      <Loader2 className={cn("animate-spin text-teal-600", sizeClasses[size])} />
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  )
}

export function TherapyLoadingAnimation() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="flex space-x-4">
          <div className="animate-bounce" style={{ animationDelay: "0ms" }}>
            <Brain className="h-8 w-8 text-teal-500" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: "150ms" }}>
            <Hand className="h-8 w-8 text-teal-600" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: "300ms" }}>
            <Heart className="h-8 w-8 text-teal-700" />
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">Ładowanie...</p>
      </div>
    </div>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header skeleton */}
      <div className="h-20 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex space-x-4">
            <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Title skeleton */}
            <div className="text-center">
              <div className="h-10 w-3/4 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 w-1/2 bg-gray-200 rounded mx-auto animate-pulse"></div>
            </div>

            {/* Content skeleton */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-6 w-1/3 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-6 w-1/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer skeleton */}
      <div className="h-32 bg-gray-100">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export function FormLoadingState() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
        <div className="space-y-3">
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-24 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
