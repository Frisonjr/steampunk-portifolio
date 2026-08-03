import { animate } from 'animejs'

let running: { cancel: () => void } | null = null

/**
 * Rola suavemente até a âncora animando window.scrollTo com anime.js.
 * Não depende de scroll-behavior nem de scrollIntoView, que os navegadores
 * desativam quando o sistema está com "reduzir animações" ligado.
 */
export function smoothScrollTo(hash: string) {
  const el = document.querySelector<HTMLElement>(hash)
  if (!el) return

  const targetY = Math.max(0, window.scrollY + el.getBoundingClientRect().top - 12)
  const distance = Math.abs(targetY - window.scrollY)
  if (distance < 2) return

  const state = { y: window.scrollY }
  running?.cancel()
  running = animate(state, {
    y: targetY,
    duration: Math.min(1400, 500 + distance * 0.35),
    ease: 'inOut(3)',
    onUpdate: () => window.scrollTo(0, state.y),
    onComplete: () => {
      running = null
    },
  })

  history.replaceState(null, '', hash)
}
