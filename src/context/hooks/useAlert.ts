import { useState } from 'react'
import { ErrorAlert } from '../SiteProps'

const useAlert = () => {

  const [error, setError] = useState<ErrorAlert>({
    status: false, 
    messages: [], 
    type: 'danger'
  })

  const onAlert = ({status = false, messages = [], type = 'danger'}: ErrorAlert) => {
    setError({ 
      status,
      messages, 
      type 
    })
  }

  const onAlertStatus = (status: boolean) => {
    let value = { ...error }
    value.status = status
    setError(value)
  }

  return {
    error,
    onAlert,
    onAlertStatus
  }
}

export default useAlert