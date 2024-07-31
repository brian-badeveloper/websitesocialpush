"use client"

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { SiteContext } from '@/context/SiteContext'
import { NetworkItemProps } from '@/app/[lng]/home/presentation/organism/networkItem/NetworkItemProps'
import { NetworkLinks } from '@/models/interfaces/Network'

const useNetworkItemsDashboard = () => {
  const { language, network, onChangeNetwork, onRedirectNetwork, onDetectNetwork } = useContext(SiteContext)
  const Route = useRouter()

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

  const networks: NetworkItemProps[] = [
    {
      text: 'Instagram',
      icon: 'Instagram',
      onClick: () => onAction({
        network: 'Instagram', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'Tiktok',
      icon: 'Tiktok',
      onClick: () => onAction({
        network: 'Tiktok', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'Youtube',
      icon: 'Youtube',
      onClick: () => onAction({
        network: 'Youtube', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'Facebook',
      icon: 'FacebookCircle',
      onClick: () => onAction({
        network: 'Facebook', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'Twitter',
      icon: 'Twitter',
      onClick: () => onAction({
        network: 'Twitter', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'Threads',
      icon: 'Threads',
      onClick: () => onAction({
        network: 'Threads', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'LinkedIn',
      icon: 'LinkedIn',
      onClick: () => onAction({
        network: 'LinkedIn', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'Spotify',
      icon: 'Spotify',
      onClick: () => onAction({
        network: 'Spotify', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'SoundCloud',
      icon: 'SoundCloud',
      onClick: () => onAction({
        network: 'SoundCloud', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
    {
      text: 'Twitch',
      icon: 'Twitch',
      onClick: () => onAction({
        network: 'Twitch', 
        tag: 'followers',
        link: '/'
      }),
      size: 'auto'
    },
  ];

  return {
    network,
    networks
  }
}

export default useNetworkItemsDashboard