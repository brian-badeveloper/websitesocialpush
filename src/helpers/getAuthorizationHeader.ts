import Cookie from 'js-cookie'
import { NAME_COOKIE } from './nameCookie'

export function getAuthorizationHeader () {
  let currentUser = Cookie.get(NAME_COOKIE)
  return {
    Authorization: currentUser ? `Bearer ${currentUser}` : ''
  }
}
