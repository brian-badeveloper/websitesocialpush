export interface ProductGlobal {
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
  status?: number
  price: number
  subtotal: number
  quantity: number
  date?: string
  payment?: string
  position?: number
}