export interface ValidateForm {
  required: boolean
  email?: boolean
  numeric?: boolean
  check?: boolean
  file?: boolean
  file_type?: string
  min?: number
  max?: number
  equal?: boolean
  field_equal?: string
  name : string
  placeholder : string
}

export interface FormActions {
  value: string | number | boolean
  option: string | number | boolean
  name : string
  placeholder : string
  field_value_equal?: string | number | boolean
  file_type?: string
  translate: string
}

export interface paramsValidateForm {
  replace: string
  to: string | number | boolean
}

export interface labelForm {
  [x: string]: string | number | boolean
}