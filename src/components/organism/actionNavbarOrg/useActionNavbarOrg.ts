import { MouseEvent, MouseEventHandler, useContext, useEffect, useState } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { useRouter } from 'next/navigation'

const useActionNavbarOrg = (cartNumer: number = 0) => {
  const { language, getLanguages, changeLang, getState, logout, onAlert, onAlertStatus, cartState, quantityCart } = useContext(SiteContext)
  const [quantity, setQuantity] = useState<number>(cartNumer)
  const router = useRouter()
  const translate = getLanguages()
	const getStateLogin = getState()

  useEffect(() => {
    onAlertStatus(false)
  },[language])

  useEffect(() => {
    setQuantity(quantityCart)
  },[cartState])

  const onLogout:MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault()
		logout()
    onAlert({status: true, messages: [translate.MESSAGE.LOGIN_CLOSE], type: 'success'})
    
    setTimeout(() => {
      router.replace(`/${language}/`)
      onAlert({status: false, messages: [], type: 'danger'})
    }, 2000);
	}

  return {
    language,
    getLanguages,
    changeLang,
    onLogout,
    translate,
    getStateLogin,
    quantity
  }
}

export default useActionNavbarOrg