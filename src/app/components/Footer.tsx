'use client'

export default function Footer({ text }: { text: string }) {
  return (
    <footer
      style={{
        width: '100%',
        padding: '40px 20px 20px',
        backgroundColor: '#ffffff',
        fontWeight: '500',
        fontSize: '1.1rem',
        lineHeight: '1.4',
        fontFamily: "'Geist', sans-serif",
        userSelect: 'none',
        position: 'relative',
      }}
    >
      <svg
        style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '60px', transform: 'rotate(180deg)' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#334498"
          fillOpacity="0.2"
          d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,181.3C672,203,768,213,864,197.3C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {text}
      </div>
    </footer>
  )
}
