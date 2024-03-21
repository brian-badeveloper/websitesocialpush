export interface ScrollLinkActive {
  [x: string]: ScrollLink
}

export interface ScrollLink {
  top: number
  height: number
  bottom: number
  name?: string
  type: 'custom' | 'normal'
  content: ContentScroll
}

export interface ContentScroll  {
  top?: number
  height?: number
  bottom?: number
};