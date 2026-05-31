import { useState, useEffect, ReactNode } from 'react';
import { I18nContext, Language, translations } from '@/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('afrileather-lang');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('afrileather-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}
