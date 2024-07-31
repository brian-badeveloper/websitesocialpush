import { ChangeEvent, useState, useRef } from 'react'
import { RegisterFormParams } from '../RegisterFormProps';

export const useRegisterForm = ( initialForm: RegisterFormParams = {} ) => {

    const [formState, setFormState] = useState(initialForm)
    const [buttonState, setButtonState] =  useState(false)

    const onInput = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = target
        setFormState({...formState, [name]: value})
    } 

    const onCheck = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, checked } = target
        setFormState({...formState, [name]: checked})
    }

    const onReset = (newForm: RegisterFormParams = initialForm) => {
        setFormState(newForm)
    }

    const onUpdateState = (data: RegisterFormParams) => {
        setFormState({...data})
    }

    const onDisableButton = (status = false) => {
        setButtonState(status)
      }
 
    return {
        ...formState,
        formState,
        onInput,
        onCheck,
        onReset,
        onUpdateState,
        onDisableButton,
        buttonState
    }
}


