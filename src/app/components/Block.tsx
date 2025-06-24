'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Block({
  color,
  hover,
  text,
  src,
}: {
  color: string         // "#fef3c7" or "#ffffff"
  hover: string         // always "#b45309"
  text: string
  src: string
}) {
  const [hovered, setHovered] = useState(false)

  const currentBg = hovered ? hover.toLowerCase() : color.toLowerCase()

  let textColor = '#000'
  if (currentBg === '#fef3c7' || currentBg === '#ffffff') {
    textColor = '#b45309'   // beige or white background → brown text
  } else if (currentBg === '#b45309') {
    textColor = '#fef3c7'   // brown background → beige text
  }

  // Thin blue border only on un-hovered beige (#fef3c7) blocks
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
