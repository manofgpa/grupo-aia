interface ParticleConfig {
  readonly size: number
  readonly top: string
  readonly left: string
  readonly dxStart: string
  readonly dyStart: string
  readonly dxEnd: string
  readonly dyEnd: string
  readonly duration: string
  readonly delay: string
  readonly mobileHidden: boolean
}

const PARTICLES: readonly ParticleConfig[] = [
  { size: 2, top: '12%', left: '8%', dxStart: '-4px', dyStart: '6px', dxEnd: '8px', dyEnd: '-10px', duration: '6s', delay: '0s', mobileHidden: false },
  { size: 3, top: '20%', left: '85%', dxStart: '6px', dyStart: '-4px', dxEnd: '-10px', dyEnd: '8px', duration: '7s', delay: '0.5s', mobileHidden: false },
  { size: 2, top: '35%', left: '15%', dxStart: '-8px', dyStart: '-6px', dxEnd: '4px', dyEnd: '12px', duration: '5s', delay: '1s', mobileHidden: false },
  { size: 3, top: '45%', left: '90%', dxStart: '10px', dyStart: '4px', dxEnd: '-6px', dyEnd: '-8px', duration: '8s', delay: '0.3s', mobileHidden: false },
  { size: 2, top: '60%', left: '5%', dxStart: '-6px', dyStart: '10px', dxEnd: '8px', dyEnd: '-4px', duration: '6s', delay: '1.5s', mobileHidden: false },
  { size: 3, top: '75%', left: '80%', dxStart: '4px', dyStart: '-8px', dxEnd: '-12px', dyEnd: '6px', duration: '7s', delay: '0.8s', mobileHidden: false },
  { size: 2, top: '85%', left: '25%', dxStart: '-10px', dyStart: '4px', dxEnd: '6px', dyEnd: '-6px', duration: '5s', delay: '2s', mobileHidden: false },
  { size: 3, top: '10%', left: '50%', dxStart: '8px', dyStart: '-10px', dxEnd: '-4px', dyEnd: '8px', duration: '9s', delay: '0.2s', mobileHidden: false },
  { size: 2, top: '50%', left: '45%', dxStart: '-6px', dyStart: '8px', dxEnd: '10px', dyEnd: '-6px', duration: '6s', delay: '1.2s', mobileHidden: false },
  { size: 3, top: '90%', left: '60%', dxStart: '6px', dyStart: '-4px', dxEnd: '-8px', dyEnd: '10px', duration: '7s', delay: '0.6s', mobileHidden: false },
  { size: 2, top: '25%', left: '70%', dxStart: '-4px', dyStart: '-10px', dxEnd: '12px', dyEnd: '4px', duration: '8s', delay: '1.8s', mobileHidden: true },
  { size: 3, top: '40%', left: '30%', dxStart: '10px', dyStart: '6px', dxEnd: '-8px', dyEnd: '-12px', duration: '6s', delay: '0.4s', mobileHidden: true },
]

interface GoldParticlesProps {
  readonly visible: boolean
}

export function GoldParticles({ visible }: GoldParticlesProps) {
  return (
    <div
      className="absolute inset-0 z-10 transition-opacity duration-1000"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={p.mobileHidden ? 'hidden sm:block' : undefined}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(184, 150, 75, 0.4)',
            contain: 'strict',
            willChange: 'transform',
            animation: `particle-drift ${p.duration} ease-in-out ${p.delay} infinite alternate`,
            '--dx-start': p.dxStart,
            '--dy-start': p.dyStart,
            '--dx-end': p.dxEnd,
            '--dy-end': p.dyEnd,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
