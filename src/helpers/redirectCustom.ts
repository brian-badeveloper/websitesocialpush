import React, { MouseEventHandler } from 'react'
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

const onLink = ({lng, defaultLang, link}: Links) => {
  const prefix = process.env.PREFIX
  const mode = process.env.NODE_ENV

  if (mode === 'production') {
    return `${prefix ? `${prefix}` : ''}${lng !== defaultLang ? `/${lng}`:''}${link !== '/' ? `${link}/` : '/'}`
  }

  return `${lng !== defaultLang ? `/${lng}`:''}${link !== '/' ? `${link}/` : '/'}`
}

const activeLinks = () => {
  const URL = window.location.href
  const menu = document.querySelectorAll(".navbar__menu-items a")
  const footer = document.querySelectorAll('.footer__items a')
  
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
}

const onActiveLinks = () => {
  setTimeout(() => {
    activeLinks()
  }, 1000)
}


export {
  onDetectRedirect,
  onRedirect,
  onActionRedirect,
  onLink,
  onActiveLinks
}