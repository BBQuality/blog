import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { remark } from 'remark'
import html from 'remark-html'

export default function BlogPost({ post }: { post: any }) {
  return (
    <main className="prose p-8">
      <h1>{post.meta.title}</h1>
      <p className="text-gray-500 text-sm">{post.meta.description}</p>
      <p className="text-gray-500 text-sm">{post.meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string)
  const processedContent = await remark().use(html).process(post.content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      post: {
        ...post,
        content: contentHtml,
      },
    },
  }
}
