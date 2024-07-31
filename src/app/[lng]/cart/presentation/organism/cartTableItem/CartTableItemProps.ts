import { LanguageParams } from "@/models/interfaces/LanguageProps"

export interface CartTableItemProps extends LanguageParams {
  id: string
  name?: string
  name_social: string
  i18n: {
    en: {
      name?: string
      scope: string
    }
    es: {
      name?: string
      scope: string
    }
  }
  price: number
  subtotal: number
  quantity: number
  position?: number
}