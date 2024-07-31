import { MouseEvent, MouseEventHandler, useContext, useEffect, useState } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { useRouter } from 'next/navigation'
import getLanguage, { LanguagesType } from '@/models/i18n'

const useActionNavbarOrg = (lng: LanguagesType, cartNumer: number = 0) => {
  const { getState, logout, onAlert, onAlertStatus, cartState, quantityCart } = useContext(SiteContext)
  const [quantity, setQuantity] = useState<number>(cartNumer)
  const router = useRouter()
  const translate = getLanguage(lng)
	const getStateLogin = getState()

  useEffect(() => {
    onAlertStatus(false)
  },[lng])

  useEffect(() => {
    setQuantity(quantityCart)
  },[cartState])

  const onLogout:MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault()
		logout()
    onAlert({status: true, messages: [translate.MESSAGE.LOGIN_CLOSE], type: 'success'})
    
    setTimeout(() => {
      router.replace(`/${lng}/`, {scroll: false})
      onAlert({status: false, messages: [], type: 'danger'})
    }, 2000);
	}

  return {
    onLogout,
    translate,
    getStateLogin,
    quantity
  }
}

export default useActionNavbarOrg