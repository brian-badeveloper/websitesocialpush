import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SiteContext } from '@/context/SiteContext'
import { ProductSingle } from '@/context/cartReducerProps'
import { CheckoutParams } from '@/app/[lng]/cart/domain/models/CheckoutParams'
import HttpCheckout from '../../../domain/services/HttpCheckout'
import { onRedirectExternal } from '@/helpers/redirectCustom'
import getLanguage, { LanguagesType } from '@/models/i18n'

const useCartBarItem = (lng: LanguagesType) => {

  const { getState,getUser, cartState, truncateCart, onAlert, onAlertStatus } = useContext(SiteContext)
  const [buttonState, setButtonState] =  useState(true)
  const router = useRouter()
  const translate = getLanguage(lng)

  useEffect(() => {
    onAlertStatus(false)
  },[lng])

  const format = (num:number) => {
    const nf = new Intl.NumberFormat("en-US", {style: 'currency', currency: 'USD'})
    return !Number.isNaN(nf.format(num)) ? nf.format(num) : num
  }

  const onCheckout = () => {
    const auth = getState()
    const user = getUser()

    if (!auth.user) {
      onAlert({status: true, messages: [translate.MESSAGE.LOGIN_REQUIRED], type: 'danger'})
      localStorage.setItem('checkout',JSON.stringify('/cart'))

      setTimeout(() => {
        onAlert({status: false, messages: [''], type: 'danger'})
        router.push(`/${lng}/login`)
      }, 2500);

      return false
    }

    const products:ProductSingle[] = cartState.products.map(item => ({
      id: item.id, 
      quantity: item.quantity,
      price: item.price
    }))
    
    const params: CheckoutParams = {
      name: "Order SocialPush",
      description: "",
      type: "landing",
      config: {
        products: [...products as ProductSingle[]],
        user: user.id as string
      }
    }

    onAlert({status: true, messages: [translate.MESSAGE.VALID_AWAIT], type: 'info'})

    const { checkout } = HttpCheckout()

    checkout(params)
    .then((data) => {

      if (data.response) {
        onAlert({status: true, messages: [translate.MESSAGE.TRANSACTION_SUCCESS], type: 'success'})
  
        const url = data.response?.url ?? 'https://google.com'
  
        truncateCart()
        return onRedirectExternal(url)
      }

      onAlert({status: true, messages: [translate.MESSAGE.TRANSACTION_ERROR], type: 'error'})
    })
    .catch((error) => {
      onAlert({status: true, messages: [translate.MESSAGE.TRANSACTION_FAILED], type: 'info'})
    })
  }

  const onDisableButton = (status = false) => {
    setButtonState(status)
  }

  return {
    format,
    cartState,
    truncateCart,
    buttonState,
    onDisableButton,
    onCheckout,
    translate
  }
}

export default useCartBarItem