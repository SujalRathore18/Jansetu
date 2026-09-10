'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { en, type Translation } from './en'
import { hi } from './hi'

type Language = 'en' | 'hi'
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: Translation }>({ language: 'en', setLanguage: () => {}, t: en })
export function LanguageProvider({ children }: { children: React.ReactNode }) { const [language, setLanguageState] = useState<Language>('en'); useEffect(() => { const saved = window.localStorage.getItem('jansetu-language') as Language | null; if (saved === 'hi' || saved === 'en') setLanguageState(saved) }, []); const setLanguage = (next: Language) => { setLanguageState(next); window.localStorage.setItem('jansetu-language', next) }; const value = useMemo(() => ({ language, setLanguage, t: language === 'hi' ? hi : en }), [language]); return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider> }
export const useLanguage = () => useContext(LanguageContext)
