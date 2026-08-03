import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

/** Dirigível que cruza o céu do hero lentamente, com hélice girando e balanço suave. */
export function Airship() {
  const driftRef = useRef<HTMLDivElement>(null)
  const bobRef = useRef<HTMLDivElement>(null)
  const propRef = useRef<SVGGElement>(null)

  useEffect(() => {
    const anims: { cancel: () => void }[] = []

    if (driftRef.current) {
      anims.push(
        animate(driftRef.current, {
          translateX: ['-32vw', '132vw'],
          duration: 80000,
          ease: 'linear',
          loop: true,
        }),
      )
    }
    if (bobRef.current) {
      anims.push(
        animate(bobRef.current, {
          translateY: [-10, 10],
          rotate: [-1.5, 1.5],
          duration: 5200,
          alternate: true,
          loop: true,
          ease: 'inOutSine',
        }),
      )
    }
    if (propRef.current) {
      const el = propRef.current
      const prop = { angle: 0 }
      anims.push(
        animate(prop, {
          angle: 360,
          duration: 800,
          ease: 'linear',
          loop: true,
          onUpdate: () => el.setAttribute('transform', `rotate(${prop.angle} 92 100)`),
        }),
      )
    }

    return () => anims.forEach((a) => a.cancel())
  }, [])

  return (
    <div className="airship-drift" ref={driftRef} aria-hidden="true">
      <div className="airship-bob" ref={bobRef}>
        <svg width="220" height="120" viewBox="0 0 240 130" className="airship-svg">
          <defs>
            <linearGradient id="balloon-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c9a05c" />
              <stop offset="55%" stopColor="#9a6c38" />
              <stop offset="100%" stopColor="#6b4520" />
            </linearGradient>
            <linearGradient id="gondola-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6b4a2a" />
              <stop offset="100%" stopColor="#41290f" />
            </linearGradient>
          </defs>

          {/* lemes de cauda */}
          <polygon points="34,28 8,16 20,48" fill="#7d5c28" stroke="#41290f" strokeWidth="1.5" />
          <polygon points="34,68 8,80 20,48" fill="#6b4a20" stroke="#41290f" strokeWidth="1.5" />

          {/* balão */}
          <ellipse cx="125" cy="48" rx="96" ry="34" fill="url(#balloon-grad)" stroke="#41290f" strokeWidth="2" />
          <path d="M75 17 Q68 48 75 79" fill="none" stroke="rgba(30,18,6,0.4)" strokeWidth="1.5" />
          <path d="M118 14 Q112 48 118 82" fill="none" stroke="rgba(30,18,6,0.4)" strokeWidth="1.5" />
          <path d="M162 18 Q170 48 162 78" fill="none" stroke="rgba(30,18,6,0.4)" strokeWidth="1.5" />
          <ellipse cx="125" cy="38" rx="88" ry="20" fill="rgba(255,230,170,0.12)" />

          {/* cordas */}
          <line x1="100" y1="80" x2="106" y2="93" stroke="#2a1c0c" strokeWidth="1.5" />
          <line x1="128" y1="82" x2="126" y2="93" stroke="#2a1c0c" strokeWidth="1.5" />
          <line x1="152" y1="79" x2="145" y2="93" stroke="#2a1c0c" strokeWidth="1.5" />

          {/* gôndola */}
          <rect x="98" y="92" width="56" height="18" rx="7" fill="url(#gondola-grad)" stroke="#2a1c0c" strokeWidth="1.5" />
          <circle cx="112" cy="101" r="3.2" fill="#ffd98a" opacity="0.9" />
          <circle cx="126" cy="101" r="3.2" fill="#ffd98a" opacity="0.9" />
          <circle cx="140" cy="101" r="3.2" fill="#ffd98a" opacity="0.9" />

          {/* hélice traseira */}
          <line x1="98" y1="100" x2="92" y2="100" stroke="#2a1c0c" strokeWidth="2" />
          <g ref={propRef}>
            <ellipse cx="92" cy="90" rx="2.4" ry="11" fill="#d9c398" opacity="0.85" />
            <ellipse cx="92" cy="110" rx="2.4" ry="11" fill="#d9c398" opacity="0.85" />
            <circle cx="92" cy="100" r="3" fill="#8a6a2f" />
          </g>
        </svg>
      </div>
    </div>
  )
}
