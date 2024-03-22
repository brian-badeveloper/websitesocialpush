import React, { MouseEventHandler, useState } from 'react'

import styles from './alert.module.css'

import { AlertProps } from './AlertProps'

const Alert = ({
  messages,
  type,
  onStatus,
  fixed = false
}: AlertProps) => {

  const [status, setStatus] = useState<boolean>(true);

  const close:MouseEventHandler<HTMLButtonElement> = (e) => {
    setStatus(!status);
    return onStatus(!status);
  }

  return (
    <>
      <div className={`${styles.alert} ${styles.alert_dismissible} ${type ? styles[`alert_${type}`] : ''} ${(fixed ? styles.alert___fixed : '')}`} >
          <button type="button" className={styles.close} onClick={close} aria-label="Close">
              <span aria-hidden="true">×</span>
          </button>
          <ul>
            { 
              messages.map((item, key) => (<li key={ key + 'alert' }>{item}</li>))
            }
          </ul>
      </div>
    </>
  )
}

export default Alert