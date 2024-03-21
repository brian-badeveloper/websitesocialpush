import { DataUserInJwt } from '@/models/interfaces/DataUserInJwt'
import { isExpired, decodeToken } from 'react-jwt'

class SessionToken {
  decodeToken = (token: string): DataUserInJwt | null => decodeToken(token)

  getTokenExpired = (token: string) => isExpired(token)
}

const sessionToken = new SessionToken()
export default sessionToken
