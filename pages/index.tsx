import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home({ posts }: { posts: any[] }) {
  return (
    <main className="prose p-8">
      <h1>Блог</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
            </h2>
            <p>{post.meta.date}</p>
            <p>{post.meta.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  // Сортуємо від нових до старих
  posts.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1))

  return {
    props: {
      posts,
    },
  }
}
