import { Suspense } from "react"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"
import Image from "next/image"
import { Calendar, User, Tag } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/loading-spinner"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    return {
      title: "Artykuł nie znaleziony | EduHustawka",
      description: "Przepraszamy, ale szukany artykuł nie istnieje.",
    }
  }

  return {
    title: `${post.title} | Blog EduHustawka`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date.split(".").reverse().join("-"),
      authors: [post.author],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Suspense fallback={<LoadingSpinner />}>
            <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4 font-heading">{post.title}</h1>

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

                <div
                  className="prose prose-teal max-w-none blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-8 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>

                  <Link href="/#blog">
                    <Button variant="outline" className="mt-4">
                      Powrót do bloga
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          </Suspense>
        </div>
      </main>

      <Footer />

      {/* Strukturyzowane dane Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.imageUrl,
            datePublished: post.date.split(".").reverse().join("-"),
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "EduHustawka - Joanna Świrydowicz",
              logo: {
                "@type": "ImageObject",
                url: "https://eduhustawka.pl/images/logo.png",
              },
            },
            description: post.excerpt,
          }),
        }}
      />
    </div>
  )
}
