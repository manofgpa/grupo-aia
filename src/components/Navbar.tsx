import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-rich-black/95 backdrop-blur-md shadow-lg'
          : 'bg-rich-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#">
          <img src="/logo.png" alt="Grupo Aia" className="h-40 rounded-lg" />
        </a>

        <a
          href="#contato"
          className="text-warm-white/80 hover:text-signature-gold text-sm font-medium tracking-wider uppercase transition-colors duration-200"
        >
          Contato
        </a>
      </div>
    </nav>
  )
}
