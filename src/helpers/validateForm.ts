import React from 'react'

import { ErrorForm } from '@/models/interfaces/ErrorForm'
import { FormActions, ValidateForm, paramsValidateForm } from '@/models/interfaces/ValidateForm'
import getLanguage from '@/models/i18n'


const Errors = ({params, data, lang}: ErrorForm) => {

	let MessageError: string[] = [];
	const translate = getLanguage(lang);

	params.map(param => {
    const formAction: FormActions = {
      value: data[param.name],
      option: '',
      name: param.name,
      placeholder: param.placeholder,
			field_value_equal: '',
			translate: ''
    }

		if ("required" in param && param.required) {	
      formAction.option = param.required
      formAction.translate = translate.ERROR.REQUIRED

      let res = required(formAction)
			if (res.error && res.message) {
				MessageError.push(res.message)
			}
		}

		if ("email" in param && param.email) {	
      formAction.option = param.email
			formAction.translate = translate.ERROR.EMAIL
      let res = email(formAction)
			if (res.error && res.message) {
				MessageError.push(res.message)
			}
		}

		if ("numeric" in param && param.numeric) {
      formAction.option = param.numeric
			formAction.translate = translate.ERROR.NUMERIC
      let res = numeric(formAction)
			if (res.error &&  res.message) {
				MessageError.push(res.message)
      }
		}

		if ("min" in param && param.min) {
      formAction.option = param.min
			formAction.translate = translate.ERROR.MIN
      let res = min(formAction)
			if (res.error && res.message) {
				MessageError.push(res.message)
			}
		}
		
		if ("max" in param && param.max) {
      formAction.option = param.max
			formAction.translate = translate.ERROR.MAX
      let res = max(formAction)
			if (res.error && res.message) {
				MessageError.push(res.message)
			}
		}

		if ("check" in param && param.check) {
      formAction.option = param.check
			formAction.translate = translate.ERROR.CHECK
      let res = check(formAction)
			if (res.error && res.message) {
				MessageError.push(res.message)
			}
		}

		if ("file" in param && param.file) {
			formAction.value = data[param.name]
      formAction.option = param.file
			formAction.file_type = param.file_type
			formAction.translate = translate.ERROR.FILE
      let res = file(formAction)
			if (res.error && res.message) {
				MessageError.push(res.message)
			}
		}

		if ("equal" in param && param.equal) {
      formAction.option = param.equal
			formAction.field_value_equal = (param.field_equal ? data[param.field_equal] : '')
			formAction.translate = translate.ERROR.EQUAL
      let res = equal(formAction)
			if (res.error && res.message) {
				MessageError.push(res.message)
			}
		}
	});
	
	return MessageError;
}

// required input
const required = ({value,option,name,placeholder,translate}: FormActions) => {
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		}
	]
	if (typeof value === 'string' && value.trim() === '' && option !== false)	{
		return {error: true, message: translateMessage(translate, params)};
	}	else {
		return {error: false};
	}
}

// email input
const email = ({value,option,name,placeholder,translate}: FormActions) => {
	let emailPer = /^[-\w.%+]{2,64}@(?:[A-Z0-9-]{2,63}\.){1,125}[A-Z]{2,63}$/i;
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		}
	]

	if (typeof value === 'string' && value.trim() !== '' && !emailPer.test(value.trim()) && option !== false) {
		return {error: true, message: translateMessage(translate, params)};
	}	else {
		return {error: false};
	}
}

// numeric input
const numeric = ({value,option,name,placeholder,translate}: FormActions) => {
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		}
	]

	if (typeof value === 'number' && isNaN(value) && option !== false) {
		return {error:true, message: translateMessage(translate, params)};
	}	else {
		return {error:false};
	}
}

// min input
const min = ({value,option,name,placeholder,translate}: FormActions) => {
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		},
		{
			replace: 'option',
			to: option
		}
	]

	if (typeof value === 'string' && value.trim() !== '' && typeof option === 'number' && value.trim().length < option) {
		return {error:true, message: translateMessage(translate, params)};
	}	else {
		return {error:false};
	}
}

// max input
const max = ({value,option,name,placeholder,translate}: FormActions) => {
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		},
		{
			replace: 'option',
			to: option
		}
	]

	if (typeof value === 'string' && value.trim() !== '' && typeof option === 'number' && value.trim().length > option) {
		return {error:true, message: translateMessage(translate, params)};
	}	else {
		return {error:false};
	}
}

// check input
const check = ({value,option,name,placeholder,translate}: FormActions) => {
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		}
	]

	if (typeof value === 'boolean' && !value && typeof option === 'boolean' && option) {
		return {error:true, message: translateMessage(translate, params)};
	}	else {
		return {error:false};
	}
}

// file input
const file = ({value,option,name,placeholder, file_type,translate}: FormActions) => {
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		}
	]

	const exts = typeof file_type === 'string' && file_type.trim() !== '' ? file_type.split(',') : []
	const ext = typeof value === 'string' && value.trim() !== '' ? value.slice(value.lastIndexOf(".")) : ''

	if (typeof value === 'string' && value.trim() !== '' && option !== false && typeof file_type === 'string' && file_type.trim() !== '' && !exts.includes(ext)) {
		return {error:true, message: translateMessage(translate, params)};
	}	else {
		return {error:false};
	}
}

// equal input
const equal = ({value,option,name,placeholder, field_value_equal,translate}: FormActions) => {
	const params: paramsValidateForm[] = [
		{
			replace: 'placeholder',
			to: placeholder
		}
	]

	if (typeof value === 'string' && value.trim() !== '' && option !== false && value !== field_value_equal) {
		return {error:true, message: translateMessage(translate, params)};
	}	else {
		return {error:false};
	}
}

// translate message
const translateMessage = (message: string, params: paramsValidateForm[]): string => {
	let messageResponse = message
	for (let i = 0; i < params.length; i++) {
		messageResponse = messageResponse.split(`:${params[i].replace}`).join(`${params[i].to}`)
	}

	return messageResponse
}

export {
	Errors
}