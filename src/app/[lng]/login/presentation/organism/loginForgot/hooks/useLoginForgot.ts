import { ChangeEvent, useState, useRef } from 'react'
import { LoginForgotParams } from '../LoginForgotProps';

export const useLoginForgot = ( initialForm: LoginForgotParams = {} ) => {

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

    const onReset = (newForm: LoginForgotParams = initialForm) => {
        setFormState(newForm)
    }

    const onUpdateState = (data: LoginForgotParams) => {
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


