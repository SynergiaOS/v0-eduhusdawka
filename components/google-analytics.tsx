"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { pageview, GA_MEASUREMENT_ID } from "@/lib/analytics"
import { useConsent } from "@/contexts/consent-context"

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  const { consents } = useConsent()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !GA_MEASUREMENT_ID || !consents.analytics) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
    pageview(url)
  }, [pathname, searchParams, mounted, consents.analytics])

  // Don't render the scripts if analytics consent is not given
  if (!GA_MEASUREMENT_ID || !consents.analytics) return null

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
