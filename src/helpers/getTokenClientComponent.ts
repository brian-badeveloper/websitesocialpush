import Cookie from 'js-cookie'
import { NAME_COOKIE } from './nameCookie'

export function getTokenClientComponent () {
  return Cookie.get(NAME_COOKIE)
}
