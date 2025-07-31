"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import type { BlogPost } from "@/types/blog"

interface BlogCardProps {
  post: BlogPost
  onReadMore: (post: BlogPost) => void
}

export default function BlogCard({ post, onReadMore }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover-lift transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{post.title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="outline"
          className="text-teal-600 border-teal-600 hover:bg-teal-50 w-full"
          onClick={() => onReadMore(post)}
        >
          Czytaj więcej
        </Button>
      </CardFooter>
    </Card>
  )
}
