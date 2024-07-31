import Image from 'next/image'

import facebookImg from '@/assets/images/facebook.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'


const Facebook = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={facebookImg} className={clStyle} alt="Facebook" />
  )
}

export default Facebook