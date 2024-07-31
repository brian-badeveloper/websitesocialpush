import { BackgroundType } from "@/models/types/BackgroundType"
import { NetworkType } from "@/models/types/NetworkType"

export interface CardHeaderProps {
  title: string,
  bgStyle?: BackgroundType
  type: 'color' | 'withoutColor'
  size: number
  orientation?: 'left' | 'center' | 'right'
  network?: NetworkType
  networkText?: string
}