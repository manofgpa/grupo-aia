import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

const FEATURES = [
  {
    title: 'Equipe Multidisciplinar',
    description:
      'Psicologia e terapias integrativas trabalhando juntas para oferecer o cuidado que você precisa.',
  },
  {
    title: 'Foco em Compulsões',
    description:
      'Grupos terapêuticos online focados na conscientização e troca de experiências sobre os diferentes tipos de compulsão — de compras, alimentar e outros comportamentos compulsivos.',
  },
  {
    title: 'Abordagem Personalizada',
    description:
      'Cada pessoa tem uma história diferente. Nossos protocolos são adaptados às suas necessidades, não o contrário.',
  },
  {
    title: 'Continuidade de Cuidado',
    description:
      'A mesma equipe acompanha você do início ao fim. Sem rotatividade, sem recomeços. Construímos vínculo.',
  },
] as const

function FeatureParagraph({
  title,
  description,
}: (typeof FEATURES)[number]) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <p
      ref={ref}
      className={`text-warm-gray text-lg leading-relaxed mb-6 last:mb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <strong className="text-deep-charcoal">{title}.</strong> {description}
    </p>
  )
}

export function Approach() {
  const heading = useScrollReveal()

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2
          ref={heading.ref}
          className={`font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6 transition-all duration-700 ${
            heading.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Rigor clínico com calor humano.
        </h2>

        <GoldRule className="mb-6" />

        <p className="text-warm-gray text-lg leading-relaxed mb-10">
          Acreditamos que cuidar de verdade exige duas coisas: competência clínica e calor
          humano. No Aia, você encontra as duas.
        </p>

        {FEATURES.map((feature) => (
          <FeatureParagraph key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}
