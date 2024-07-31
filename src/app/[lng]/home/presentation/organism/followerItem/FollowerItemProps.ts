import { LanguageParams } from "@/models/interfaces/LanguageProps"
import { NetworkType } from "@/models/types/NetworkType"

export interface FollowerItemParams extends LanguageParams {
  item: FollowerItemProps
}

export interface FollowerItemProps {
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