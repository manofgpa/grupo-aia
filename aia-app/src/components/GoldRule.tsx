import { useScrollReveal } from '../hooks/useScrollReveal'

interface GoldRuleProps {
  readonly width?: string
  readonly className?: string
}

export function GoldRule({ width = '12rem', className = '' }: GoldRuleProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <div ref={ref} className={className}>
      <svg
        viewBox="0 0 200 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width }}
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="1"
          x2="200"
          y2="1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="200"
          strokeDashoffset={isVisible ? '0' : '200'}
          className="text-signature-gold transition-[stroke-dashoffset] duration-1000 ease-out"
        />
      </svg>
    </div>
  )
}
