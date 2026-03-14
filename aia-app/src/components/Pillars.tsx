import { Heart, Layers, HandHeart } from 'lucide-react'
import { SignatureSweep } from './SignatureSweep'

const PILLARS = [
  {
    icon: Heart,
    title: 'Alma',
    subtitle: 'A essência honrada',
    description:
      'Cada pessoa traz décadas de experiência de vida. Não simplificamos. Encontramos complexidade com complexidade, e profundidade com profundidade.',
  },
  {
    icon: Layers,
    title: 'Integração',
    subtitle: 'O método que une',
    description:
      'Não tratamos sintomas em silos. Integramos — mente, corpo, história, relacionamentos — em uma abordagem unificada de saúde psicológica.',
  },
  {
    icon: HandHeart,
    title: 'Acolhimento',
    subtitle: 'A experiência vivida',
    description:
      'Acolher não é apenas nossa recepção. É nossa metodologia clínica. Cada interação é desenhada para que você se sinta cuidado.',
  },
] as const

export function Pillars() {
  return (
    <section id="pilares" className="py-24 px-6 bg-rich-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-signature-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Nossos Pilares
          </p>
          <h2 className="font-serif text-warm-white text-4xl md:text-5xl font-light mb-6">
            Três verdades. Uma promessa.
          </h2>
          <SignatureSweep className="w-40 text-signature-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map(({ icon: Icon, title, subtitle, description }) => (
            <div
              key={title}
              className="bg-deep-charcoal/50 border border-signature-gold/10 rounded-2xl p-10 hover:border-signature-gold/30 transition-colors duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-signature-gold/10 flex items-center justify-center mb-6 group-hover:bg-signature-gold/20 transition-colors duration-300">
                <Icon size={24} className="text-signature-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-signature-gold text-3xl font-normal mb-2">
                {title}
              </h3>
              <p className="text-champagne text-sm font-medium tracking-wider uppercase mb-4">
                {subtitle}
              </p>
              <p className="text-warm-white/70 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
