import { useRef } from 'react'
import { animate, createTimeline, stagger } from 'animejs'
import { type Language } from '../data/resume'
import { useLanguage } from '../i18n/useLanguage'
import { useReveal } from '../hooks/useReveal'
import { SectionTitle } from './SectionTitle'

/** Manômetro de pressão: o ponteiro indica o nível de fluência. */
function Gauge({ lang }: { lang: Language }) {
  const needleRef = useRef<SVGGElement>(null)

  const ref = useReveal<HTMLDivElement>(() => {
    const needle = needleRef.current
    if (!needle) return

    const baseAngle = -90 + 180 * (lang.gauge / 100)
    // Perto das extremidades o balanço fica menor pra não sair do arco
    const wobble = lang.gauge >= 95 || lang.gauge <= 5 ? 1.6 : 2.8
    const target = { angle: -90 }

    const apply = () => {
      needle.setAttribute('transform', `rotate(${target.angle} 60 62)`)
    }

    animate(target, {
      angle: baseAngle,
      duration: 1800,
      ease: 'outElastic(1, .6)',
      onUpdate: apply,
      onComplete: () => {
        target.angle = baseAngle - wobble
        animate(target, {
          angle: baseAngle + wobble,
          duration: 1600 + Math.random() * 600,
          ease: 'inOutSine',
          alternate: true,
          loop: true,
          onUpdate: apply,
        })
      },
    })
  }, 0.5)

  const ticks = Array.from({ length: 11 }, (_, i) => -90 + i * 18)

  return (
    <div className="gauge" ref={ref}>
      <svg viewBox="0 0 120 78" className="gauge-svg" role="img" aria-label={`${lang.name}: ${lang.level}`}>
        <path
          d="M 14 62 A 46 46 0 0 1 106 62"
          fill="none"
          stroke="#3a2c14"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 14 62 A 46 46 0 0 1 106 62"
          fill="none"
          stroke="#c9962e"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
        {ticks.map((angle) => (
          <line
            key={angle}
            x1="60"
            y1="22"
            x2="60"
            y2="28"
            stroke="#e9d8b4"
            strokeWidth="2"
            opacity="0.75"
            transform={`rotate(${angle} 60 62)`}
          />
        ))}
        <g ref={needleRef} transform="rotate(-90 60 62)">
          <line x1="60" y1="62" x2="60" y2="26" stroke="#d9534f" strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle cx="60" cy="62" r="6" fill="#c9962e" stroke="#3a2c14" strokeWidth="2" />
      </svg>
      <strong className="gauge-name">{lang.name}</strong>
      <span className="gauge-level">{lang.level}</span>
    </div>
  )
}

export function Education() {
  const { content } = useLanguage()
  const { education, languages, ui } = content

  const ref = useReveal<HTMLDivElement>((el) => {
    const tl = createTimeline({ defaults: { ease: 'out(3)' } })
    tl.add(el.querySelectorAll('.education-card'), {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900,
    }).add(
      el.querySelectorAll('.gauge'),
      { opacity: [0, 1], translateY: [24, 0], duration: 700, delay: stagger(200) },
      '-=400',
    )
  })

  return (
    <section className="section" id="formacao">
      <SectionTitle
        ordinal={ui.sections.education.ordinal}
        title={ui.sections.education.title}
      />
      <div className="education-grid" ref={ref}>
        <article className="education-card parchment rivets">
          <span className="stamp" aria-hidden="true">
            {ui.educationStamp}
          </span>
          <span className="timeline-period">{education.period}</span>
          <h3>{education.degree}</h3>
          <p className="timeline-company">{education.school}</p>
          <p className="education-detail">{education.detail}</p>
        </article>
        <div className="gauges metal-panel rivets">
          <h3 className="gauges-title">{ui.gaugesTitle}</h3>
          <div className="gauges-row">
            {languages.map((lang) => (
              <Gauge key={lang.name} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
