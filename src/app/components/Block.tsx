'use client'

import Image from 'next/image'

export default function Block({ color, hover, text, src }: { color: string; hover: string; text: string; src: string }) {
  return (
    <div className="w-full">
      <div
        className="aspect-square flex flex-col items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: color }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hover)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
      >
        <Image
          src={src}
          width={100}
          height={100}
          alt="Centered image"
          className="p-4"
        />
        <p className="text-white underline">{text}</p>
      </div>
    </div>
  )
}
