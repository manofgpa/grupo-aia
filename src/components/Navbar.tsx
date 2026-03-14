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
          <img
            src="/logo.png"
            alt="Grupo Aia"
            className={`h-40 rounded-lg transition-transform duration-300 ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}
          />
        </a>

        <a
          href="#contato"
          className="relative text-warm-white/80 hover:text-signature-gold text-sm font-medium tracking-wider uppercase transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-signature-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Contato
        </a>
      </div>
    </nav>
  )
}
