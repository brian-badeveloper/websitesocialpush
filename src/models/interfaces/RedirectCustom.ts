import { LanguagesType } from "@/models/i18n"

export interface RedirectCustomLinks  {
  tag: string
  link: string
  lng?: string | LanguagesType
}

export interface Links {
  lng: string | LanguagesType
  defaultLang: string | LanguagesType
  link: string
}