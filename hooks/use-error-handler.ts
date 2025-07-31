"use client"

import { useState, useCallback } from "react"
import { useToast } from "@/hooks/use-toast"

interface UseErrorHandlerOptions {
  showToast?: boolean
  logError?: boolean
}

export function useErrorHandler(options: UseErrorHandlerOptions = {}) {
  const { showToast = true, logError = true } = options
  const { toast } = useToast()
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleError = useCallback(
    (error: Error | string, context?: string) => {
      const errorObj = typeof error === "string" ? new Error(error) : error

      if (logError) {
        console.error(`Error${context ? ` in ${context}` : ""}:`, errorObj)
      }

      setError(errorObj)

      if (showToast) {
        toast({
          title: "Wystąpił błąd",
          description: errorObj.message || "Coś poszło nie tak. Spróbuj ponownie.",
          variant: "destructive",
        })
      }
    },
    [showToast, logError, toast],
  )

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const executeAsync = useCallback(
    async (asyncFn: () => Promise<any>, context?: string): Promise<any | null> => {
      try {
        setIsLoading(true)
        setError(null)

        const result = await asyncFn()
        return result
      } catch (error) {
        handleError(error as Error, context)
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [handleError],
  )

  return {
    error,
    isLoading,
    handleError,
    clearError,
    executeAsync,
  }
}
