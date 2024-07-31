"use client"

import { useState } from 'react'

import { SiteContext } from './SiteContext'
import { SiteProviderProps } from './SiteProps'
import useNetwork from './hooks/useNetwork'
import useAuth from './hooks/useAuth'
import useAlert from './hooks/useAlert'
import useCart from './hooks/useCart'
import usePlans from './hooks/usePlans'
import useSite from './hooks/useSite'
import { InitializeLanguage } from '@/helpers/language'
import useHistoric from './hooks/useHistoric'

const SiteProvider = ({ children }: SiteProviderProps) => {

  InitializeLanguage()

  const { language, getLanguages, changeLang } = useSite()
  const { network, onChangeNetwork, onDetectNetwork, onRedirectNetwork } = useNetwork()
  const { getState, getUser, login, logout, authValidate } = useAuth()
  const { cartState, getProduct, quantityCart, addCart, updateCart, deleteCart, truncateCart} = useCart()
  const { getInitPlans, getAllPlans, getAllPlansByNetwork, getAllPlansByNetworkAndType, getInitPlansSold, getPlansSold } = usePlans()
  const { getInitHistoric, getAllHistoric } = useHistoric()
  const { error, onAlert, onAlertStatus } = useAlert()
  
  return (
    <SiteContext.Provider value={{
      language,
      getLanguages,
      changeLang,
      network, 
      onChangeNetwork,
      onDetectNetwork,
      onRedirectNetwork,
      getState,
      getUser,
      authValidate,
      login, 
      logout,
      error,
      onAlert,
      onAlertStatus,
      cartState,
      getProduct,
      quantityCart,
      addCart,
      updateCart,
      deleteCart,
      truncateCart,
      getInitPlans,
      getAllPlans,
      getAllPlansByNetwork,
      getAllPlansByNetworkAndType,
      getInitPlansSold,
      getPlansSold,
      getInitHistoric,
      getAllHistoric
    }}>
      { children }
    </SiteContext.Provider>
  )
}

export default SiteProvider