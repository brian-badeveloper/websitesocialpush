export interface Lead {
  access_token: string
  config: Config
}

interface Config {
  [x:string] : string | number | boolean
}