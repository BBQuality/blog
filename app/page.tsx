import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Hero from '../components/Hero'
import Search from '../components/Search'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мій блог — Головна",
  description: "Ласкаво просимо на мій блог. Тут ви знайдете статті про розробку, технології та інше.",
  keywords: ["блог", "розробка", "технології", "next.js", "web"],
  authors: [{ name: "Богдан" }],
  openGraph: {
    title: "Мій блог — Головна",
    description: "Статті про розробку, технології та інше.",
    url: "http://localhost:3000/",
    siteName: "Мій блог",
    images: [
      {
        url: "http://localhost:3000/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Мій блог",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  alternates: {
    canonical: "http://localhost:3000/",
  },
};


export default async function Home() {
  const posts = getSortedPostsData()

  return (
    <>

    <Hero />
    <Search posts={posts} />
    <main className="max-w-3xl mx-auto p-6">
      <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Міні-блог</h1>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug} className="mb-4">
            <Link href={`/posts/${slug}`}>
              <p className="text-xl text-blue-600 hover:underline">{title}</p>
            </Link>
            <p className="text-sm text-gray-500">{date}</p>
          </li>
        ))}
      </ul>
      </div>
    </main>
    </>
  )
}
