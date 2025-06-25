'use client'

import ProjectButton from '@/app/components/ProjectButton'

export default function Banner({
  text,
  sub_text,
  button_text,
  buttonClassName,
  project_button_label,
}: {
  text: string
  sub_text: string
  button_text: string
  buttonClassName?: string
  project_button_label?: string
}) {
  return (
    <div
      className="w-full min-h-[400px] md:min-h-[700px] pt-6 md:pt-8 px-8 flex flex-col items-center justify-start md:justify-center
                 bg-[#334498] relative overflow-hidden shadow-md"
    >
      <svg
        className="absolute bottom-0 left-0 w-full h-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#4b5d8f"
          fillOpacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,202.7C672,235,768,245,864,224C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="relative z-10 mt-8 md:-mt-4 text-center max-w-4xl w-full">
        <span className="text-xl md:text-5xl font-extrabold text-[#fef3c7] tracking-wide font-sans">
          {text}
          <br />
          <span className="text-base md:text-3xl font-normal block mt-4">{sub_text}</span>
        </span>
      </div>

      <a href="#contact-form">
        <button
          type="button"
          className={`
            relative
            z-10
            mt-6
            px-6
            py-3
            text-[#fef3c7]
            font-semibold
            bg-amber-700
            rounded
            shadow
            border-2
            border-[#fef3c7]
            transition
            duration-300
            transform
            hover:bg-white
            hover:text-[#b45309]
            hover:shadow-lg
            hover:scale-105
            focus:outline-none
            ${buttonClassName || ''}
          `}
        >
          {button_text}
        </button>
      </a>

      <ProjectButton label={project_button_label || ''} />
    </div>
  )
}
