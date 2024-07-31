import { NetworkType } from "@/models/types/NetworkType"

export interface QuoteProps {
  text: string
  type: NetworkType
  comment: number | string
  likes: number | string
  followers: number | string
}