import { useEffect, useRef, useState } from 'react'

type RevealOptions = {
  rootMargin?: string
  threshold?: number
}

/**
 * Enables a one-time, low-cost entrance transition after content approaches
 * the viewport. The initial render remains visible until JavaScript is ready.
 */
export function useReveal({ rootMargin = '0px 0px -8% 0px', threshold = 0.08 }: RevealOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isMotionReady, setIsMotionReady] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!element || prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    setIsMotionReady(true)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { rootMargin, threshold })

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return { ref, isMotionReady, isVisible }
}
