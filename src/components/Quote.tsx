import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

const PHRASES = [
  'Você não precisa ter todas as respostas.',
  ' Precisa apenas de um lugar',
  ' onde possa ser honesto sobre o que sente.',
] as const

export function Quote() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 flex items-center justify-center px-6">
      <div
        ref={ref}
        className={`max-w-3xl text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="relative">
          <span
            className="absolute -top-8 -left-4 md:-top-10 md:-left-8 font-serif text-signature-gold text-6xl md:text-8xl opacity-30 select-none animate-float-gentle"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote className="font-serif text-rich-black text-2xl md:text-4xl italic leading-relaxed mb-8">
            {PHRASES.map((phrase, i) => (
              <span
                key={i}
                className={`inline transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${i * 150}ms` : '0ms',
                  clipPath: isVisible ? 'inset(0)' : 'inset(100% 0 0 0)',
                }}
              >
                {phrase}
              </span>
            ))}
          </blockquote>
        </div>

        <div className="flex justify-center mb-6">
          <GoldRule width="6rem" />
        </div>

        <p className="text-warm-gray text-sm tracking-wider uppercase">
          A Promessa do Grupo Aia
        </p>
      </div>
    </section>
  )
}
