import { useLocale } from '@/contexts/LocaleContext';
import { translations } from '@/data/translations';
import { LocaleText } from '@/lib/i18n';

export const useTranslation = () => {
  const { locale } = useLocale();

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[locale];
  };

  const tObj = (obj: LocaleText | string | number): string => {
    if (typeof obj === 'string' || typeof obj === 'number') {
      return String(obj);
    }
    return obj[locale];
  };

  return { t, tObj };
};
