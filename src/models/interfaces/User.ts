export interface User {
  name: string
  firstName: string
  lastName: string
  email: string
  password: string
  ip: string
  description?: string
  phone: string | number
  phoneCode?: string
  country?: string
  config: Config
}

interface Config {
  [x: string] : string | number | boolean
}