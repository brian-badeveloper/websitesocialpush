import React, { useEffect, useState } from 'react'

import { NAVBAR_DROPDOWN_PARAMS } from '@/components/organism/navbarOrg/domain/models/schemas/navbar'
import { ItemOptionDropdown, ItemOptionLabel } from '@/components/organism/navbarOrg/domain/models/interfaces/Navbar'
import getLanguage, { LanguagesType } from '@/models/i18n'

const useNavbar = (lng: LanguagesType) => {
  const [options,setOptions] = useState<ItemOptionDropdown[]>([])
  const translate = getLanguage(lng)

  const translateParams = () => {
    for (let i = 0; i < NAVBAR_DROPDOWN_PARAMS.length; i++) {
      const name = NAVBAR_DROPDOWN_PARAMS[i].name
      const label: ItemOptionLabel = translate.DROPDOWN
      if (name.toUpperCase() in translate.DROPDOWN) {
        NAVBAR_DROPDOWN_PARAMS[i].text = label[name.toUpperCase()] as string
      }
			const options = NAVBAR_DROPDOWN_PARAMS[i].options?.length ?? 0
			for (let e = 0; e < options; e++) {
				const name = NAVBAR_DROPDOWN_PARAMS[i].options[e].name
				const label: ItemOptionLabel = translate.DROPDOWN
				if (name.toUpperCase() in translate.DROPDOWN) {
					NAVBAR_DROPDOWN_PARAMS[i].options[e].text = label[name.toUpperCase()] as string
         
				}
			}
    }
  }

	useEffect(() => {
		translateParams()
		setOptions([...NAVBAR_DROPDOWN_PARAMS])
	},[lng])

  return {
    translateParams,
    options
  }
}

export default useNavbar