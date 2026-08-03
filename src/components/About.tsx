import { animate, createTimeline, stagger } from 'animejs'
import { useLanguage } from '../i18n/useLanguage'
import { useReveal } from '../hooks/useReveal'
import { SectionTitle } from './SectionTitle'

export function About() {
  const { content } = useLanguage()
  const { profile, highlights, ui } = content

  const ref = useReveal<HTMLDivElement>((el) => {
    const tl = createTimeline({ defaults: { ease: 'out(3)' } })
    tl.add(el.querySelectorAll('.about-card'), {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900,
    })
      .add(
        el.querySelectorAll('.about-stat'),
        { opacity: [0, 1], scale: [0.7, 1], duration: 650, delay: stagger(110) },
        '-=400',
      )
      .add(
        el.querySelectorAll('.wax-seal'),
        { opacity: [0, 1], scale: [0, 1], rotate: [-45, -12], duration: 700, ease: 'outBack' },
        '-=300',
      )

    // Contagem estilo "tubo Nixie" nos destaques
    el.querySelectorAll<HTMLElement>('.about-stat strong').forEach((node) => {
      const raw = node.dataset.value ?? ''
      const match = raw.match(/^(\d+)(.*)$/)
      if (!match) return
      const target = Number(match[1])
      const suffix = match[2]
      const counter = { n: 0 }
      animate(counter, {
        n: target,
        duration: 1700,
        delay: 350,
        ease: 'out(3)',
        onUpdate: () => {
          node.textContent = `${Math.round(counter.n)}${suffix}`
        },
      })
    })
  })

  return (
    <section className="section" id="sobre">
      <SectionTitle ordinal={ui.sections.about.ordinal} title={ui.sections.about.title} />
      <div ref={ref}>
        <div className="about-card parchment rivets">
          <p className="about-text">{profile.summary}</p>
          <div className="about-stats">
            {highlights.map((item) => (
              <div key={item.label} className="about-stat">
                <strong className="nixie" data-value={item.value}>
                  {item.value}
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <span className="wax-seal" aria-hidden="true">
            JF
          </span>
        </div>
      </div>
    </section>
  )
}
