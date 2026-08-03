import { useLanguage } from '../i18n/useLanguage'
import { smoothScrollTo } from '../utils/scroll'
import { Flag } from './Flag'
import { Gear } from './Gear'
import { PocketWatch } from './PocketWatch'

export function Nav() {
  const { lang, content, toggle } = useLanguage()
  const { navLinks, langButton } = content.ui

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    smoothScrollTo(hash)
  }

  return (
    <nav className="nav">
      <a href="#inicio" className="nav-brand" onClick={(e) => handleAnchor(e, '#inicio')}>
        <Gear size={30} teeth={10} spokes={4} className="nav-gear" />
        <span>J. Frison Jr.</span>
      </a>
      <div className="nav-right">
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleAnchor(e, link.href)}>
              {link.label}
            </a>
          ))}
        </div>
        <PocketWatch size={36} />
        <button type="button" className="lang-button" onClick={toggle} aria-label={langButton.aria}>
          <Flag country={lang === 'pt' ? 'us' : 'br'} />
          <span>{langButton.label}</span>
        </button>
      </div>
    </nav>
  )
}
