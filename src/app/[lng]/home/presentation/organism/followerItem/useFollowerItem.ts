import { useContext, useEffect } from 'react'
import { SiteContext } from '@/context/SiteContext'
import { FollowerItemProps } from './FollowerItemProps'

const useFollowerItem = (followerItem: FollowerItemProps) => {
  const { language, getLanguages, addCart, onAlert, onAlertStatus } = useContext(SiteContext)
  const translate = getLanguages()

  useEffect(() => {
    onAlertStatus(false)
  },[language])

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