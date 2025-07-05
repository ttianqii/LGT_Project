import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'th', 'zh'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  const usedLocale = locale || 'en';
  return {
    locale: usedLocale,
    messages: (await import(`./messages/${usedLocale}.json`)).default
  };
});
