import React, { useEffect, useState } from 'react'

import { CalendarProps } from './CalendarProps'
import getLanguage from '@/models/i18n'

const useCalendar = ({date, language = 'en'}: CalendarProps) => {
  const [dateView, seDateView] = useState<String>('')
  const translate = getLanguage(language)
  const months:string[] = [
    translate.DATE.MONTH_1,
    translate.DATE.MONTH_2,
    translate.DATE.MONTH_3,
    translate.DATE.MONTH_4,
    translate.DATE.MONTH_5,
    translate.DATE.MONTH_6,
    translate.DATE.MONTH_7,
    translate.DATE.MONTH_8,
    translate.DATE.MONTH_9,
    translate.DATE.MONTH_10,
    translate.DATE.MONTH_11,
    translate.DATE.MONTH_12,
  ]
  const days:string[] = [
    translate.DATE.DAY_1,
    translate.DATE.DAY_2,
    translate.DATE.DAY_3,
    translate.DATE.DAY_4,
    translate.DATE.DAY_5,
    translate.DATE.DAY_6,
    translate.DATE.DAY_7
  ]


  const initializeDate = () => {
    const newDate = date ? new Date(date) : new Date()
    const day = newDate.getDay()
    const month = newDate.getMonth()

    seDateView(`${months[month]}, ${days[day]} ${newDate.getDate()}, ${newDate.getFullYear()}`)
  }
  
  useEffect(() => {
    initializeDate()
  },[date, language])

  return {
    dateView
  }
}

export default useCalendar
