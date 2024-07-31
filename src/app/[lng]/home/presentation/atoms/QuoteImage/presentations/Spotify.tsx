import Image from 'next/image'

import spotifyImg from '@/assets/images/spotify.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'

const Spotify = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={spotifyImg} className={clStyle} alt="Spotify" />
  )
}

export default Spotify