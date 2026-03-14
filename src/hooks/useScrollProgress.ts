import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId = 0

    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setProgress(Math.min(1, Math.max(0, scrolled)))
    }

    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return progress
}
