"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

const services = [
  { name: "Wszystkie usługi", href: "/uslugi" },
  { name: "Diagnoza KORP", href: "/diagnoza-korp" },
  { name: "Terapia ręki", href: "/terapia-reki" },
  { name: "Trening Umiejętności Społecznych", href: "/trening-umiejetnosci-spolecznych" },
  { name: "Terapia pedagogiczna", href: "/terapia-pedagogiczna" },
  { name: "Trening słuchowy Johansena", href: "/trening-sluchowy-johansena" },
  { name: "Trening Neuroflow", href: "/trening-neuroflow" },
  { name: "Wczesna nauka czytania", href: "/wczesna-nauka-czytania" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <OptimizedImage
              src="/images/logo-eduhustawka.png"
              alt="EduHustawka Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900">EduHustawka</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Strona główna
            </Link>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Usługi</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/o-mnie" className="text-gray-700 hover:text-teal-600 transition-colors">
              O mnie
            </Link>

            <Link href="/kontakt" className="text-gray-700 hover:text-teal-600 transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "tel:+48531509008")}
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              <Phone className="h-4 w-4 mr-2" />
              531 509 008
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Strona główna
              </Link>

              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Usługi</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block text-sm text-gray-600 hover:text-teal-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/o-mnie"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                O mnie
              </Link>

              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.location.href = "tel:+48531509008"
                  setIsMenuOpen(false)
                }}
                className="border-teal-600 text-teal-600 hover:bg-teal-50 w-fit"
              >
                <Phone className="h-4 w-4 mr-2" />
                531 509 008
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
