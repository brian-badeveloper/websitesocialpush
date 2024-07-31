import Image from 'next/image'

import instagramImg from '@/assets/images/instagram.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'

const Instagram = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={instagramImg} className={clStyle} alt="Instagram" />
  )
}

export default Instagram