'use client'

export default function BlockContainer({ text, sub_text }: { text: string; sub_text: string }) {
  return (
    <div className="w-full min-h-[700px] p-8 flex flex-col items-center justify-center
      bg-[#334498] relative overflow-hidden
      shadow-md
    ">
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

      <span className="relative z-10 text-5xl font-extrabold text-white tracking-wide font-sans text-center">
        {text}
        <br />
        <span className="text-3xl font-normal mt-6 block">{sub_text}</span>
      </span>
    </div>
  )
}
