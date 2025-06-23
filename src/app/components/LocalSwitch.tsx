'use client'

import Link from 'next/link'
import Image from 'next/image'

const languages = [
  { code: 'en', src: '/flags/en.png', imgClass: 'scale-x-85' },
  { code: 'fr', src: '/flags/fr.png', className: 'scale-80' },
  { code: 'ja', src: '/flags/ja.png' },
]

export default function LanguageSwitcher({ current }: { current: string }) {
  return (
    <div className="flex gap-2">
      {languages.map(({ code, src, className, imgClass }) => (
        <Link
          key={code}
          href={`/${code}`}
          className="w-12 h-12 rounded overflow-hidden flex items-center justify-center transition-all hover:border-2 hover:border-black bg-white"
        >
          <div className="relative w-8 h-6">
            <Image
              src={src}
              alt={code}
              fill
              className={`object-contain ${className || ''} ${imgClass || ''}`}
              sizes="32px"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
