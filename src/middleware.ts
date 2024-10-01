import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales } from './lib/navigation'

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always',
  locales
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
}
