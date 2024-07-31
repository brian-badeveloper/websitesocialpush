import Image from 'next/image'

import tiktokImg from '@/assets/images/tiktok.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'


const Tiktok = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={tiktokImg} className={clStyle} alt="Tiktok" />
  )
}

export default Tiktok