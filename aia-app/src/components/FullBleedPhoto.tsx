import { useScrollReveal } from '../hooks/useScrollReveal'

interface FullBleedPhotoProps {
  readonly alt: string
  readonly aspectRatio?: string
  readonly className?: string
}

export function FullBleedPhoto({
  alt,
  aspectRatio = '3/1',
  className = '',
}: FullBleedPhotoProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt}
      className={`w-full bg-stone/20 grayscale transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ aspectRatio }}
    />
  )
}
