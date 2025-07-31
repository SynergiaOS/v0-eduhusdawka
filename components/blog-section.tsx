"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"

const blogPosts = [
  {
    id: 1,
    title: "Jak rozpoznać spektrum autyzmu u dziecka?",
    excerpt:
      "Wczesne rozpoznanie objawów spektrum autyzmu jest kluczowe dla skutecznej terapii. Poznaj najważniejsze sygnały ostrzegawcze.",
    date: "2024-01-15",
    readTime: "5 min",
    image: "/colorful-learning-tools.png",
    category: "Autyzm",
  },
  {
    id: 2,
    title: "Integracja sensoryczna - co to takiego?",
    excerpt:
      "Dowiedz się, czym jest integracja sensoryczna i jak zaburzenia w tym obszarze wpływają na codzienne funkcjonowanie dziecka.",
    date: "2024-01-10",
    readTime: "7 min",
    image: "/focused-mind-training.png",
    category: "Terapia",
  },
  {
    id: 3,
    title: "Trening słuchowy Johansena - korzyści",
    excerpt:
      "Poznaj zalety treningu słuchowego IAS i dowiedz się, jak może pomóc Twojemu dziecku w rozwoju mowy i koncentracji.",
    date: "2024-01-05",
    readTime: "6 min",
    image: "/johansen-sound-training.png",
    category: "Słuch",
  },
]

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading heading-fancy">Artykuły i porady</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Praktyczne informacje i porady dla rodziców dzieci ze specjalnymi potrzebami
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    objectFit="cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString("pl-PL")}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0"
                  >
                    Czytaj więcej
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
              Zobacz wszystkie artykuły
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
