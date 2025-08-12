'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'

interface PostPreview {
  slug: string
  title: string
  date: string
}

interface SearchProps {
  posts: PostPreview[]
}

export default function Search({ posts }: SearchProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Фільтруємо тільки коли query не пустий
  const filtered = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return posts.filter(post => post.title.toLowerCase().includes(q))
  }, [query, posts])

  // Закриваємо dropdown, якщо клік поза компонентом
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto" ref={containerRef}>
      <input
        type="text"
        placeholder="Пошук постів..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        className="w-full border rounded-lg px-4 py-2 dark:bg-gray-800 dark:text-white"
      />
      {isFocused && filtered.length > 0 && (
        <ul className="absolute bg-white dark:bg-gray-700 shadow-lg rounded-lg mt-2 w-full z-10">
          {filtered.map(post => (
            <li
              key={post.slug}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                // onMouseDown, бо onClick може спрацьовувати після onBlur
                setIsFocused(false)
                setQuery('')
              }}
            >
              <Link href={`/posts/${post.slug}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <p className="block text-blue-600 hover:underline">
                  {post.title}
                </p>
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
      )}
      {isFocused && query.trim() && filtered.length === 0 && (
        <div className="absolute z-50 bg-white border border-gray-300 rounded shadow-md w-full mt-1 px-4 py-2 text-gray-500">
          Нічого не знайдено
        </div>
      )}
    </div>
  )
}
