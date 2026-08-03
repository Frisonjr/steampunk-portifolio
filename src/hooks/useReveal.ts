import { useEffect, useRef } from 'react'

/**
 * Executa `onReveal` uma única vez quando o elemento entra no viewport.
 * Útil para disparar animações do anime.js sob demanda durante o scroll.
 */
export function useReveal<T extends HTMLElement>(
  onReveal: (el: T) => void,
  threshold = 0.2,
) {
  const ref = useRef<T>(null)
  const onRevealRef = useRef(onReveal)
  onRevealRef.current = onReveal

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onRevealRef.current(el)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
