'use client'

import { ChevronDown } from 'lucide-react'

export default function ProjectButton({ label }: { label: string }) {
  function scrollToProjects() {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      onClick={scrollToProjects}
      className="flex flex-col items-center mt-6 cursor-pointer group select-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          scrollToProjects()
          e.preventDefault()
        }
      }}
    >
      <span className="text-sm text-[#fef3c7] mb-1 transition-opacity duration-300 group-hover:opacity-0">
        {label}
      </span>
      <ChevronDown
        size={56}
        className="text-[#fef3c7] animate-bounce transition-transform duration-300 group-hover:scale-[2]"
      />
    </div>
  )
}
