"use client"

import React from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent
          error={this.state.error}
          reset={() => this.setState({ hasError: false, error: undefined })}
        />
      )
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ups! Coś poszło nie tak</h2>
          <p className="text-gray-600 mb-4">Wystąpił nieoczekiwany błąd. Przepraszamy za niedogodności.</p>
          {error && (
            <details className="text-left bg-gray-100 p-4 rounded-lg mb-4">
              <summary className="cursor-pointer font-medium text-gray-700 mb-2">Szczegóły błędu</summary>
              <code className="text-sm text-red-600 break-all">{error.message}</code>
            </details>
          )}
        </div>
        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            <RefreshCw className="h-4 w-4 mr-2" />
            Spróbuj ponownie
          </Button>
          <Button variant="outline" onClick={() => window.location.reload()} className="w-full">
            Odśwież stronę
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary
