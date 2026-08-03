import { useEffect, useRef } from 'react'

/** Relógio de bolso funcional: os ponteiros marcam a hora real. */
export function PocketWatch({ size = 40 }: { size?: number }) {
  const hourRef = useRef<SVGLineElement>(null)
  const minuteRef = useRef<SVGLineElement>(null)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const minutes = now.getMinutes() + now.getSeconds() / 60
      const hours = (now.getHours() % 12) + minutes / 60
      minuteRef.current?.setAttribute('transform', `rotate(${minutes * 6} 50 55)`)
      hourRef.current?.setAttribute('transform', `rotate(${hours * 30} 50 55)`)
    }
    tick()
    const id = setInterval(tick, 10000)
    return () => clearInterval(id)
  }, [])

  const ticks = Array.from({ length: 12 }, (_, i) => i * 30)

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="pocket-watch" aria-hidden="true">
      <rect x="43" y="1" width="14" height="11" rx="3" fill="#c9962e" stroke="#5c4419" strokeWidth="1.5" />
      <circle cx="50" cy="55" r="41" fill="#2a1e10" stroke="#c9962e" strokeWidth="5" />
      <circle cx="50" cy="55" r="34" fill="#efe3c2" />
      {ticks.map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="24"
          x2="50"
          y2="29"
          stroke="#4a3018"
          strokeWidth={angle % 90 === 0 ? 3 : 1.6}
          transform={`rotate(${angle} 50 55)`}
        />
      ))}
      <line ref={hourRef} x1="50" y1="55" x2="50" y2="38" stroke="#2a1e10" strokeWidth="4" strokeLinecap="round" />
      <line ref={minuteRef} x1="50" y1="55" x2="50" y2="31" stroke="#2a1e10" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="55" r="3.5" fill="#b06a3b" />
    </svg>
  )
}
