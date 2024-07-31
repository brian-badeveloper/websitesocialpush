import { LoginType } from '@/models/types/LoginType'

export interface AuthReducerProps {
 logged: boolean
 user?: User
}

export interface AuthReducerAction {
  type: LoginType
  payload?: User
}

export interface User {
  name: string
  firstName?: string
  lastName?: string
  email: string
  tpId?: string | number
  token: string
}

export interface UserAll extends User {
  id?: string
}