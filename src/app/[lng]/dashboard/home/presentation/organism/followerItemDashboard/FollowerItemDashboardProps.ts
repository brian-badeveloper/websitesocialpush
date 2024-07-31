import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { NetworkType } from "@/models/types/NetworkType"

export interface FollowerItemDashboardParams extends LanguageParams {
  item: FollowerItemDashboardProps
}

export interface FollowerItemDashboardProps {
  senior?: boolean
  stars?: number
  id: string | null
  name?: string
  description: string
  type: 'Follower'
  price: number
  config: {
    type: 'Follower'
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