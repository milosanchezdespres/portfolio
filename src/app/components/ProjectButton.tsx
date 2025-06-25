'use client'

import { ChevronDown } from 'lucide-react'

export default function ProjectButton() {
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
      <button
        className="bg-[#fef3c7] text-[#b45309] font-semibold px-4 py-2 rounded-full shadow transition duration-300
                   group-hover:opacity-0 group-hover:pointer-events-none"
        type="button"
      >
        See Projects
      </button>
      <ChevronDown
        size={48}
        className="text-[#fef3c7] mt-2 animate-bounce transition-transform duration-300 group-hover:scale-[3]"
      />
    </div>
  )
}
