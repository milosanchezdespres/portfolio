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
      {languages.map(({ code, src, className, imgClass }) => {
        const isActive = code === current
        return (
          <Link
            key={code}
            href={`/${code}`}
            className={`
              w-12 h-12 rounded overflow-hidden flex items-center justify-center
              border-2
              transition-transform transition-colors duration-300
              ${isActive
                ? 'border-[#b45309] bg-[#b45309] outline-2 outline-white outline-offset-[-2px]'
                : 'bg-white border-transparent hover:border-[#b45309] hover:bg-[#b45309]'
              }
              hover:scale-110
            `}
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
        )
      })}
    </div>
  )
}
