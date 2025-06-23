'use client'
import { useState } from 'react'
import Link from 'next/link'

const languages = ['en', 'fr', 'ja']

export default function LanguageSwitcher({ current }: { current: string }) {
  // Find index of current language in languages array
  const currentIndex = languages.indexOf(current)

  // Start from the next language in the array, cycle through all
  const [index, setIndex] = useState((currentIndex + 1) % languages.length)

  const nextLang = languages[index]

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % languages.length)
  }

  return (
    <Link
      href={`/${nextLang}`}
      onClick={handleClick}
      className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded cursor-pointer select-none"
    >
      {nextLang.toUpperCase()}
    </Link>
  )
}
