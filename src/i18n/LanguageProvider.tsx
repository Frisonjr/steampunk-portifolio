import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Lang } from '../data/resume'
import { LanguageContext, resolveInitialLang } from './context'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(resolveInitialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = content[lang].ui.documentTitle

    // Mantém ?lang= na URL para que o link copiado já carregue o idioma certo.
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      content: content[lang],
      toggle: () => setLang((current) => (current === 'pt' ? 'en' : 'pt')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
