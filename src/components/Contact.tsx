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
              {/* <a href={`mailto:${profile.email}`} className="brass-button">
                {ui.contactEmailButton}
              </a> */}
              <a
                href={profile.linkedin}
                className="brass-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ui.linkedinAria}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8.1h4.2V23H.4V8.1zm7.1 0h4.02v2.03h.06c.56-1.06 1.93-2.18 3.97-2.18 4.25 0 5.03 2.8 5.03 6.44V23h-4.19v-7.32c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.87V23H7.5V8.1z" />
                </svg>
                {ui.contactLinkedInButton}
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
