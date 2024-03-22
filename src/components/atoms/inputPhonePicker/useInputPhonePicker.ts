import React, {useState, useEffect, useRef} from 'react'

import styles from './inputPhonePicker.module.css'

import { Countries, Country } from './domain/models/interfaces/Countries'
import { InputPhonePickerAction } from './InputPhonePickerProps'
import httpCountries from './domain/services/HttpCountries'

const useInputPhonePicker = ({country, countryState, onSelectCountry}: InputPhonePickerAction ) => {

  const [pickerActive, setPickerActive] = useState<boolean>(false)
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

  const addClick = () => {
    window.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement

        if(!target.matches(`.${styles.input_phone_picker}`) &&
           !target.matches(`.${styles.input_phone_picker} > .${styles.input_phone_picker__field}`) &&
           !target.matches(`.${styles.input_phone_picker} > .${styles.input_phone_picker__addon}`) &&
           !target.matches(`.${styles.input_phone_picker} > .${styles.input_phone_picker__addon} > i`) &&
           !target.matches(`.${styles.input_phone_picker} > .${styles.input_phone_picker__items} > ul`) &&
           !target.matches(`.${styles.input_phone_picker} > .${styles.input_phone_picker__items} > ul > li`) &&
           !target.matches(`.${styles.input_phone_picker} > .${styles.input_phone_picker__items} > ul > li > i`) &&
           !target.matches(`.${styles.input_phone_picker} > .${styles.input_phone_picker__items} > ul > li > span`))
        {
          setPickerActive(false)
        }
    })
  }

  const removeClick = () => {
    window.removeEventListener('click', addClick, true)
  }
  
  const getCountries = async () => {
    try {
      const resp = await httpCountries()
      setCountries(resp.data)
    } catch(error) {
      console.warn('Could NOT find the countries')
    }
  }

  const openPicker = () => {
    setPickerActive(!pickerActive)
  }

  const onSelect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string, code: string, flag: string) => {

    const element = e.target as HTMLLIElement | HTMLElement

    const options = document.querySelectorAll(`.${styles.input_phone_picker__option___active}`)

    options.forEach(item => {
      item.classList.remove(styles.input_phone_picker__option___active)
    });

    element.classList.add(styles.input_phone_picker__option___active)
    setImageCountry(flag)
    setPrefixCountry(`+${id}`)
    setCodeCountry(code)
    openPicker()
    onSelectCountry(id,code)
  }
  
  const validateEventClick = () => {
    setPickerActive(false)
  }

  const handleActiveInput = (e: React.MouseEvent<HTMLLabelElement>) => {
    inputPhone.current?.focus()
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    countryDefault()
    addClick()

    return () => {
      removeClick()
    }
  },[ countries ])

  useEffect(() => {
    countryDefault()
  }, [ country, countryState ])

  return {
    pickerActive,
    onSelect,
    countries,
    imageCountry,
    inputPhone,
    codeCountry,
    prefixCountry,
    openPicker,
    handleActiveInput,
    validateEventClick
  }
}

export default useInputPhonePicker
