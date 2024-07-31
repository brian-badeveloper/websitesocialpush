import Image from 'next/image'

import twitchImg from '@/assets/images/twitch.svg'

import { QuoteImageProps } from "../domain/models/QuoteImageProps"

const Twitch = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={twitchImg} className={clStyle} alt="Twitch" />
  )
}

export default Twitch