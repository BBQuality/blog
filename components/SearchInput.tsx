'use client'
import { useState, useEffect } from 'react'

interface SearchInputProps {
  onSearch: (query: string) => void
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query.trim())
    }, 300)

    return () => clearTimeout(timeout)
  }, [query, onSearch])

  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Пошук статей..."
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  )
}
