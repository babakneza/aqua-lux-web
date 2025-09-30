export type Locale = 'fa' | 'en';

export interface LocaleText {
  fa: string;
  en: string;
}

export const defaultLocale: Locale = 'fa';

export const locales: Locale[] = ['fa', 'en'];

export const localeNames: Record<Locale, string> = {
  fa: 'فارسی',
  en: 'English',
};

export const isRTL = (locale: Locale): boolean => locale === 'fa';

export const getDirection = (locale: Locale): 'rtl' | 'ltr' => 
  isRTL(locale) ? 'rtl' : 'ltr';
