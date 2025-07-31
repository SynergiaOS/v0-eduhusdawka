"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade" | "slide" | "scale" | "bounce"
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade",
  direction = "up",
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true)
            if (once) setHasAnimated(true)
          }, delay)
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold, once, hasAnimated])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade":
          return `${baseClasses} opacity-0`
        case "slide":
          switch (direction) {
            case "up":
              return `${baseClasses} opacity-0 translate-y-8`
            case "down":
              return `${baseClasses} opacity-0 -translate-y-8`
            case "left":
              return `${baseClasses} opacity-0 translate-x-8`
            case "right":
              return `${baseClasses} opacity-0 -translate-x-8`
            default:
              return `${baseClasses} opacity-0 translate-y-8`
          }
        case "scale":
          return `${baseClasses} opacity-0 scale-95`
        case "bounce":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    switch (animation) {
      case "fade":
        return `${baseClasses} opacity-100`
      case "slide":
        return `${baseClasses} opacity-100 translate-y-0 translate-x-0`
      case "scale":
        return `${baseClasses} opacity-100 scale-100`
      case "bounce":
        return `${baseClasses} opacity-100 scale-100 animate-bounce-once`
      default:
        return `${baseClasses} opacity-100`
    }
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}
