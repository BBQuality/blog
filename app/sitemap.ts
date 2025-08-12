import { MetadataRoute } from 'next'
import { getAllPostSlugs } from '../lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

  const staticPages = [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
  ]

  const posts = getAllPostSlugs().map(slug => ({
    url: `${siteUrl}/posts/${slug}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...posts]
}