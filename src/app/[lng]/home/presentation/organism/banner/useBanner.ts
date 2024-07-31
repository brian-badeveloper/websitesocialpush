import { MouseEventHandler } from 'react'

const useBanner = (redirectTo: string) => {

  const onAction:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const element = document.getElementById(redirectTo);
    element?.scrollIntoView()
  }

  return {
    onAction
  }
}

export default useBanner