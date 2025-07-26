import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SearchInput from '@/components/SearchInput'

const POSTS_PER_PAGE = 3

export default function PaginatedBlogPage({
  posts,
  currentPage,
  totalPages,
}: {
  posts: any[]
  currentPage: number
  totalPages: number
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const filteredPosts = posts.filter((post) =>
    post.meta.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.meta.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="prose p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Блог</h1>
      <SearchInput onSearch={setSearchQuery} />

      <ul>
        {filteredPosts.map((post) => (
          <li
            key={post.slug}
            onClick={() => router.push(`/blog/${post.slug}`)}
            className="cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">
              {post.meta.title}
            </h2>
            <p className="text-gray-600">{post.meta.description}</p>
          </li>
        ))}
      </ul>

      {searchQuery === '' && (
        <nav className="flex justify-between mt-8">
          {currentPage > 1 ? (
            <Link href={`/page/${currentPage - 1}`} className="hover:underline">
              ← Назад
            </Link>
          ) : <span />}

          {currentPage < totalPages ? (
            <Link href={`/page/${currentPage + 1}`} className="hover:underline">
              Вперед →
            </Link>
          ) : <span />}
        </nav>
      )}
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: `${i + 1}` },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts()
  const currentPage = parseInt(params?.page as string, 10)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  return {
    props: {
      posts: paginatedPosts,
      currentPage,
      totalPages,
    },
  }
}
