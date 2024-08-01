export interface Profile {
  name?: string
  firstName?: string
  lastName?: string
  email?: string
}

export interface dataProfile {
  email?: string
  client?: string
  name?: string
  firstName?: string
  lastName?: string
  description?: string
  password?: string
  config?: dataOptional
  ip?: string
  numericId?: number
  tpId?: string | number
  country?: string
  id?: string
}

interface dataOptional {
  [x: string]: string | number | boolean | undefined
}