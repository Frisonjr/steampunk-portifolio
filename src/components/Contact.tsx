import { animate, createTimeline, stagger } from 'animejs'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useLanguage } from '../i18n/useLanguage'
import { useReveal } from '../hooks/useReveal'
import { Gear } from './Gear'
import { SectionTitle } from './SectionTitle'

export function Contact() {
  const { content } = useLanguage()
  const { profile, ui } = content

  const ref = useReveal<HTMLDivElement>((el) => {
    const tl = createTimeline({ defaults: { ease: 'out(3)' } })
    tl.add(el.querySelectorAll('.contact-card'), {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 900,
    })
      .add(
        el.querySelectorAll('.contact-machine'),
        { opacity: [0, 1], translateX: [-50, 0], duration: 900 },
        '-=600',
      )
      .add(
      el.querySelectorAll('.contact-actions a'),
      { opacity: [0, 1], scale: [0.85, 1], duration: 600, delay: stagger(140) },
      '-=400',
    )

    const gear = el.querySelector('.contact-gear')
    if (gear) {
      animate(gear, { rotate: 360, duration: 18000, ease: 'linear', loop: true })
    }

    // Brasas da fornalha subindo atrás do painel
    el.querySelectorAll('.ember').forEach((ember, i) => {
      animate(ember, {
        translateY: { from: 0, to: -150 - (i % 3) * 40 },
        translateX: { from: 0, to: i % 2 === 0 ? 26 : -30 },
        scale: { from: 1, to: 0.2 },
        opacity: [
          { to: 0.85, duration: 500 },
          { to: 0, duration: 2200 },
        ],
        duration: 2700 + i * 420,
        delay: i * 560,
        loop: true,
        ease: 'inOutSine',
      })
    })
  })

  return (
    <section className="section" id="contato">
      <SectionTitle ordinal={ui.sections.contact.ordinal} title={ui.sections.contact.title} />
      <div ref={ref}>
        <div className="furnace" aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} className="ember" style={{ left: `${8 + i * 10.5}%` }} />
          ))}
        </div>
        <div className="contact-layout">
          <div className="contact-machine" aria-hidden="true">
            <DotLottieReact src={`${import.meta.env.BASE_URL}lottie/mashina.lottie`} loop autoplay />
          </div>
          <div className="contact-card metal-panel rivets">
            <Gear size={72} teeth={12} spokes={5} className="contact-gear" color="#8a6a2f" />
            <h3>{ui.contactTitle}</h3>
            <p>{ui.contactText}</p>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="brass-button">
                {ui.contactEmailButton}
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} — {ui.footerNote}
        </p>
      </footer>
    </section>
  )
}
