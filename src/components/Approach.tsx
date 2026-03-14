import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

const FEATURES = [
  {
    title: 'Equipe Multidisciplinar',
    description:
      'Psicologia, psiquiatria e práticas holísticas integradas em uma abordagem coesa.',
  },
  {
    title: 'Protocolos Específicos',
    description:
      'Desenvolvidos para a faixa dos 40–90 anos — não adaptados de populações mais jovens.',
  },
  {
    title: 'Sensibilidade Cultural',
    description:
      'O Acolhimento português integrado na estrutura clínica como metodologia de cuidado.',
  },
  {
    title: 'Continuidade de Cuidado',
    description:
      'A mesma equipe acompanha você durante toda a sua jornada. Sem rotatividade, sem recomeços.',
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
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
          Rigor clínico com calor humano.
        </h2>

        <GoldRule className="mb-6" />

        <p className="text-warm-gray text-lg leading-relaxed mb-10">
          O Aia ocupa um espaço único: clinicamente rigoroso E emocionalmente acolhedor,
          baseado em evidências E centrado na alma.
        </p>

        {FEATURES.map((feature) => (
          <FeatureParagraph key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}
