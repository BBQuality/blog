import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

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
  return (
    <main className="prose p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Блог</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.meta.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.meta.description}</p>
          </li>
        ))}
      </ul>

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


