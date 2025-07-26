import { getAllPosts } from '@/lib/posts'
import { useState } from 'react'
import SearchInput from '@/components/SearchInput'
import { useRouter } from 'next/router'

export default function Home({ posts }: { posts: any[] }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.meta.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.meta.description.toLowerCase().includes(searchQuery.toLowerCase())
  )
const router = useRouter()
  return (
    
    <main className="prose p-8">
      <h1>Блог</h1>
      <SearchInput onSearch={setSearchQuery} />

      <ul>
        {filteredPosts.map((post) => (
          
  <li key={post.slug} onClick={() => router.push(`/blog/${post.slug}`)} className="cursor-pointer">
    <h2 className="text-xl font-semibold text-blue-600 hover:underline">
      {post.meta.title}
    </h2>
    <p className="text-gray-600">{post.meta.description}</p>
  </li>
))}
      </ul>
    </main>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  posts.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1))

  return {
    props: {
      posts,
    },
  }
}