import { GoldRule } from './GoldRule'

const WORDS = ['Guardiães', 'da', 'Alma.'] as const

export function Hero() {
  return (
    <section className="relative min-h-screen bg-rich-black flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.1]">
          {WORDS.map((word, i) => (
            <span
              key={word}
              className={`inline-block animate-fade-in-up ${
                word === 'Alma.' ? 'text-signature-gold' : 'text-warm-white'
              } ${i > 0 ? 'ml-[0.3em]' : ''}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex justify-center">
          <GoldRule width="10rem" />
        </div>
      </div>
    </section>
  )
}
