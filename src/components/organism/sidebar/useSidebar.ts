import React, { MouseEventHandler, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

import { SiteContext } from '@/context/SiteContext'
import { SidebarProps } from './SidebarProps';
import getLanguage from '@/models/i18n';

const useSidebar = ({lng, defaultLang, onChange}: SidebarProps) => {
  const { logout, error, onAlert, onAlertStatus } = useContext(SiteContext)
	const [statusSidebar, setStatusSidebar] = useState<boolean>(false)
  const router = useRouter()
	const translate = getLanguage(lng)
	
	const onChangeStatus = () => {
		setStatusSidebar(!statusSidebar);
    onChange()
	}

  const onLogout:MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault()
		logout()
    onAlert({status: true, messages: [translate.MESSAGE.LOGIN_CLOSE], type: 'success'})
    
    setTimeout(() => {
      router.replace(`/${lng}/`)
      onAlert({status: false, messages: [], type: 'danger'})
    }, 2000);
	}

  return {
    statusSidebar,
    onChangeStatus,
    translate,
    onLogout
  }
}

export default useSidebar
