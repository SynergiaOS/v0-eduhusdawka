"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
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
                  "text-sm font-medium transition-colors hover:text-teal-600",
                  pathname === item.href ? "text-teal-600" : "text-gray-700",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => (window.location.href = "tel:+48531509008")}
            >
              <Phone className="h-4 w-4 mr-2" />
              Zadzwoń
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-teal-600 px-4 py-2",
                    pathname === item.href ? "text-teal-600 bg-teal-50" : "text-gray-700",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  onClick={() => {
                    window.location.href = "tel:+48531509008"
                    setIsOpen(false)
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Zadzwoń teraz
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
