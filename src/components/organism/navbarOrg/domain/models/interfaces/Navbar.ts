import { NetworkType } from "@/models/types/NetworkType"

export interface ItemOptionDropdown extends ItemOption {
  options: ItemOption[]
}

export interface ItemOption {
  text: string
  link: string
  tag: string
  name: string
  network?: NetworkType
	type?: 'followers' | 'likes' | 'plans'
}

export interface ItemOptionLabel {
  [x: string]: string | number | boolean
}