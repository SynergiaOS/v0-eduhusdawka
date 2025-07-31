import { Suspense } from "react"
import ServicesPageClient from "./ServicesPageClient"
import ErrorBoundary from "@/components/error-boundary"
import { ServicesError } from "@/components/error-fallbacks"
import { PageLoadingSkeleton } from "@/components/loading-states"

export default function ServicesPage() {
  return (
    <ErrorBoundary fallback={ServicesError}>
      <Suspense fallback={<PageLoadingSkeleton />}>
        <ServicesPageClient />
      </Suspense>
    </ErrorBoundary>
  )
}
