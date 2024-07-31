import { useEffect, useState } from 'react'
import { Plan } from '@/models/interfaces/Plan' 
import { HttpHistoric } from '@/infraestructure/services' 
import { allHistoric } from '@/infraestructure/services/data'
import { Product } from '../cartReducerProps'
import { NAME_COOKIE } from '@/helpers/nameCookie'
import Cookies from 'js-cookie'
import sessionToken from '@/helpers/sessionToken'

const useHistoric = () => {
  const [historic, setHistoric] = useState<Product[]>([])


  const getInitHistoric = () => {
    const token = Cookies.get(NAME_COOKIE)
    const data = token && !sessionToken.getTokenExpired(token) ? sessionToken.decodeToken(token) : "";

   HttpHistoric(token ?? '')
    .then(data => {
      setHistoric(data.historic && data.historic.length < 0 ? [...data.historic] : [])
    })
    .catch(error => {
      setHistoric([])
      console.log(`products: No data has been found`)
    })
  }

  const getAllHistoric = () => {
    return historic
  }
  

  return { 
    historic,
    getInitHistoric,
    getAllHistoric,
  }
}

export default useHistoric