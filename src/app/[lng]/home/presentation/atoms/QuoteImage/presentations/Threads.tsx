import Image from 'next/image'

import threadsImg from '@/assets/images/threads.svg'

import { QuoteImageProps } from '../domain/models/QuoteImageProps'

const Threads = ({clStyle}: QuoteImageProps) => {
  return (
    <Image src={threadsImg} className={clStyle} alt="Threads" />
  )
}

export default Threads