import { SignatureSweep } from './SignatureSweep'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-rich-black flex items-center overflow-hidden">
      {/* Background sweep pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <SignatureSweep className="absolute top-20 -left-20 w-[600px] text-signature-gold" />
        <SignatureSweep className="absolute bottom-40 -right-10 w-[500px] text-signature-gold rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <p className="text-signature-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Alma &middot; Integração &middot; Acolhimento
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-warm-white text-5xl md:text-7xl font-light leading-[1.1] mb-8">
            Guardiães
            <br />
            <span className="text-signature-gold">da Alma.</span>
          </h1>

          {/* Signature sweep divider */}
          <div className="mb-8">
            <SignatureSweep className="w-48 text-signature-gold" />
          </div>

          {/* Value proposition */}
          <p className="text-warm-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light">
            Saúde psicológica integrada para adultos na segunda metade da vida.
            Onde a alma é acolhida — com profundidade, respeito e cuidado genuíno.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bright-gold hover:bg-signature-gold text-rich-black font-semibold px-8 py-4 rounded-lg text-center transition-colors duration-200 cursor-pointer"
            >
              Agende uma Consulta
            </a>
            <a
              href="#sobre"
              className="border border-signature-gold/40 hover:border-signature-gold text-warm-white font-medium px-8 py-4 rounded-lg text-center transition-colors duration-200 cursor-pointer"
            >
              Conheça o Grupo Aia
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
    </section>
  )
}
