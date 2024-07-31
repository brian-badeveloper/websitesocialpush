"use client"

import { useContext } from 'react'

import { SiteContext } from '@/context/SiteContext'
import { NetworkItemProps } from '@/app/[lng]/home/presentation/organism/networkItem/NetworkItemProps'
const useNetworkItems = () => {

  const { network, onChangeNetwork } = useContext(SiteContext)

  const networks: NetworkItemProps[] = [
    {
      text: 'Instagram',
      icon: 'Instagram',
      onClick: () => onChangeNetwork('Instagram'),
      size: 'auto'
    },
    {
      text: 'Tiktok',
      icon: 'Tiktok',
      onClick: () => onChangeNetwork('Tiktok'),
      size: 'auto'
    },
    {
      text: 'Youtube',
      icon: 'Youtube',
      onClick: () => onChangeNetwork('Youtube'),
      size: 'auto'
    },
    {
      text: 'Facebook',
      icon: 'FacebookCircle',
      onClick: () => onChangeNetwork('Facebook'),
      size: 'auto'
    },
    {
      text: 'Twitter',
      icon: 'Twitter',
      onClick: () => onChangeNetwork('Twitter'),
      size: 'auto'
    },
    {
      text: 'Threads',
      icon: 'Threads',
      onClick: () => onChangeNetwork('Threads'),
      size: 'auto'
    },
    {
      text: 'LinkedIn',
      icon: 'LinkedIn',
      onClick: () => onChangeNetwork('LinkedIn'),
      size: 'auto'
    },
    {
      text: 'Spotify',
      icon: 'Spotify',
      onClick: () => onChangeNetwork('Spotify'),
      size: 'auto'
    },
    {
      text: 'SoundCloud',
      icon: 'SoundCloud',
      onClick: () => onChangeNetwork('SoundCloud'),
      size: 'auto'
    },
    {
      text: 'Twitch',
      icon: 'Twitch',
      onClick: () => onChangeNetwork('Twitch'),
      size: 'auto'
    },
  ];

  return {
    network,
    onChangeNetwork,
    networks
  }
}

export default useNetworkItems