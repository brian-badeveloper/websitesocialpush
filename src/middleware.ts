import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NAME_COOKIE } from './helpers/nameCookie'
import sessionToken from './helpers/sessionToken'

import { i18n } from '../i18n-config'
import { getLocale, verifyLang } from './helpers/language'
import { verifyAuth } from './helpers/middlewares/auth'

export function middleware (request: NextRequest) {
  const token = request.cookies.get(NAME_COOKIE)
  const path = request.nextUrl.pathname

  // validate user authentication
  const auth = verifyAuth(request)
  if(auth) return auth

  // validate language default
  const lang = verifyLang(request)
  if(lang) return lang


  return NextResponse.next()
}

export const config = {
  matcher: [
    // Matcher ignoring `/_next/` and `/api/`
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
    '/:lng/',
    '/login',
    '/:lng/login',
    '/register',
    '/:lng/register',
    '/dashboard/:path*',
    '/:lng/dashboard/:path*',
  ]
}