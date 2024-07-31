import { MouseEventHandler, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { SiteContext } from '@/context/SiteContext'
import { NetworkLinks } from '@/models/interfaces/Network'

const useItemMenuNavbar = ({network, tag, link}: NetworkLinks) => {

  const { language, onRedirectNetwork, onDetectNetwork } = useContext(SiteContext)
  const Route = useRouter()
 
  const onAction:MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    const RouteValid = onRedirectNetwork({
      network,
      tag,
      link: `/${language}${link !== '/' ? link : ''}`
    })

    if (RouteValid.current !== RouteValid.full_route) {
      setTimeout(() => {
        Route.push(RouteValid.link, { scroll: false })
      }, 800)
    } else {
      onDetectNetwork()
    }
  }

  return {
    onAction
  }
}

export default useItemMenuNavbar