import { useContext, useEffect } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { FollowerItemProps } from './FollowerItemProps'
import getLanguage, { LanguagesType } from '@/models/i18n'

const useFollowerItem = (lng: LanguagesType,followerItem: FollowerItemProps) => {
  const { addCart, onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const language = lng

  useEffect(() => {
    onAlertStatus(false)
  },[lng])

  const onAddProduct = () => {
    addCart({
      id: followerItem.id ?? '', 
      name: followerItem.name ?? '',
      name_social: followerItem.config.name_social,
      i18n: followerItem.i18n,
      price: followerItem.config.price,
      subtotal: followerItem.config.price,
      quantity: 1
    })
    onAlert({status: true, messages: [translate.MESSAGE.ADD_PRODUCT], type: 'success'})
  }
  
  return {
    language,
    onAddProduct,
    translate
  }
}

export default useFollowerItem