'use client'

export default function Footer({ text }: { text: string }) {
  return (
    <footer
      style={{
        width: '100%',
        padding: '40px 20px 20px',
        backgroundColor: '#334498',  // blue background
        fontWeight: '500',
        fontSize: '1.1rem',
        lineHeight: '1.4',
        fontFamily: "'Geist', sans-serif",
        userSelect: 'none',
        position: 'relative',
        textAlign: 'center',
        minHeight: '80px',
        color: '#fef3c7', // beige text
        borderTop: '2px solid #fef3c7', // beige top border
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        {text}
      </div>
    </footer>
  )
}
