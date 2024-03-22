export interface CountryParams {
  prefix: string | number
  prefixWithoutMore: string
  name: string
  code: string
  emoji?: string
}

export interface Countries {
  name: string
  dialCode: string
  isoCode: string
  flag: string
}

export interface Country {
  name: string
  code: string
  prefix: string
  prefixWithoutMore: string
  flag: flag
  ip?: string
}

export interface flag {
  emoji: string
  emoji_circle: string
  emoji_border_circular: string
}