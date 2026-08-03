import { createTimeline, stagger } from 'animejs'
import { useLanguage } from '../i18n/useLanguage'
import { useReveal } from '../hooks/useReveal'
import { Gear } from './Gear'
import { SectionTitle } from './SectionTitle'

export function Skills() {
  const { content } = useLanguage()
  const { skillGroups, ui } = content

  const ref = useReveal<HTMLDivElement>((el) => {
    const tl = createTimeline({ defaults: { ease: 'out(3)' } })
    tl.add(el.querySelectorAll('.skill-card'), {
      opacity: [0, 1],
      translateY: [50, 0],
      rotate: [1.5, 0],
      duration: 850,
      delay: stagger(140),
    }).add(
      el.querySelectorAll('.skill-tag'),
      { opacity: [0, 1], translateY: [12, 0], duration: 450, delay: stagger(28) },
      '-=500',
    )
  }, 0.12)

  return (
    <section className="section" id="habilidades">
      <SectionTitle ordinal={ui.sections.skills.ordinal} title={ui.sections.skills.title} />
      <div className="skills-grid" ref={ref}>
        {skillGroups.map((group, i) => (
          <article key={group.title} className="skill-card blueprint">
            <span className="fig-label">Fig. {['I', 'II', 'III', 'IV'][i] ?? i + 1}</span>
            <header className="skill-card-header">
              <Gear
                size={40}
                teeth={9 + i}
                spokes={4}
                className="skill-card-gear"
                color="#9fc3e8"
              />
              <h3>{group.title}</h3>
            </header>
            <ul className="skill-tags">
              {group.items.map((item) => (
                <li key={item} className="skill-tag">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
