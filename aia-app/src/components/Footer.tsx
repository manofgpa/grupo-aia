export function Footer() {
  return (
    <footer className="bg-rich-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Grupo Aia" className="h-24 mb-4" />
            <p className="font-serif text-champagne italic text-sm">
              Guardiães da Alma.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-warm-white text-sm font-semibold tracking-wider uppercase mb-4">
              Navegação
            </p>
            <nav className="flex flex-col gap-2">
              {['Sobre', 'Pilares', 'Abordagem', 'Equipe', 'Contato'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-warm-white/60 hover:text-signature-gold text-sm transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact summary */}
          <div>
            <p className="text-warm-white text-sm font-semibold tracking-wider uppercase mb-4">
              Contato
            </p>
            <div className="flex flex-col gap-2 text-warm-white/60 text-sm">
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-signature-gold transition-colors duration-200"
              >
                WhatsApp: +55 (11) 9999-9999
              </a>
              <p>+55 (11) 9999-9999</p>
              <p>São Paulo, SP — Brasil</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-signature-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone text-xs">
            &copy; {new Date().getFullYear()} Grupo Aia. Todos os direitos reservados.
          </p>
          <p className="text-stone text-xs tracking-wider uppercase">
            Alma &middot; Integração &middot; Acolhimento
          </p>
        </div>
      </div>
    </footer>
  )
}
