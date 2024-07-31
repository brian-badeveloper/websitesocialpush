import { useState } from 'react'
import { NetworkType } from '@/models/types/NetworkType';
import { NetworkLinks } from '@/models/interfaces/Network';


const useNetwork = () => {

  const [network, setNetwork] =  useState<NetworkType>('Instagram');

  const onChangeNetwork = (network: NetworkType) => {
    setNetwork(network);
    const element = document.getElementById('followers');
    element?.scrollIntoView();
  }

  const onDetectNetwork = () => {
    const data = localStorage.getItem('network') || ""
    const networkParams = data && typeof data === 'string' ? JSON.parse( data ) : ""

    if (networkParams) {
      setNetwork(networkParams.network ? networkParams.network : 'Instagram')
      const element = document.getElementById(networkParams.tag)

      setTimeout(() => {
        element?.scrollIntoView()
        localStorage.removeItem('network')
      }, 800)
    }
  }

  const onRedirectNetwork = (networkLink: NetworkLinks) => {
    localStorage.setItem('network', JSON.stringify({
      network: networkLink.network,
      tag: networkLink.tag,
      link: networkLink.link
    }))
    const current = window.location.href
    const domain = window.location.hostname
    const protocol = window.location.protocol
    const port = window.location.port
    const full_route = `${protocol}//${domain}${port ? `:${port}` : ''}${networkLink.link}`

    return { 
      current,
      full_route,
      link: networkLink.link
    }
  }

  return {
    network,
    onChangeNetwork,
    onDetectNetwork,
    onRedirectNetwork
  }
  
}

export default useNetwork