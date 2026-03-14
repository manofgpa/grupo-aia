import { useScrollReveal } from '../hooks/useScrollReveal'

const PILLARS = [
  {
    title: 'Alma',
    subtitle: 'A essência honrada',
    description:
      'Cada pessoa traz décadas de experiência de vida. Não simplificamos. Encontramos complexidade com complexidade, e profundidade com profundidade.',
  },
  {
    title: 'Integração',
    subtitle: 'O método que une',
    description:
      'Não tratamos sintomas em silos. Integramos — mente, corpo, história, relacionamentos — em uma abordagem unificada de saúde psicológica.',
  },
  {
    title: 'Acolhimento',
    subtitle: 'A experiência vivida',
    description:
      'Acolher não é apenas nossa recepção. É nossa metodologia clínica. Cada interação é desenhada para que você se sinta cuidado.',
  },
] as const

function Pillar({
  title,
  subtitle,
  description,
}: (typeof PILLARS)[number]) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`mb-16 last:mb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h3 className="font-serif text-signature-gold text-3xl md:text-4xl font-light mb-2">
        {title}
      </h3>
      <p className="italic text-stone mb-4">{subtitle}</p>
      <p className="text-warm-gray text-lg leading-relaxed">{description}</p>
    </div>
  )
}

export function Pillars() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {PILLARS.map((pillar) => (
          <Pillar key={pillar.title} {...pillar} />
        ))}
      </div>
    </section>
  )
}
