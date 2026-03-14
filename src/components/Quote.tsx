import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

export function Quote() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="min-h-[70vh] bg-rich-black bg-parallax flex items-center justify-center px-6">
      <div
        ref={ref}
        className={`max-w-3xl text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <blockquote className="font-serif text-warm-white text-2xl md:text-4xl italic leading-relaxed mb-8">
          Você não precisa ter todas as respostas. Precisa apenas de um lugar
          onde possa ser honesto sobre o que sente.
        </blockquote>

        <div className="flex justify-center mb-6">
          <GoldRule width="6rem" />
        </div>

        <p className="text-champagne text-sm tracking-wider uppercase">
          A Promessa do Grupo Aia
        </p>
      </div>
    </section>
  )
}
