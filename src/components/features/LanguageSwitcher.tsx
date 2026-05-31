import { useI18n, Language } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-200 text-sm font-body font-medium text-mahogany"
      aria-label="Switch language"
    >
      <Globe className="size-4 text-gold" />
      <span className="uppercase tracking-wide">
        {language === 'en' ? 'RU' : 'EN'}
      </span>
    </button>
  );
}
