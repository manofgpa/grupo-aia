import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

const ITEMS = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="15" cy="18" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="29" cy="18" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="22" cy="28" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    title: 'Encontros online quinzenais',
    description: 'Em grupo, com presença e acolhimento — de onde você estiver',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="16" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <line x1="22" y1="12" x2="22" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="22" y1="22" x2="30" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: '1h30 de duração',
    description: 'Tempo para aprofundar e se conectar',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="10" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <line x1="14" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14" y1="23" x2="25" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Ferramentas de apoio',
    description: 'Recursos práticos para ajudar a lidar com a compulsão no dia a dia',
  },
] as const

function Card({
  icon,
  title,
  description,
  index,
}: (typeof ITEMS)[number] & { readonly index: number }) {
  const { ref, isVisible, transitionDelay } = useScrollReveal({ staggerIndex: index })

  return (
    <div
      ref={ref}
      className={`flex-1 border border-signature-gold/30 rounded-xl p-8 text-center flex flex-col items-center gap-4 bg-signature-gold/[0.03] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay }}
    >
      <div className="text-signature-gold">{icon}</div>
      <h3 className="font-serif text-warm-white text-2xl font-semibold leading-tight">
        {title}
      </h3>
      <p className="text-stone text-base leading-relaxed">{description}</p>
    </div>
  )
}

export function HowItWorks() {
  const heading = useScrollReveal()

  return (
    <section className="bg-rich-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            ref={heading.ref}
            className={`font-serif text-warm-white text-4xl md:text-5xl font-normal mb-4 transition-all duration-800 ${
              heading.isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              clipPath: heading.isVisible ? 'inset(0)' : 'inset(100% 0 0 0)',
            }}
          >
            Como funciona?
          </h2>
          <GoldRule className="mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {ITEMS.map((item, i) => (
            <Card key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
