import { LoginActionType } from '@/models/types/LoginType'
import { AuthReducerProps, AuthReducerAction } from './authReducerProps'

export const authReducer = (state:AuthReducerProps, action:AuthReducerAction): AuthReducerProps => {
  switch (action.type) {
    case LoginActionType.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      }
    
    case LoginActionType.logout:
      return {
        logged: false
      }

    default:
      return state
  }
}

