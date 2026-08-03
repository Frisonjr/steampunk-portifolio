interface FlagProps {
  country: 'us' | 'br'
  size?: number
}

/** Bandeiras em SVG simplificado (emojis de bandeira não renderizam no Windows). */
export function Flag({ country, size = 22 }: FlagProps) {
  const height = (size * 2) / 3

  if (country === 'us') {
    const stripe = 40 / 13
    return (
      <svg width={size} height={height} viewBox="0 0 60 40" className="flag" aria-hidden="true">
        <rect width="60" height="40" fill="#f5f0e6" />
        {Array.from({ length: 7 }, (_, i) => (
          <rect key={i} y={i * 2 * stripe} width="60" height={stripe} fill="#b22234" />
        ))}
        <rect width="26" height={stripe * 7} fill="#3c3b6e" />
        {Array.from({ length: 12 }, (_, i) => (
          <circle
            key={i}
            cx={4.5 + (i % 4) * 5.8}
            cy={4 + Math.floor(i / 4) * 6.8}
            r="1.4"
            fill="#f5f0e6"
          />
        ))}
      </svg>
    )
  }

  return (
    <svg width={size} height={height} viewBox="0 0 60 40" className="flag" aria-hidden="true">
      <rect width="60" height="40" fill="#009b3a" />
      <polygon points="30,5 54,20 30,35 6,20" fill="#fedf00" />
      <circle cx="30" cy="20" r="9" fill="#002776" />
      <path d="M 22 18.5 A 11 11 0 0 1 38 21.5" stroke="#f5f0e6" strokeWidth="1.6" fill="none" />
    </svg>
  )
}
