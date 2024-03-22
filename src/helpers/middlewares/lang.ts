import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '../../../i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const getLocale = (request: NextRequest): string | undefined => {
  const lang = request.cookies.get('lang')
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  if (!lang) {
    request.cookies.set('lang', locale)
  }

  return lang ? lang.value : locale
}

const verifyLang = (request: NextRequest): NextResponse<unknown> | undefined => {
  const path = request.nextUrl.pathname
  const response = getLocale(request)

  // if an allowed language is found
  const pathnameIsMissingLocale = i18n.locales.find(
    (locale) =>
      path.startsWith(`/${locale}`) && path.includes(`/${locale}`) ,
  )

  // if no language found
  if (!pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/${response}/`, request.url))
  }
  
  // if the language does not match the language saved in the cookie
  if (pathnameIsMissingLocale !== response) {
    const current = path + '/'
    const urlNew = current.split(`/${pathnameIsMissingLocale}/`).join(`/${response}/`).slice(0, -1)
    return NextResponse.redirect(new URL(urlNew, request.url))
  }
}

export {
  getLocale,
  verifyLang
}