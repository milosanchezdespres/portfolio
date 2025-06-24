'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Block({
  color,
  hover,
  text,
  src,
}: {
  color: string         // either "#fef3c7" or "#334498"
  hover: string         // now always "#b45309"
  text: string
  src: string
}) {
  const [hovered, setHovered] = useState(false)

  // What background is showing right now?
  const currentBg = hovered ? hover.toLowerCase() : color.toLowerCase()

  // Decide text color by inverting the current background:
  let textColor = '#000'
  if (currentBg === '#fef3c7') {
    textColor = '#334498'   // beige → blue text
  } else if (currentBg === '#334498') {
    textColor = '#fef3c7'   // blue → beige text
  } else if (currentBg === '#b45309') {
    textColor = '#fef3c7'   // amber → beige text
  }

  return (
    <div className="w-full">
      <div
        className="aspect-square flex flex-col items-center justify-center transition-colors duration-300"
        style={{
          backgroundColor: currentBg,
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 300ms ease-in-out, background-color 300ms ease-in-out',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={src}
          width={100}
          height={100}
          alt="icon"
          className="p-4"
        />
        <p
          style={{
            color: textColor,
            transition: 'color 300ms ease-in-out',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
