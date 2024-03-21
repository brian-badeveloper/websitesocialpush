import { LanguagesType } from '@/models/i18n'

export interface SearchParams {
  params: Params
}

export interface Params {
  lng: LanguagesType
  slug?: string
}

export interface LayoutParams extends SearchParams {
  children: React.ReactNode
}