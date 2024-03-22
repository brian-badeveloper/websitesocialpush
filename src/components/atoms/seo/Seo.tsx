import React, { useEffect } from 'react'

import { SeoProps } from './SeoProps'
import { headerTags, headerTagsUpdate } from '@/helpers/headerTags'

export function Seo({
  description = "",
  lang = "en",
  title,
}: SeoProps) {
  
  useEffect(() => {
    headerTags(
      title,
      description,
    )
  },[])

  useEffect(() => {
    headerTagsUpdate(
      title,
      description,
    )
  },[lang])
  
  return (
    <></>
  )
}
