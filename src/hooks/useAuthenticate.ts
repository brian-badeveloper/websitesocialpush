import React, { useContext, useEffect } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { useRouter, usePathname } from 'next/navigation'
import { getLang } from '@/helpers/language'
import getLanguage from '@/models/i18n'

const useAuthenticate = () => {
  const { logout, authValidate, onAlert } = useContext(SiteContext)
  const router = useRouter()
  const path = usePathname()
  
  const verifyAuth = () => {
      const lang = getLang()
      const translate = getLanguage(lang)
      const pathNotAllowed = [
        '/login',
        `/${lang}/login`
      ]
      
      if (!authValidate()) {
        logout()
        setTimeout(() => {
          onAlert({status: true, messages: [translate.MESSAGE.LOGIN_EXPIRED], type: 'warning'})
        }, 1000);
    
        setTimeout(() => {
          if (!pathNotAllowed.includes(path)) {
            router.replace(`/${lang}/login`)
          }

          onAlert({status: false, messages: [], type: 'danger'})
        }, 3500);
      }
  }

  return {
    verifyAuth
  }
}

export {
  useAuthenticate 
}