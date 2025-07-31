"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  content: string
  author: string
  relation: string
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 8000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-teal-100">
        <Quote size={120} strokeWidth={0.5} className="opacity-50" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="relative h-[280px] md:h-[220px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-full transition-all duration-500 ease-in-out",
                index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none",
                isAnimating && index === currentIndex && direction === "right" ? "translate-x-0" : "",
                isAnimating && index === currentIndex && direction === "left" ? "translate-x-0" : "",
                isAnimating &&
                  ((direction === "right" &&
                    index === (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)) ||
                    (direction === "left" &&
                      index === (currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)))
                  ? "opacity-0"
                  : "",
              )}
            >
              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-gray-700 italic mb-6">{testimonial.content}</p>
                <footer>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index > currentIndex) {
                  setDirection("right")
                } else if (index < currentIndex) {
                  setDirection("left")
                }
                setIsAnimating(true)
                setCurrentIndex(index)
              }}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-teal-600 w-6" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
