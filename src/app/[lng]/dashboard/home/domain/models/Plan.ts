import { NetworkType } from "@/models/types/NetworkType"

export interface Plan {
  id: string | null
  name?: string
  description: string
  type: 'Follower' | 'Like' | 'Plan'
  price: number
  config: {
    type: 'Follower' | 'Like' | 'Plan'
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
      options?: string[]
    }
  }
}