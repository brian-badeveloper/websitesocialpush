import { ValidateForm } from './ValidateForm'
import { FormDynamicType } from '../types/FormDynamic'
import { LanguagesType } from '@i18n/languages'

export interface ErrorForm {
  params: ValidateForm[]
  data: FormDynamicType,
  lang: LanguagesType
}

