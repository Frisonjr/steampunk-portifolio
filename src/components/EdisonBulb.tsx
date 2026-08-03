import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

interface EdisonBulbProps {
  className?: string
  /** comprimento do fio, em px */
  length?: number
  delay?: number
}

/** Lâmpada de Edison pendurada num fio, com balanço de pêndulo e luz tremulante. */
export function EdisonBulb({ className = '', length = 110, delay = 0 }: EdisonBulbProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const anims: { cancel: () => void }[] = [
      animate(el, {
        rotate: [-3.5, 3.5],
        duration: 3600,
        delay,
        loop: true,
        alternate: true,
        ease: 'inOutSine',
      }),
    ]

    const flickerKeyframes = [
      { to: 0.35, duration: 90 },
      { to: 0.85, duration: 260 },
      { to: 0.55, duration: 140 },
      { to: 0.95, duration: 480 },
      { to: 0.65, duration: 180 },
    ]
    const halo = el.querySelector('.bulb-halo')
    const filament = el.querySelector('.bulb-filament')
    if (halo) {
      anims.push(animate(halo, { opacity: flickerKeyframes, loop: true, delay, ease: 'inOutQuad' }))
    }
    if (filament) {
      anims.push(
        animate(filament, { opacity: flickerKeyframes, loop: true, delay: delay + 60, ease: 'inOutQuad' }),
      )
    }

    return () => anims.forEach((a) => a.cancel())
  }, [delay])

  return (
    <div className={`bulb-hang ${className}`} ref={ref} aria-hidden="true">
      <span className="bulb-wire" style={{ height: length }} />
      <div className="bulb-head">
        <span className="bulb-halo" />
        <svg width="40" height="62" viewBox="0 0 40 62" className="bulb-svg">
          <rect x="13" y="0" width="14" height="13" rx="2" fill="#8a6a2f" />
          <line x1="13" y1="4.5" x2="27" y2="4.5" stroke="#5c4419" strokeWidth="1.5" />
          <line x1="13" y1="8.5" x2="27" y2="8.5" stroke="#5c4419" strokeWidth="1.5" />
          <circle
            cx="20"
            cy="37"
            r="18"
            fill="rgba(255,214,140,0.13)"
            stroke="rgba(255,214,140,0.45)"
            strokeWidth="1.2"
          />
          <path
            className="bulb-filament"
            d="M15 19 L15 30 L20 40 L25 30 L25 19"
            fill="none"
            stroke="#ffb84d"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
