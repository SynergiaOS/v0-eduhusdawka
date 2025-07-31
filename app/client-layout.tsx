"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { UserPreferencesProvider } from "@/contexts/user-preferences-context"
import { ConsentProvider } from "@/contexts/consent-context"
import CookieBanner from "@/components/cookie-banner"
import GoogleAnalytics from "@/components/google-analytics"
import { Toaster } from "@/components/ui/toast"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"
import PageTransition from "@/components/page-transition"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Dodajemy klasę do body w zależności od ścieżki
  useEffect(() => {
    document.body.classList.toggle("is-home-page", pathname === "/")
    document.body.classList.toggle("is-services-page", pathname.startsWith("/uslugi"))
    document.body.classList.toggle("is-contact-page", pathname === "/kontakt")
    document.body.classList.toggle("is-booking-page", pathname === "/rezerwacja")
    document.body.classList.toggle("is-about-page", pathname === "/o-mnie")
    document.body.classList.toggle("is-blog-page", pathname.startsWith("/blog"))

    return () => {
      document.body.classList.remove(
        "is-home-page",
        "is-services-page",
        "is-contact-page",
        "is-booking-page",
        "is-about-page",
        "is-blog-page",
      )
    }
  }, [pathname])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <UserPreferencesProvider>
        <ConsentProvider>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Ładowanie...</div>}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
          <Toaster />
          <CookieBanner />
          <GoogleAnalytics />
        </ConsentProvider>
      </UserPreferencesProvider>
    </ThemeProvider>
  )
}
