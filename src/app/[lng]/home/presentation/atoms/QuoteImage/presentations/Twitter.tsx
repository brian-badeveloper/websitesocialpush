import Image from 'next/image'

import twitterImg from '@/assets/images/twitter.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'

const Twitter = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={twitterImg} className={clStyle} alt="Twitter" />
  )
}

export default Twitter