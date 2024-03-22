import styles from './formContact.module.css'

import Input from '@/components/atoms/input/Input'
import { FormContactParams, FormContactProps } from './FormContactProps'
import Textarea from '@/components/atoms/textarea/Textarea'
import Button from '@/components/atoms/button/Button'
import Checkbox from '@/components/atoms/checkbox/Checkbox'
import Alert from '@/components/molecules/alert/Alert'
import useSendForm from './hooks/useSendForm'
import getLanguage, { LanguagesType } from '@/models/i18n'
import InputPhone from '@/components/atoms/inputPhone/InputPhone'

const formInit: FormContactParams = {
  first_name: '',
  last_name: '',
  email: '',
  code_number: '',
  code_country: '',
  phone_number: '',
  policies: false
}

const FormContact = ({
  lng,
  defaultLang
}: FormContactProps) => {
  const translate = getLanguage(lng)
  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState,
    country,
    countryState,
    onChangeStateCountry
  } = useSendForm(formInit, lng)
 
  return (
    <div className={styles.form_contact}>
      <form onSubmit={onSubmit}>
        <div className={styles.form_contact__content}>
          {
            error.status && <Alert {...error} onStatus={onStatus} fixed />
          }
          <div className={styles.form_contact__row}>
            <div className={styles.form_contact__group}>
              <Input
                name="first_name"
                onChange={onInput}
                type="text"
                placeholder={translate.FORM.FIRST_NAME}
                size="auto"
                background="#FFF1EE"
                border={0}
                borderRadius={20}
                value={formState.first_name}
              />
            </div>
            <div className={styles.form_contact__group}>
              <Input
                name="last_name"
                onChange={onInput}
                type="text"
                placeholder={translate.FORM.LAST_NAME}
                size="auto"
                background="#FFF1EE"
                border={0}
                borderRadius={20}
                value={formState.last_name}
              />
            </div>
            <div className={styles.form_contact__group}>
              <Input
                name="email"
                onChange={onInput}
                type="email"
                placeholder={translate.FORM.EMAIL}
                size="auto"
                background="#FFF1EE"
                border={0}
                borderRadius={20}
                value={formState.email}
              />
            </div>
            <div className={styles.form_contact__group}>
            <InputPhone
                name="phone_number"
                onChange={onInput}
                type="number"
                placeholder={translate.FORM.PHONE_NUMBER}
                size="auto"
                background="#FFF1EE"
                border={0}
                borderRadius={20}
                borderAddon={0}
                value={formState.phone_number}
                country={country}
                countryState={countryState}
                onSelectCountry={onChangeStateCountry}
              />
            </div>
            <div className={`${styles.form_contact__group} ${styles.form_contact__group___full}`}>
              <Checkbox
                name="policies"
                onChange={onCheck}
                label={translate.FORM.TERMS_TEXT}
                size={18}
                colorActive="#FF735C"
                color="#FF735C"
                checked={formState.policies !== undefined ? formState.policies : false}
                redirectTo={`/${lng}/terms-and-conditions`}
              />
            </div>
            <div className={`${styles.form_contact__group} ${styles.form_contact__group___last}`}>
              <Button
                bgStyle="primary"
                size="auto"
                textSize={18}
                disable={buttonState || !formState.policies ? true : false}
              >{translate.FORM.SEND_BTN}</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormContact