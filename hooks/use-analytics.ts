"use client"

import { event } from "@/lib/analytics"

export function useAnalytics() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    event({ action, category, label, value })
  }

  const trackBookingStart = () => {
    trackEvent("booking_start", "Booking", "User started booking process")
  }

  const trackBookingComplete = (serviceType: string) => {
    trackEvent("booking_complete", "Booking", serviceType)
  }

  const trackContactFormSubmit = () => {
    trackEvent("contact_form_submit", "Contact", "Contact form submitted")
  }

  const trackServiceView = (serviceName: string) => {
    trackEvent("service_view", "Services", serviceName)
  }

  const trackBlogPostView = (postTitle: string) => {
    trackEvent("blog_post_view", "Blog", postTitle)
  }

  return {
    trackEvent,
    trackBookingStart,
    trackBookingComplete,
    trackContactFormSubmit,
    trackServiceView,
    trackBlogPostView,
  }
}
