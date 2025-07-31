"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

const navigation = [
  { name: "Strona główna", href: "/" },
  { name: "O mnie", href: "/o-mnie" },
  {
    name: "Usługi",
    href: "/uslugi",
    children: [
      { name: "Wszystkie usługi", href: "/uslugi" },
      { name: "Diagnoza KORP", href: "/diagnoza-korp" },
      { name: "Terapia ręki", href: "/terapia-reki" },
      { name: "Trening Umiejętności Społecznych", href: "/trening-umiejetnosci-spolecznych" },
      { name: "Terapia pedagogiczna", href: "/terapia-pedagogiczna" },
      { name: "Trening słuchowy Johansena", href: "/trening-sluchowy-johansena" },
      { name: "Trening Neuroflow", href: "/trening-neuroflow" },
      { name: "Wczesna nauka czytania", href: "/wczesna-nauka-czytania" },
    ],
  },
  { name: "Kontakt", href: "/kontakt" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">EduHuśtawka</span>
            <OptimizedImage
              src="/images/logo-eduhustawka.png"
              alt="EduHuśtawka Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Otwórz menu główne</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors ${
                      isActive(item.href) ? "text-teal-600" : "text-gray-900 hover:text-teal-600"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {item.children.map((child) => (
                            <div
                              key={child.name}
                              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                            >
                              <div className="flex-auto">
                                <Link
                                  href={child.href}
                                  className={`block font-semibold transition-colors ${
                                    isActive(child.href) ? "text-teal-600" : "text-gray-900 group-hover:text-teal-600"
                                  }`}
                                >
                                  {child.name}
                                  <span className="absolute inset-0" />
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors ${
                    isActive(item.href) ? "text-teal-600" : "text-gray-900 hover:text-teal-600"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
            onClick={() => (window.location.href = "tel:+48531509008")}
          >
            <Phone className="h-4 w-4 mr-2" />
            531 509 008
          </Button>
          <Button
            size="sm"
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="h-4 w-4 mr-2" />
            Kontakt
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">EduHuśtawka</span>
                <OptimizedImage
                  src="/images/logo-eduhustawka.png"
                  alt="EduHuśtawka Logo"
                  width={180}
                  height={60}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Zamknij menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <button
                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setServicesOpen(!servicesOpen)}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-5 w-5 flex-none transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                              aria-hidden="true"
                            />
                          </button>
                          {servicesOpen && (
                            <div className="mt-2 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 transition-colors ${
                                    isActive(child.href) ? "text-teal-600 bg-teal-50" : "text-gray-900 hover:bg-gray-50"
                                  }`}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                            isActive(item.href) ? "text-teal-600 bg-teal-50" : "text-gray-900 hover:bg-gray-50"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <Button
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                    onClick={() => {
                      window.location.href = "tel:+48531509008"
                      setMobileMenuOpen(false)
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Zadzwoń: 531 509 008
                  </Button>
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => {
                      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
                      setMobileMenuOpen(false)
                    }}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Formularz kontaktowy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
