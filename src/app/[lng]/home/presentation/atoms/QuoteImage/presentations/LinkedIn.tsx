import Image from 'next/image'

import linkedinImg from '@/assets/images/linkedin.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'


const LinkedIn = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={linkedinImg} className={clStyle} alt="LinkedIn" />
  )
}

export default LinkedIn