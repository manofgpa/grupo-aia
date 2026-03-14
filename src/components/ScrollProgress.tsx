import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 bg-signature-gold z-60 origin-left"
      style={{ transform: `scaleX(${progress})` }}
    />
  )
}
