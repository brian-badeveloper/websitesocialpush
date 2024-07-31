import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { FollowerItemCustomInput, FollowerItemCustomProps } from './FollowerItemCustomProps';
import { SiteContext } from '@/context/SiteContext';
import { Errors } from '@/helpers/validateForm';
import { PLAN_CUSTOM_FORM_PARAMS } from '@/models/schemas/validateForm';
import { labelForm } from '@/models/interfaces/ValidateForm';
import getLanguage, { LanguagesType } from '@/models/i18n';

const useFollowerItemCustom = (lng: LanguagesType,initialForm:FollowerItemCustomInput = '', followerItem: FollowerItemCustomProps) => {
  const [input, setInput] = useState<FollowerItemCustomInput>(initialForm);
  const { addCart, onAlertStatus, onAlert } = useContext(SiteContext)
  const translate = getLanguage(lng)
  const language = lng

  const format = (num:number) => {
    const nf = new Intl.NumberFormat("en-US");
    return !Number.isNaN(nf.format(num)) ? nf.format(num) : num;
  }
  
  const onInput = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target as HTMLInputElement;

    if (!Number.isNaN(Number(value))) {
      setInput(value);
    } 
  }

  const translateParams = () => {
    for (let i = 0; i < PLAN_CUSTOM_FORM_PARAMS.length; i++) {
      const name = PLAN_CUSTOM_FORM_PARAMS[i].name
      const label: labelForm = translate.LABEL
      if (name.toUpperCase() in translate.LABEL) {
        PLAN_CUSTOM_FORM_PARAMS[i].placeholder = label[name.toUpperCase()] as string
      }
    }
  }

  useEffect(() => {
    onAlertStatus(false)
  },[lng])

  const onAddProduct = () => {
    translateParams()

    let messages = Errors({
      params: PLAN_CUSTOM_FORM_PARAMS, 
      data: {price: input},
      lang: lng
    })
    let price:number = input as number
    
    if (price && followerItem.config.value_min && price < followerItem.config.value_min) {
      messages.push(`${translate.MESSAGE.VALUE_INVALID} ${followerItem.config.value_min} ${followerItem.config.currency}`)
    }

    if(messages.length > 0) {
      onAlert({ status: true, messages, type: 'danger' })
    } else {
      onAlert({ status: false, messages: [], type: 'danger' })
      addCart({
        id: followerItem.id ?? '', 
        name: followerItem.name ?? '',
        name_social: followerItem.config.name_social,
        i18n: followerItem.i18n,
        price: input as number,
        subtotal: input as number,
        quantity: 1
      })
      onAlert({status: true, messages: [translate.MESSAGE.ADD_PRODUCT], type: 'success'})
      setInput('')
    }  
  }

  return {
    input,
    onInput,
    format,
    onAddProduct,
    translate,
    language
  }
}

export default useFollowerItemCustom