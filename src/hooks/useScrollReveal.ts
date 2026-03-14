import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  readonly threshold?: number
  readonly rootMargin?: string
  readonly once?: boolean
  readonly staggerIndex?: number
  readonly staggerDelay?: number
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
  staggerIndex = 0,
  staggerDelay = 120,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  const transitionDelay = `${staggerIndex * staggerDelay}ms`

  return { ref, isVisible, transitionDelay }
}
