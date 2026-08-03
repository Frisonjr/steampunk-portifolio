import { createTimeline } from 'animejs'
import { useReveal } from '../hooks/useReveal'

interface SectionTitleProps {
  ordinal: string
  title: string
}

export function SectionTitle({ ordinal, title }: SectionTitleProps) {
  const ref = useReveal<HTMLDivElement>((el) => {
    const tl = createTimeline({ defaults: { ease: 'out(3)' } })
    tl.add(el.querySelectorAll('.section-title-text'), {
      opacity: [0, 1],
      translateY: [22, 0],
      duration: 800,
    }).add(
      el.querySelectorAll('.ornament'),
      { scaleX: [0, 1], opacity: [0, 1], duration: 900, ease: 'inOut(3)' },
      '-=500',
    )
  })

  return (
    <div className="section-title" ref={ref}>
      <span className="ornament ornament-left" aria-hidden="true" />
      <div className="section-title-text">
        <span className="section-ordinal">{ordinal}</span>
        <h2>{title}</h2>
      </div>
      <span className="ornament ornament-right" aria-hidden="true" />
    </div>
  )
}
