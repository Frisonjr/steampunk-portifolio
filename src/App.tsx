import { LanguageProvider } from './i18n/LanguageProvider'
import { useLanguage } from './i18n/useLanguage'
import { ScrollGauge } from './components/ScrollGauge'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

function Site() {
  const { lang } = useLanguage()

  return (
    // A key remonta as seções ao trocar o idioma, replays das animações inclusos.
    <div key={lang}>
      <div className="page-frame" aria-hidden="true">
        <span className="frame-screw screw-tl" />
        <span className="frame-screw screw-tr" />
        <span className="frame-screw screw-bl" />
        <span className="frame-screw screw-br" />
      </div>
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <ScrollGauge />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
