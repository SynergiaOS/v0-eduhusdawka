"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    { name: "Diagnoza KORP", href: "/diagnoza-korp" },
    { name: "Terapia ręki", href: "/terapia-reki" },
    { name: "Trening Umiejętności Społecznych", href: "/trening-umiejetnosci-spolecznych" },
    { name: "Terapia pedagogiczna", href: "/terapia-pedagogiczna" },
    { name: "IAS Johansena", href: "/trening-sluchowy-johansena" },
    { name: "NEUROFLOW", href: "/trening-neuroflow" },
    { name: "Wczesna nauka czytania", href: "/wczesna-nauka-czytania" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <OptimizedImage
                src="/images/logo-eduhustawka.png"
                alt="EduHustawka Logo"
                width={50}
                height={50}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
                EduHustawka
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Pedagog specjalny</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
            >
              Strona główna
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
                Usługi
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/o-mnie"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
            >
              O mnie
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>

            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Phone Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Phone Button */}
            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden sm:flex"
              onClick={() => (window.location.href = "tel:+48531509008")}
            >
              <Phone className="h-4 w-4 mr-2" />
              531 509 008
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-gray-100">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Strona główna
            </Link>

            {/* Mobile Services */}
            <div className="px-4">
              <button
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-teal-600 transition-colors duration-200"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Usługi
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`ml-4 space-y-1 transition-all duration-200 ${isServicesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/o-mnie"
              className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              O mnie
            </Link>

            <Link
              href="/kontakt"
              className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>

            {/* Mobile Phone Button */}
            <div className="px-4 pt-4 border-t border-gray-100">
              <Button
                size="sm"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg"
                onClick={() => {
                  window.location.href = "tel:+48531509008"
                  setIsMenuOpen(false)
                }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Zadzwoń: 531 509 008
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
