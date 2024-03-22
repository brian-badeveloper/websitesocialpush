import React, {useState, useEffect, useRef} from 'react'

import { Countries, Country } from './domain/models/interfaces/Countries'
import { InputPhoneAction } from './InputPhoneProps'
import httpCountries from './domain/services/HttpCountries'

const useInputPhone = ({country, countryState, onSelectCountry}: InputPhoneAction ) => {

  const [imageCountry, setImageCountry] = useState<string>('')
  const [countries, setCountries] = useState<Countries[]>([])
  const [codeCountry, setCodeCountry] = useState<string>('')
  const [prefixCountry, setPrefixCountry] = useState<string>('')
  const inputPhone =  useRef<HTMLInputElement>(null)

  const countryDefault = () => {
    if (countryState.code !== '') {
      return activeCountry(countryState, false)
    }
    
    if (country.code !== '') {
      return activeCountry(country, true)
    }
  }

  const activeCountry = (data: Country, update: boolean) => {
    const active = countries.find((item) => item.isoCode === data.code)
    if(active && active.flag) {
      setImageCountry(active.flag)
      setCodeCountry(active.isoCode)
      setPrefixCountry(active.dialCode)
      if (update) {
        onSelectCountry(active.dialCode.slice(1), active.isoCode)
      }
    }
  }
  
  const getCountries = async () => {
    try {
      const resp = await httpCountries()
      setCountries(resp.data)
    } catch(error) {
      console.warn('Could NOT find the countries')
    }
  }

  const handleActiveInput = (e: React.MouseEvent<HTMLLabelElement | HTMLElement>) => {
    inputPhone.current?.focus()
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    countryDefault()
  },[ countries ])

  useEffect(() => {
    countryDefault()
  }, [ country, countryState ])

  return {
    countries,
    imageCountry,
    inputPhone,
    codeCountry,
    prefixCountry,
    handleActiveInput,
  }
}

export default useInputPhone
