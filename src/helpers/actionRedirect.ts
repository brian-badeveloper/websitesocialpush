import React from 'react'
import { onActionRedirect, onDetectRedirect, onLink, onRedirect } from "./redirectCustom"
import { LanguagesType } from '@/models/i18n'

const actionRedirect = (lng: string | LanguagesType ) => {

  const onAction = (lang: string | LanguagesType, tag: string, link: string) => {
    const RouteValid = onRedirect({
      tag,
      link: onLink({lng: lang, defaultLang: lng, link})
    })
    
    if (RouteValid.current !== RouteValid.full_route) {
      onActionRedirect('layout')
      setTimeout(() => {
        return window.location.href = RouteValid.link
      }, 500)
    } else {
      onDetectRedirect()
    }
  }

  return {
    onAction
  }
}

export default actionRedirect