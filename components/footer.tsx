"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="font-bold text-lg">EduHustawka</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Profesjonalne wsparcie rozwoju dzieci z niepełnosprawnością intelektualną, spektrum autyzmu i trudnościami
              w nauce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/o-mnie" className="text-gray-400 hover:text-white text-sm transition-colors">
                  O mnie
                </Link>
              </li>
              <li>
                <Link href="/uslugi" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">Terapia pedagogiczna</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Wsparcie autyzmu</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Trening słuchowy</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Integracja sensoryczna</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400 text-sm">531 509 008</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400 text-sm">j.swirydowicz.eduhustawka2024@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400 text-sm">Polna 17, Pomigacze</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400 text-sm">Pon-Pt: 8:00-16:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 EduHustawka. Wszystkie prawa zastrzeżone.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/polityka-prywatnosci" className="text-gray-400 hover:text-white text-sm transition-colors">
                Polityka prywatności
              </Link>
              <Link href="/polityka-cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Polityka cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
