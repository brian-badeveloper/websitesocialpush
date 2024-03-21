import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LanguagesType } from '@/models/i18n'
import { LanguageProps } from '@/models/interfaces/LanguageProps'
import Cookies from 'js-cookie'

import { i18n } from '../../i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const InitializeLanguage = () => {
  const lang = getLang()
  Cookies.set('lang', lang)
}

const changeLanguage = (lang: LanguagesType) => {
  Cookies.set('lang', lang)
}

const getLang = () => {
  const lng = Cookies.get('lang')
  const lang = lng && typeof lng === 'string' ? lng : "es"

  return lang as LanguagesType
}

const validateLangUrl = (lang: LanguagesType) => {
  const lng = getLang()
  const current = window.location.href + '/'
  const newUrl = current.split(`/${lang}/`).join(`/${lng}/`).slice(0, -1)

  if (current.slice(0, -1) !== newUrl) {
    return window.location.href = newUrl
  }
}

const getLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

const verifyLang = (request: NextRequest): NextResponse<unknown> | undefined => {
  const path = request.nextUrl.pathname

  const pathnameIsMissingLocale = i18n.locales.find(
    (locale) =>
      path.startsWith(`/${locale}`) && path.includes(`/${locale}`) ,
  );

  if (!pathnameIsMissingLocale) {
    const response = getLocale(request)
    return NextResponse.redirect(new URL(`/${response}/`, request.url))
  }
}

export {
  InitializeLanguage,
  changeLanguage,
  getLang,
  validateLangUrl,
  getLocale,
  verifyLang
}