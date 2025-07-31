"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"

// Typy animacji dla różnych ścieżek
const getAnimationForPath = (path: string) => {
  // Strona główna
  if (path === "/") {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }
  }

  // Podstrony usług
  if (path.startsWith("/uslugi")) {
    return {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }
  }

  // Strona kontaktowa
  if (path.startsWith("/kontakt")) {
    return {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }
  }

  // Strona rezerwacji
  if (path.startsWith("/rezerwacja")) {
    return {
      initial: { opacity: 0, y: 50, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
      exit: { opacity: 0, scale: 0.95 },
    }
  }

  // Strona o mnie
  if (path.startsWith("/o-mnie")) {
    return {
      initial: { opacity: 0, rotateY: 10, scale: 0.95 },
      animate: { opacity: 1, rotateY: 0, scale: 1 },
      exit: { opacity: 0, rotateY: -10, scale: 0.95 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }
  }

  // Blog
  if (path.startsWith("/blog")) {
    return {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 30 },
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
      },
    }
  }

  // Domyślna animacja dla pozostałych stron
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isFirstRender, setIsFirstRender] = useState(true)

  // Pomijamy animację przy pierwszym renderowaniu
  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  // Przewijamy na górę strony przy zmianie ścieżki
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const animation = getAnimationForPath(pathname)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstRender ? false : animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={animation.transition}
        className="page-transition-container"
      >
        {children}

        {/* Overlay animacji - pojawia się podczas przejścia */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-50 bg-teal-500/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
