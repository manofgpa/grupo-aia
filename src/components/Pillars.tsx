import { useScrollReveal } from '../hooks/useScrollReveal'

const PILLARS = [
  {
    title: 'Alma',
    subtitle: 'Sua história importa',
    description:
      'Cada pessoa carrega uma trajetória única. Não simplificamos nem rotulamos. Buscamos compreender o que está por trás de cada comportamento, com profundidade e respeito.',
  },
  {
    title: 'Integração',
    subtitle: 'Cuidado que conecta',
    description:
      'Compulsão não é um problema isolado. Integramos mente, corpo, história e relacionamentos em uma abordagem que enxerga você por inteiro — não apenas o sintoma.',
  },
  {
    title: 'Acolhimento',
    subtitle: 'Um espaço seguro',
    description:
      'Acolher é mais do que receber bem. É criar um ambiente onde você possa ser honesto sobre suas dificuldades, sem medo de julgamento. Cada interação é pensada para que você se sinta cuidado.',
  },
] as const

function Pillar({
  title,
  subtitle,
  description,
  index,
}: (typeof PILLARS)[number] & { readonly index: number }) {
  const { ref, isVisible, transitionDelay } = useScrollReveal({
    staggerIndex: index,
  })

  return (
    <div
      ref={ref}
      className={`mb-16 last:mb-0 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : 'opacity-0 translate-y-4 translate-x-4'
      }`}
      style={{ transitionDelay }}
    >
      <div
        className={`h-px bg-signature-gold mb-4 origin-left ${
          isVisible ? 'animate-gold-line-grow' : 'scale-x-0'
        }`}
        style={{ animationDelay: transitionDelay }}
      />
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
        {PILLARS.map((pillar, i) => (
          <Pillar key={pillar.title} {...pillar} index={i} />
        ))}
      </div>
    </section>
  )
}
