import { createTimeline, stagger } from 'animejs'
import { type Job } from '../data/resume'
import { useLanguage } from '../i18n/useLanguage'
import { useReveal } from '../hooks/useReveal'
import { Gear } from './Gear'
import { SectionTitle } from './SectionTitle'

function TimelineItem({ job, index }: { job: Job; index: number }) {
  const fromLeft = index % 2 === 0

  const ref = useReveal<HTMLDivElement>((el) => {
    const tl = createTimeline({ defaults: { ease: 'out(3)' } })
    tl.add(el.querySelectorAll('.timeline-node'), {
      opacity: [0, 1],
      scale: [0, 1],
      rotate: [-120, 0],
      duration: 700,
      ease: 'outBack',
    })
      .add(
        el.querySelectorAll('.timeline-card'),
        {
          opacity: [0, 1],
          translateX: [fromLeft ? -60 : 60, 0],
          duration: 850,
        },
        '-=350',
      )
      .add(
        el.querySelectorAll('.timeline-card li'),
        { opacity: [0, 1], translateY: [10, 0], duration: 420, delay: stagger(80) },
        '-=450',
      )
  }, 0.25)

  return (
    <div className={`timeline-item ${fromLeft ? 'from-left' : 'from-right'}`} ref={ref}>
      <div className="timeline-node" aria-hidden="true">
        <Gear size={44} teeth={10} spokes={4} color="#c9962e" />
      </div>
      <article className="timeline-card parchment rivets">
        <header>
          <span className="timeline-period">{job.period}</span>
          <h3>{job.role}</h3>
          <p className="timeline-company">
            {job.company} · <em>{job.location}</em>
          </p>
        </header>
        <ul>
          {job.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export function Experience() {
  const { content } = useLanguage()
  const { jobs, ui } = content

  return (
    <section className="section" id="experiencia">
      <SectionTitle
        ordinal={ui.sections.experience.ordinal}
        title={ui.sections.experience.title}
      />
      <div className="timeline">
        <div className="timeline-pipe" aria-hidden="true" />
        {jobs.map((job, i) => (
          <TimelineItem key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}
