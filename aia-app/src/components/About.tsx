import { SignatureSweep } from './SignatureSweep'

export function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column — Story */}
          <div>
            <p className="text-signature-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Nossa História
            </p>
            <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
              A guardiã da alma não conserta o que está quebrado.
            </h2>
            <SignatureSweep className="w-32 text-signature-gold mb-8" />
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Ela ilumina o que sempre esteve inteiro. O Grupo Aia nasceu de uma crença radical:
              saúde psicológica após os 40 não é sobre administrar o declínio — é sobre integração.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-6">
              Sobre tecer uma vida inteira de experiências em algo completo. A palavra portuguesa
              &ldquo;Acolhimento&rdquo; não tem tradução perfeita — significa receber alguém com
              calor, fazer com que se sinta acolhido, dizer &ldquo;você pertence aqui.&rdquo;
            </p>
            <p className="text-warm-gray text-lg leading-relaxed">
              Quando alguém entra pela porta do Aia, não se torna um paciente. Torna-se uma pessoa
              sendo acompanhada. A alma é honrada. A integração é o método. O acolhimento é a experiência.
            </p>
          </div>

          {/* Right column — Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-champagne/50 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-champagne to-blush-clay/30 flex items-center justify-center">
                <p className="text-stone font-serif text-xl italic text-center px-8">
                  &ldquo;A segunda metade não é a metade menor.&rdquo;
                </p>
              </div>
            </div>
            {/* Decorative sweep */}
            <SignatureSweep className="absolute -bottom-4 -left-4 w-40 text-signature-gold opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
