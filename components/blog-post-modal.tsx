"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, X } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import Image from "next/image"

interface BlogPostModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}

export default function BlogPostModal({ post, isOpen, onClose }: BlogPostModalProps) {
  if (!post) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="mb-4">
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-bold text-teal-800 font-heading">{post.title}</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 rounded-full" onClick={onClose} aria-label="Zamknij">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="relative h-64 w-full mb-6">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
        </div>

        <div className="prose prose-teal max-w-none blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <div key={index} className="flex items-center bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
