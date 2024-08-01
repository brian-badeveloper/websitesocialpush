import { Links, RedirectCustomLinks } from "@/models/interfaces/RedirectCustom"

const onDetectRedirect = () => {
  const data = localStorage.getItem('redirect') || ""
  const redirectParams = data && typeof data === 'string' ? JSON.parse( data ) : ""

  if (redirectParams) {
    const element = document.getElementById(redirectParams.tag)

    setTimeout(() => {
      element?.scrollIntoView()
      localStorage.removeItem('redirect')
    }, 800)
  }
}

const onRedirect = (link: RedirectCustomLinks) => {
  localStorage.setItem('redirect', JSON.stringify({
    tag: link.tag,
    link: link.link
  }))
  const current = window.location.href
  const domain = window.location.hostname
  const protocol = window.location.protocol
  const port = window.location.port
  const full_route = `${protocol}//${domain}${port ? `:${port}` : ''}${link.link}`

  return { 
    current,
    full_route,
    link: link.link
  }
}

const onActionRedirect = (redirectTo: string) => {
  const element = document.getElementById(redirectTo);
  element?.scrollIntoView()
}

const onLink = ({lng, link}: Links) => {
  return `/${lng}${link !== '/' ? `${link}` : '/'}`
}

const activeLinks = () => {
  const URL = window.location.href
  const menu = document.querySelectorAll(".navbar__menu_items a")
  const footer = document.querySelectorAll('.footer__menu-items a')
  const sidebar = document.querySelectorAll(".sidebar__link")
  
  menu.forEach((item, key) => {
    const element: HTMLAnchorElement = item as HTMLAnchorElement
    if (URL === element.href) {
      element.classList.add('active');
    }
  })

  footer.forEach((item, key) => {
    const element: HTMLAnchorElement = item as HTMLAnchorElement
    if (URL === element.href) {
      if(element.dataset.target === "false") {
        element.classList.add('active');
      }
    }
  })

  sidebar.forEach((item, key) => {
    const element: HTMLAnchorElement = item as HTMLAnchorElement
    if (URL === element.href) {
      element.classList.add('active');
    }
  })
}

const onActiveLinks = () => {
  setTimeout(() => {
    activeLinks()
  }, 1000)
}


const onRedirectExternal = (url: string) => {
  if (window) {
    return window.open(url)
  }
}

export {
  onDetectRedirect,
  onRedirect,
  onActionRedirect,
  onLink,
  onActiveLinks,
  onRedirectExternal
}