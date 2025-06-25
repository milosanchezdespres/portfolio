'use client'

import { ReactNode } from 'react'

export default function BlockContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" id="projects">
      {children}
    </div>
  )
}
