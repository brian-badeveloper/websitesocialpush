import { ValidateForm } from './ValidateForm'
import { FormDynamicType } from '../types/FormDynamic'
import { LanguagesType } from '@/models/i18n'

export interface ErrorForm {
  params: ValidateForm[]
  data: FormDynamicType,
  lang: LanguagesType
}

