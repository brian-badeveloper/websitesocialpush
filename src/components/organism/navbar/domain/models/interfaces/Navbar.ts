export interface ItemOptionDropdown extends ItemOption {
  options: ItemOption[]
}

export interface ItemOption {
  text: string
  link: string
  tag: string
  name: string
}

export interface ItemOptionLabel {
  [x: string]: string | number | boolean
}