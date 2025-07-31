"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    childAge: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      childAge: "",
      message: "",
    })
    setIsSubmitting(false)

    alert("Dziękuję za wiadomość! Skontaktuję się z Tobą w ciągu 24 godzin.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <AnimatedSection animation="slide" direction="left">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Informacje kontaktowe</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefon</h4>
                  <p className="text-gray-600">531 509 008</p>
                  <p className="text-sm text-gray-500">Pon-Pt: 8:00-16:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 break-all">j.swirydowicz.eduhustawka2024@gmail.com</p>
                  <p className="text-sm text-gray-500">Odpowiem w ciągu 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Adres</h4>
                  <p className="text-gray-600">Polna 17</p>
                  <p className="text-gray-600">Pomigacze</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Godziny pracy</h4>
                  <p className="text-gray-600">Poniedziałek - Piątek</p>
                  <p className="text-gray-600">8:00 - 16:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-teal-50 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Szybki kontakt</h4>
              <p className="text-teal-700 text-sm mb-4">Potrzebujesz pilnej konsultacji? Zadzwoń bezpośrednio!</p>
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => (window.location.href = "tel:+48531509008")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń teraz
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection animation="slide" direction="right" delay={200}>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Napisz do mnie</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Imię i nazwisko *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="service">Interesująca usługa</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Wybierz usługę" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="terapia-pedagogiczna">Terapia pedagogiczna</SelectItem>
                      <SelectItem value="wsparcie-autyzm">Wsparcie dzieci ze spektrum autyzmu</SelectItem>
                      <SelectItem value="trening-sluchowy">Trening słuchowy Johansena</SelectItem>
                      <SelectItem value="integracja-sensoryczna">Terapia integracji sensorycznej</SelectItem>
                      <SelectItem value="wsparcie-emocjonalne">Wsparcie emocjonalne</SelectItem>
                      <SelectItem value="wczesne-wspomaganie">Wczesne wspomaganie rozwoju</SelectItem>
                      <SelectItem value="konsultacje">Konsultacje dla rodziców</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="childAge">Wiek dziecka</Label>
                  <Input
                    id="childAge"
                    type="text"
                    value={formData.childAge}
                    onChange={(e) => handleChange("childAge", e.target.value)}
                    placeholder="np. 5 lat"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Wiadomość *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={5}
                  placeholder="Opisz potrzeby swojego dziecka i pytania, które chciałbyś/chciałabyś zadać..."
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Wysyłanie...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Wyślij wiadomość
                  </>
                )}
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
