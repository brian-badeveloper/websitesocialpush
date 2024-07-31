import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { NetworkType } from "@/models/types/NetworkType"

export interface LikeItemDashboardParams extends LanguageParams {
  item: LikeItemDashboardProps
}

export interface LikeItemDashboardProps {
  senior?: boolean
  stars?: number
  id: string | null
  name?: string
  description: string
  type: 'Like'
  price: number
  config: {
    type: 'Like'
    priority: number
    name_social: NetworkType
    price: number
    symbol: string
    currency: string
  }
  i18n: {
    en: {
      name?: string
      scope: string
      title: string
      text?: string
      subText?: string
      type_time?: string    
      options: string[]
    }
    es: {
      name?: string
      scope: string
      title: string
      text?: string
      subText?: string
      type_time?: string    
      options: string[]
    }
  }
}