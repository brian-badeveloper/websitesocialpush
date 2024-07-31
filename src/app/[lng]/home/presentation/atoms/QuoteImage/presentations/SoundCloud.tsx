import Image from 'next/image'

import soundcloudImg from '@/assets/images/soundcloud.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'


const SoundCloud = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={soundcloudImg} className={clStyle} alt="SoundCloud" />
  )
}

export default SoundCloud