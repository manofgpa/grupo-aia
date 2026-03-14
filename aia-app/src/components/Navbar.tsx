import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#pilares', label: 'Pilares' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        scrolled
          ? 'bg-rich-black/95 backdrop-blur-md shadow-lg'
          : 'bg-rich-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href="#">
          <img src="/logo.png" alt="Grupo Aia" className="h-40 rounded-lg" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-warm-white/80 hover:text-signature-gold text-sm font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bright-gold hover:bg-signature-gold text-rich-black text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Agende uma Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-warm-white cursor-pointer"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-warm-white/80 hover:text-signature-gold text-sm font-medium tracking-wider uppercase transition-colors duration-200 cursor-pointer"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-bright-gold hover:bg-signature-gold text-rich-black text-sm font-semibold px-5 py-2.5 rounded-lg text-center transition-colors duration-200 cursor-pointer"
          >
            Agende uma Consulta
          </a>
        </div>
      )}
    </nav>
  )
}
