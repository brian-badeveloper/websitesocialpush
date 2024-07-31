import { useRef, useEffect, MouseEventHandler, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { NetworkLinks } from '@/models/interfaces/Network'
import { SiteContext } from '../../../context/SiteContext'

const useDropdownNavbar = () => {

  const { language, onDetectNetwork, onRedirectNetwork } = useContext(SiteContext)
  const Route = useRouter()
  const content = useRef<HTMLLIElement>(null)

  const changeActive = () => {
		const dropdowns = document.querySelectorAll('.dropdown-navbar__content');
		let active = false;
		dropdowns.forEach((item) => {
			if (item.classList.contains('active') && item !== content.current) {
				item.classList.remove('active')
			}
			
			if (item.classList.contains('active') && item === content.current) {
				item.classList.remove('active')
				active = true;
			}

			if (!item.classList.contains('active') && !active && item === content.current) {
				item.classList.add('active')
			}
		});
	}

  const validateDropdown = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement|HTMLElement;
    if (!target.matches('.dropdown-navbar__content > .dropdown-navbar__text')
       && !target.matches('.dropdown-navbar__content > ul')
       && !target.matches('.dropdown-navbar__content > ul > li')
       && !target.matches('.dropdown-navbar__content > ul > li > a')
       ) {
        const dropdowns = document.querySelectorAll('.dropdown-navbar__content');
        dropdowns.forEach((item) => {
          if (item.classList.contains('active')) {
            item.classList.remove('active')
          }
        });
    }
  } 

  const addClick = () => {
    window.addEventListener('click', (e) => validateDropdown(e))
  }

  const removeClick = () => {
    window.removeEventListener('click', validateDropdown, true)
  }

  const onAction = ({network, tag, link}: NetworkLinks) => {
    const RouteValid = onRedirectNetwork({
      network,
      tag,
      link: `/${language}${link !== '/' ? link : ''}`
    })

    if (RouteValid.current !== RouteValid.full_route) {
      setTimeout(() => {
        Route.push(RouteValid.link, {scroll: false})
      }, 800)
    } else {
      onDetectNetwork()
    }
  }

  useEffect(() => {
    addClick()

    return () => {
      removeClick()
    }
  }, []);

  return {
    content,
    changeActive,
    addClick,
    removeClick,
    onAction
  }
}

export default useDropdownNavbar