import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://eduhustawka.pl"
  const lastModified = new Date()

  // Główne strony
  const mainRoutes = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/rezerwacja`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/polityka-cookies`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mapa-strony`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/404`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.1,
    },
  ]

  // Generowanie URL-i dla wpisów blogowych
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date.split(".").reverse().join("-")),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Dane usług z cennika
  const services = [
    { id: "diagnoza-korp", name: "Diagnoza KORP" },
    { id: "trening-umiejetnosci-spolecznych", name: "Trening Umiejętności Społecznych (TUS)" },
    { id: "terapia-reki", name: "Terapia Ręki" },
    { id: "terapia-pedagogiczna", name: "Terapia Pedagogiczna" },
    { id: "indywidualna-stymulacja-sluchu-johansena", name: "Trening Słuchowy Johansena" },
    { id: "trening-neuroflow", name: "Trening Neuroflow" },
    { id: "wczesna-nauka-czytania", name: "Wczesna Nauka Czytania" },
  ]

  // Generowanie URL-i dla usług
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/uslugi/${service.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...mainRoutes, ...blogRoutes, ...serviceRoutes]
}
