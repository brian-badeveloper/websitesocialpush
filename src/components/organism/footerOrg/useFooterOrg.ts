import { useRouter } from 'next/navigation'
import { onDetectRedirect, onRedirect } from '@/helpers/redirectCustom'

const useFooterOrg = () => {

  const Route = useRouter()
 
  const onAction = (lang: string, tag: string, redirectTo: string) => {
    const RouteValid = onRedirect({
      tag,
      link: `/${lang}${redirectTo !== '/' ? redirectTo : ''}`
    })

    if (RouteValid.current !== RouteValid.full_route) {
      setTimeout(() => {
        Route.push(RouteValid.link, {scroll: false})
      }, 500)
    } else {
      onDetectRedirect()
    }
  }

  return {
    onAction
  }
}

export default useFooterOrg