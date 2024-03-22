// Types
export type SeoProps = {
  description?: string
  lang?: string
  title: string
}

export type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

export type PropertyMetaObj = {
  property: string
  content: string
}

export type NameMetaObj = {
  name: string
  content: string
}