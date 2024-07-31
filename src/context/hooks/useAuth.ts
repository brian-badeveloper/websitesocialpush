import { useReducer } from 'react'
import { AuthReducerProps, User, UserAll } from '../authReducerProps'
import { LoginActionType } from '@/models/types/LoginType'
import { authReducer } from '../authReducer'
import Cookies from 'js-cookie'
import { NAME_COOKIE } from '@/helpers/nameCookie'
import sessionToken from '@/helpers/sessionToken'

const initState: AuthReducerProps = {
  logged: false,
  user: undefined
}

const init = () => {
  if (typeof window !== 'undefined') {
    const token = Cookies.get(NAME_COOKIE)
    
    const data = localStorage.getItem('user') || ""
    const user = token && !sessionToken.getTokenExpired(token) && typeof data === 'string' ? JSON.parse( data ) : "";

    return {
      logged: !!user,
      user: user
    }
  } else {
    return initState
  }
}

const useAuth = () => {

  const [authState, dispatch] = useReducer(authReducer, initState, init)

  const getState = () => {
    return {...authState}
  }

  const getUser = () => {
    const token = Cookies.get(NAME_COOKIE)
    const data = token && !sessionToken.getTokenExpired(token) ? sessionToken.decodeToken(token) : "";
    
    return {...authState.user, id: data && data.id ? data.id : ''} as UserAll
  }

  const login = ({name, firstName, lastName, email, tpId, token}: User) => {
    const user = {
      name,
      firstName,
      lastName,
      email,
      tpId,
      token
    }

    const action = {
      type: LoginActionType.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user))
    Cookies.set(NAME_COOKIE, token)

    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    Cookies.remove(NAME_COOKIE)

    const action = {
      type: LoginActionType.logout
    }

    dispatch(action)
  }
  
  const authValidate = () => {
    const token = Cookies.get(NAME_COOKIE)
    
    if (token) {
      return !sessionToken.getTokenExpired(token)
    }

    if (!token && "user" in localStorage) {
      return false
    }

    return true
  }

  return {
    getState,
    getUser,
    login,
    logout,
    authValidate
  }
}

export default useAuth