import { useState, useEffect, useRef, useCallback } from 'react'
import { GoldRule } from './GoldRule'
import { GoldParticles } from './GoldParticles'

type Stage = 'dark' | 'particles' | 'text' | 'glow' | 'complete'

const WORDS = ['Guardiães', 'da', 'Alma.'] as const
const ALMA_START = WORDS.join('').indexOf('Alma.')

const STAGE_DELAYS: readonly { readonly stage: Stage; readonly delay: number }[] = [
  { stage: 'particles', delay: 800 },
  { stage: 'text', delay: 1800 },
  { stage: 'glow', delay: 3600 },
  { stage: 'complete', delay: 4200 },
]

function useAnimationStage(): Stage {
  const [stage, setStage] = useState<Stage>('dark')

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setStage('complete')
      return
    }

    const timers = STAGE_DELAYS.map(({ stage: s, delay }) =>
      setTimeout(() => setStage(s), delay),
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return stage
}

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

function BackgroundPulse() {
  return (
    <div
      className="absolute inset-0 z-0 animate-radial-breathe"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(184,150,75,0.05), transparent 70%)',
      }}
    />
  )
}

function Vignette() {
  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(26,26,26,0.8) 100%)',
      }}
    />
  )
}

function CinematicOverlay() {
  return (
    <>
      <div
        className="absolute inset-x-0 top-0 z-10 pointer-events-none h-32"
        style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.4), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none h-32"
        style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.4), transparent)' }}
      />
    </>
  )
}

function ScrollIndicator({ visible }: { readonly visible: boolean }) {
  const [opacity, setOpacity] = useState(1)
  const rafRef = useRef(0)

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setOpacity(Math.max(0, 1 - window.scrollY / 200))
    })
  }, [])

  useEffect(() => {
    if (!visible) return
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [visible, handleScroll])

  if (!visible) return null

  return (
    <div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 animate-scroll-indicator-in"
      style={{ opacity }}
    >
      <div className="w-[1px] h-8 bg-signature-gold opacity-40 animate-scroll-line" />
    </div>
  )
}

export function Hero() {
  const stage = useAnimationStage()

  const stageGte = (target: Stage): boolean => {
    const order: Stage[] = ['dark', 'particles', 'text', 'glow', 'complete']
    return order.indexOf(stage) >= order.indexOf(target)
  }

  let globalCharIndex = 0

  return (
    <section className="relative min-h-screen bg-rich-black flex items-center justify-center overflow-hidden pt-[env(safe-area-inset-top)]">
      <BackgroundPulse />
      <GoldParticles visible={stageGte('particles')} />
      <Vignette />
      <CinematicOverlay />
      <GrainOverlay />

      <div className="relative z-30 text-center px-8 sm:px-12 max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] font-normal leading-[1.05] tracking-[-0.02em]">
          {WORDS.map((word, wordIdx) => {
            const wordChars = word.split('').map((char) => {
              const idx = globalCharIndex++
              const isAlma = idx >= ALMA_START
              const showChar = stageGte('text')
              const showGlow = stageGte('glow') && isAlma
              const showAmbient = stageGte('complete') && isAlma

              return (
                <span
                  key={idx}
                  className={[
                    'inline-block',
                    isAlma ? 'text-signature-gold' : 'text-warm-white',
                    showChar ? 'animate-char-reveal' : 'opacity-0',
                    showGlow && !showAmbient ? 'animate-glow-in' : '',
                    showAmbient ? 'animate-soul-breathe' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={showChar ? { animationDelay: `${idx * 80}ms` } : undefined}
                >
                  {char}
                </span>
              )
            })

            return (
              <span
                key={word}
                className={`inline-block whitespace-nowrap ${wordIdx > 0 ? 'ml-[0.3em]' : ''}`}
              >
                {wordChars}
              </span>
            )
          })}
        </h1>

        <div className="mt-10 sm:mt-14 flex justify-center">
          <GoldRule width="8rem" forceVisible={stageGte('complete')} />
        </div>

        {stageGte('complete') && (
          <p className="mt-6 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-stone animate-fade-in-up">
            Psicologia Analítica
          </p>
        )}
      </div>

      <ScrollIndicator visible={stageGte('complete')} />
    </section>
  )
}
