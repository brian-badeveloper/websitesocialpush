import Image from 'next/image'

import youtubeImg from '@/assets/images/youtube.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'

const Youtube = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={youtubeImg} className={clStyle} alt="Youtube" />
  )
}

export default Youtube