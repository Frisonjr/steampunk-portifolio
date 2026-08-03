import { useId } from 'react'

interface GearProps {
  size?: number
  teeth?: number
  spokes?: number
  className?: string
  style?: React.CSSProperties
  /** cor base do metal (latão por padrão) */
  color?: string
}

/** Gera o contorno de uma engrenagem (dentes + furo central) em um viewBox 100x100. */
function gearPath(teeth: number, tipRadius: number, rootRadius: number, holeRadius: number): string {
  const cx = 50
  const cy = 50
  const step = (Math.PI * 2) / teeth
  const pt = (radius: number, angle: number) =>
    `${(cx + radius * Math.cos(angle)).toFixed(2)} ${(cy + radius * Math.sin(angle)).toFixed(2)}`

  let d = ''
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    d += i === 0 ? `M ${pt(rootRadius, a)} ` : `L ${pt(rootRadius, a)} `
    d += `L ${pt(tipRadius, a + step * 0.15)} `
    d += `L ${pt(tipRadius, a + step * 0.45)} `
    d += `L ${pt(rootRadius, a + step * 0.6)} `
  }
  d += 'Z '
  d += `M ${cx + holeRadius} ${cy} `
  d += `A ${holeRadius} ${holeRadius} 0 1 0 ${cx - holeRadius} ${cy} `
  d += `A ${holeRadius} ${holeRadius} 0 1 0 ${cx + holeRadius} ${cy} Z`
  return d
}

export function Gear({
  size = 120,
  teeth = 12,
  spokes = 5,
  className,
  style,
  color = '#c9962e',
}: GearProps) {
  const gradientId = useId()
  const spokeAngles = Array.from({ length: spokes }, (_, i) => (360 / spokes) * i)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="35%" r="80%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor={color} stopOpacity="0.75" />
          <stop offset="100%" stopColor="#3a2c14" stopOpacity="0.95" />
        </radialGradient>
      </defs>
      <path d={gearPath(teeth, 50, 41, 9)} fill={`url(#${gradientId})`} fillRule="evenodd" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#3a2c14" strokeWidth="3" opacity="0.6" />
      {spokeAngles.map((angle) => (
        <rect
          key={angle}
          x="47.5"
          y="14"
          width="5"
          height="32"
          rx="2.5"
          fill="#3a2c14"
          opacity="0.55"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="13" fill={color} opacity="0.9" />
      <circle cx="50" cy="50" r="9" fill="#241a0e" />
    </svg>
  )
}
