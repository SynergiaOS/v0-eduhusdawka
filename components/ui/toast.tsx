"use client"

import { useEffect, useState } from "react"
import { X, AlertCircle, CheckCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  id: string
  title: string
  description?: string
  variant?: "default" | "destructive" | "success"
  onDismiss: (id: string) => void
}

export function Toast({ id, title, description, variant = "default", onDismiss }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(() => onDismiss(id), 300) // Wait for animation to complete
  }

  const Icon = variant === "destructive" ? AlertCircle : variant === "success" ? CheckCircle : Info

  return (
    <div
      className={cn(
        "fixed right-4 max-w-sm w-full bg-white rounded-lg shadow-lg border border-gray-200 pointer-events-auto overflow-hidden transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        variant === "destructive" && "border-red-600",
        variant === "success" && "border-green-600",
      )}
      style={{ top: `calc(1rem + ${id.charCodeAt(0) % 5}rem)` }}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon
              className={cn(
                "h-5 w-5",
                variant === "destructive" && "text-red-600",
                variant === "success" && "text-green-600",
                variant === "default" && "text-teal-600",
              )}
            />
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              onClick={handleDismiss}
            >
              <span className="sr-only">Zamknij</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Toaster({ toasts = [], dismiss }: { toasts?: any[]; dismiss?: (id: string) => void }) {
  if (!toasts || toasts.length === 0) return null
  if (!dismiss) return null

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-4 pointer-events-none">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          onDismiss={dismiss}
        />
      ))}
    </div>
  )
}
