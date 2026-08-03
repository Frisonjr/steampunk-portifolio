import { createContext } from 'react'
import { content, type Lang, type SiteContent } from '../data/resume'

export interface LanguageContextValue {
  lang: Lang
  content: SiteContent
  toggle: () => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pt',
  content: content.pt,
  toggle: () => {},
})

export function resolveInitialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get('lang')
  if (param === 'pt' || param === 'en') return param

  const stored = localStorage.getItem('lang')
  if (stored === 'pt' || stored === 'en') return stored

  return 'pt'
}
