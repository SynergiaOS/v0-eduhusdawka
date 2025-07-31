"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedPageSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: "fade" | "slide" | "scale" | "rotate" | "custom"
  customAnimation?: any
}

export default function AnimatedPageSection({
  children,
  delay = 0,
  className = "",
  animation = "fade",
  customAnimation,
}: AnimatedPageSectionProps) {
  // Predefiniowane animacje
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay, duration: 0.5 },
    },
    slide: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    rotate: {
      initial: { opacity: 0, rotateX: 10, y: 20 },
      animate: { opacity: 1, rotateX: 0, y: 0 },
      transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const animationProps = customAnimation || animations[animation]

  return (
    <motion.div
      className={className}
      initial={animationProps.initial}
      whileInView={animationProps.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={animationProps.transition}
    >
      {children}
    </motion.div>
  )
}
