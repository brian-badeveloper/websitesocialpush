import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { NAME_COOKIE } from '@/helpers/nameCookie'
import Cookies from 'js-cookie'
import sessionToken from '../sessionToken'
import { getLocale } from '../language'

const verifyAuth = (request: NextRequest): NextResponse<unknown> | undefined => {
  const token = request.cookies.get(NAME_COOKIE)
  const path = request.nextUrl.pathname

  const locale = getLocale(request)

  if (path.includes('/login') || path.includes('/register')) {
    if (token && !sessionToken.getTokenExpired(token.value)) {
      return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url))
    }
    const response = NextResponse.next()
    response.cookies.delete(NAME_COOKIE)
  } else if(path.includes('/dashboard')){
    if (!token || sessionToken.getTokenExpired(token.value)) {
      const response = NextResponse.redirect(new URL(`/${locale}/login`, request.url))
      response.cookies.delete(NAME_COOKIE)
      return response
    }
  }
}

export {
  verifyAuth
}