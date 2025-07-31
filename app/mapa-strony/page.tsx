import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts } from "@/data/blog-posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mapa Strony | EduHustawka",
  description: "Pełna mapa strony EduHustawka - znajdź szybko interesujące Cię informacje.",
}

// Dane usług
const services = [
  { id: "diagnoza-korp", name: "Diagnoza KORP" },
  { id: "trening-umiejetnosci-spolecznych", name: "Trening Umiejętności Społecznych (TUS)" },
  { id: "terapia-reki", name: "Terapia Ręki" },
  { id: "terapia-pedagogiczna", name: "Terapia Pedagogiczna" },
  { id: "indywidualna-stymulacja-sluchu-johansena", name: "Trening Słuchowy Johansena" },
  { id: "trening-neuroflow", name: "Trening Neuroflow" },
  { id: "wczesna-nauka-czytania", name: "Wczesna Nauka Czytania" },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 font-heading">Mapa Strony</h1>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-teal-700 mb-4 font-heading">Strony główne</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <Link href="/" className="text-teal-600 hover:underline">
                        Strona główna
                      </Link>
                    </li>
                    <li>
                      <Link href="/rezerwacja" className="text-teal-600 hover:underline">
                        Rezerwacja wizyty
                      </Link>
                    </li>
                    <li>
                      <Link href="/polityka-prywatnosci" className="text-teal-600 hover:underline">
                        Polityka prywatności
                      </Link>
                    </li>
                    <li>
                      <Link href="/polityka-cookies" className="text-teal-600 hover:underline">
                        Polityka cookies
                      </Link>
                    </li>
                    <li>
                      <Link href="/mapa-strony" className="text-teal-600 hover:underline">
                        Mapa strony
                      </Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-teal-700 mb-4 font-heading">Usługi</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link href={`/uslugi/${service.id}`} className="text-teal-600 hover:underline">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-teal-700 mb-4 font-heading">Blog</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    {blogPosts.map((post) => (
                      <li key={post.id}>
                        <Link href={`/blog/${post.id}`} className="text-teal-600 hover:underline">
                          {post.title}
                        </Link>
                        <span className="text-gray-500 text-sm ml-2">({post.date})</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-teal-700 mb-4 font-heading">Sekcje na stronie głównej</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <Link href="/#o-mnie" className="text-teal-600 hover:underline">
                        O mnie
                      </Link>
                    </li>
                    <li>
                      <Link href="/#oferta" className="text-teal-600 hover:underline">
                        Oferta
                      </Link>
                    </li>
                    <li>
                      <Link href="/#cennik" className="text-teal-600 hover:underline">
                        Cennik
                      </Link>
                    </li>
                    <li>
                      <Link href="/#blog" className="text-teal-600 hover:underline">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/#faq" className="text-teal-600 hover:underline">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/#kontakt" className="text-teal-600 hover:underline">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
