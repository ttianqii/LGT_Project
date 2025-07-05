import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './next-intl.config.mjs';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!_next|favicon.ico|img|flags|locales|api).*)'],
};
