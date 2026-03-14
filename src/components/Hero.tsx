import { GoldRule } from './GoldRule'

const WORDS = ['Guardiães', 'da', 'Alma.'] as const

function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 z-20 opacity-[0.04] pointer-events-none animate-grain"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '256px 256px',
      }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-rich-black flex items-center justify-center overflow-hidden">
      <GrainOverlay />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.1]">
          {WORDS.map((word, i) => (
            <span
              key={word}
              className={`inline-block animate-clip-reveal-up ${
                word === 'Alma.'
                  ? 'text-signature-gold animate-ambient-glow'
                  : 'text-warm-white'
              } ${i > 0 ? 'ml-[0.3em]' : ''}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex justify-center" style={{ animationDelay: '0.8s' }}>
          <GoldRule width="10rem" />
        </div>
      </div>
    </section>
  )
}
