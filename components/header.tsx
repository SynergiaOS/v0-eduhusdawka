"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Strona główna", href: "/" },
  { name: "O mnie", href: "/o-mnie" },
  { name: "Usługi", href: "/uslugi" },
  { name: "Kontakt", href: "/kontakt" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Zamknij menu przy zmianie ścieżki
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Zablokuj scroll gdy menu jest otwarte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center transition-transform duration-300 hover:scale-105 z-60"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative h-14 w-56 md:h-16 md:w-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-hqMzJbqVhWWP5e3aHML7lAF59aXnTj.png"
                  alt="EDU HUSDAWKA THERAP CENTER"
                  fill
                  className="object-contain scale-125"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-teal-600 relative",
                    pathname === item.href ? "text-teal-600" : "text-gray-700",
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-200 hover:scale-105"
                onClick={() => (window.location.href = "tel:+48531509008")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Zadzwoń
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 z-60 relative transition-all duration-200 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <div className="relative w-6 h-6">
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                    isOpen ? "rotate-45 top-3" : "top-1",
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300 top-3",
                    isOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                    isOpen ? "-rotate-45 top-3" : "top-5",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Zamknij menu"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-6 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]",
                  pathname === item.href
                    ? "text-teal-600 bg-teal-50 border-l-4 border-teal-600"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50",
                )}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "fadeInUp 0.4s ease-out forwards" : "none",
                }}
              >
                {item.name}
                {pathname === item.href && <div className="ml-auto w-2 h-2 bg-teal-600 rounded-full" />}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
            <Button
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
              onClick={() => {
                window.location.href = "tel:+48531509008"
                setIsOpen(false)
              }}
            >
              <Phone className="h-5 w-5 mr-3" />
              Zadzwoń teraz: 531 509 008
            </Button>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-600">Poniedziałek - Piątek: 9:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
