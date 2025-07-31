"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import OptimizedImage from "@/components/optimized-image"
import { blogPosts } from "@/data/blog-posts"

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading heading-fancy">Artykuły i porady</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Praktyczne informacje i porady dla rodziców, oparte na wiedzy i doświadczeniu.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <Link href={`/blog/${post.id}`} className="h-full block">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group flex flex-col">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={post.imageUrl}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      objectFit="cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="flex-grow">
                    <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">{post.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 mt-auto">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <div className="w-full justify-between text-teal-600 group-hover:text-teal-700 flex items-center font-semibold">
                      Czytaj więcej
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-12">
            <Link href="/#blog">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent">
                Zobacz wszystkie artykuły
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
