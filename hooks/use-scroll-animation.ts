"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"

interface UseScrollAnimationProps {
  threshold?: number
  direction?: AnimationDirection
  delay?: number
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  direction = "up",
  delay = 0,
  once = true,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [threshold, once])

  const getAnimationClass = () => {
    if (!isInView) return "opacity-0"

    const directionClasses = {
      up: "translate-y-8",
      down: "translate-y-[-8]",
      left: "translate-x-8",
      right: "translate-x-[-8]",
      none: "",
    }

    const baseClass = "transition-all duration-700 ease-out"
    const delayClass = delay ? `delay-${delay}` : ""
    const transformClass = direction !== "none" ? directionClasses[direction] : ""

    return `${baseClass} ${delayClass} ${isInView ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${transformClass}`}`
  }

  return { ref, isInView, animationClass: getAnimationClass() }
}
