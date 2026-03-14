import { useScrollReveal } from '../hooks/useScrollReveal'

interface FullBleedPhotoProps {
  readonly src: string
  readonly alt: string
  readonly aspectRatio?: string
  readonly className?: string
}

export function FullBleedPhoto({
  src,
  alt,
  aspectRatio = '3/1',
  className = '',
}: FullBleedPhotoProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
      } ${className}`}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover grayscale ${
          isVisible ? 'animate-ken-burns' : ''
        }`}
        loading="lazy"
      />
    </div>
  )
}
