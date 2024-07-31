export interface DataUserInJwt {
  id: string,
  email: string,
  name: string,
  firstName?: string,
  lastName?: string,
  tpId?: string | number,
  country: string,
  iat: number,
  exp: number
}