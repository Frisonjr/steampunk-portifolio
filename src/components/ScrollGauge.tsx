import { useEffect, useRef } from 'react'

const MIN_ANGLE = -120
const MAX_ANGLE = 120

/** Manômetro fixo no canto: o ponteiro sobe conforme a página é rolada. */
export function ScrollGauge() {
  const needleRef = useRef<SVGGElement>(null)

  useEffect(() => {
    let raf = 0
    let running = true
    let progress = 0

    const readScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    }

    const tick = (time: number) => {
      if (!running) return
      const base = MIN_ANGLE + (MAX_ANGLE - MIN_ANGLE) * progress
      // Oscilação orgânica (±~2.5°) por cima da posição do scroll
      const wobble = Math.sin(time / 220) * 2.1 + Math.sin(time / 520) * 0.7
      needleRef.current?.setAttribute('transform', `rotate(${base + wobble} 50 52)`)
      raf = requestAnimationFrame(tick)
    }

    readScroll()
    raf = requestAnimationFrame(tick)
    window.addEventListener('scroll', readScroll, { passive: true })
    window.addEventListener('resize', readScroll)
    return () => {
      running = false
      window.removeEventListener('scroll', readScroll)
      window.removeEventListener('resize', readScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const ticks = Array.from({ length: 11 }, (_, i) => MIN_ANGLE + i * 24)

  return (
    <div className="scroll-gauge" aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="52" r="46" fill="#241a0e" stroke="#c9962e" strokeWidth="4" />
        <circle cx="50" cy="52" r="38" fill="#1c140b" stroke="#5c4419" strokeWidth="1.5" />
        {/* zona vermelha no fim do curso */}
        <path
          d="M 75 25 A 37 37 0 0 1 82 52"
          fill="none"
          stroke="#a33c32"
          strokeWidth="5"
          opacity="0.9"
          transform="rotate(30 50 52)"
        />
        {ticks.map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="18"
            x2="50"
            y2="24"
            stroke="#e9d8b4"
            strokeWidth="1.6"
            opacity="0.8"
            transform={`rotate(${angle} 50 52)`}
          />
        ))}
        <text
          x="50"
          y="74"
          textAnchor="middle"
          fontSize="10"
          fill="#a08d6b"
          fontFamily="'Special Elite', monospace"
        >
          PSI
        </text>
        <g ref={needleRef} transform={`rotate(${MIN_ANGLE} 50 52)`}>
          <line x1="50" y1="52" x2="50" y2="22" stroke="#d9534f" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="50" y1="52" x2="50" y2="60" stroke="#d9534f" strokeWidth="2.6" strokeLinecap="round" />
        </g>
        <circle cx="50" cy="52" r="5" fill="#c9962e" stroke="#5c4419" strokeWidth="1.5" />
        <ellipse cx="40" cy="36" rx="16" ry="9" fill="rgba(255,255,255,0.06)" transform="rotate(-25 40 36)" />
      </svg>
    </div>
  )
}
