import { cookies } from 'next/headers'
import { NAME_COOKIE } from './nameCookie'

export function getTokenServerComponent () {
  const cookieStore = cookies()
  return cookieStore.get(NAME_COOKIE)
}
