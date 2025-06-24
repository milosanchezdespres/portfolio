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

  // Only show a thin blue border on the un-hovered beige blocks
  const showBorder = !hovered && color.toLowerCase() === '#fef3c7'

  return (
    <div className="w-full">
      <div
        className={`aspect-square flex flex-col items-center justify-center transition-colors duration-300 ${
          showBorder ? 'border border-[#334498]' : ''
        }`}
        style={{ backgroundColor: currentBg }}
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
        <p style={{ color: textColor }}>
          {text}
        </p>
      </div>
    </div>
  )
}
