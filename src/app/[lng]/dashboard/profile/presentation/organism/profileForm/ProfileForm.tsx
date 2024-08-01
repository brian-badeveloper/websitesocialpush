import { useContext } from 'react'

import  './profileForm.css'

import Input from '@/components/atoms/input/Input'
import ProfileImage from '@/components/molecules/profileImage/ProfileImage'
import { SiteContext } from '@/context/SiteContext'
import useSendForm from './hooks/useSendForm'
import Alert from '@/components/molecules/alert/Alert'
import Button from '@/components/atoms/button/Button'
import { ProfileFormParams, ProfileFormProps } from './ProfileFormProps'
import getLanguage from '@/models/i18n'

const formInit: ProfileFormParams = {
  first_name: '',
  last_name: '',
  email: '',
}

const ProfileForm = ({lng}: ProfileFormProps) => {
  const {
    onSubmit,
    onStatus,
    error,
    formState, 
    onInput, 
    onCheck, 
    onDisableButton, 
    buttonState
  } = useSendForm(lng,formInit)

  const translate = getLanguage(lng)

  return (
    <section className="profile-form">
      <div className="profile-form__row">
        <div className="profile-form__image">
          <ProfileImage
            icon="UserInSolid"
            bgStyle="tertiary"
            border={0}
          />
        </div>
        <div className="profile-form__form">
          <form onSubmit={onSubmit}>
            <div className="profile-form__content">
              {
                error.status && <Alert {...error} onStatus={onStatus} fixed />
              }
              <div className="profile-form__form-row">
                <div className="profile-form__group profile-form__group-md">
                  <Input
                    name="first_name"
                    onChange={onInput}
                    type="text"
                    label={translate.LABEL.FIRST_NAME}
                    placeholder={translate.LABEL.FIRST_NAME}
                    size="auto"
                    value={formState.first_name}
                  />
                </div>
                <div className="profile-form__group profile-form__group-md">
                  <Input
                    name="last_name"
                    onChange={onInput}
                    type="text"
                    label={translate.LABEL.LAST_NAME}
                    placeholder={translate.LABEL.LAST_NAME}
                    size="auto"
                    value={formState.last_name}
                  />
                </div>
                <div className="profile-form__group">
                  <Input
                    name="email"
                    onChange={onInput}
                    type="email"
                    label={translate.LABEL.EMAIL}
                    placeholder="juan@mail.com"
                    size="auto"
                    value={formState.email}
                  />
                </div>
                <div className="profile-form__group profile-form__group--last">
                  <Button
                    bgStyle="primary"
                    size="auto"
                    textSize={18}
                  >{translate.LABEL.SAVE_BTN}</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ProfileForm