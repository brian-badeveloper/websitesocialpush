import Image from 'next/image'

import './networks.css'

import cursor from '@/assets/images/cursor.svg'
import NetworkItems from '../networkItems/NetworkItems'
import { NetworksProps } from './NetworksProps'

const Networks = ({title}: NetworksProps) => {
  return (
    <section className="networks">
      <div className="container">
        <h2 className="networks__title">
          <Image src={cursor} className="networks__title-img" alt="cursor" />
          {title}
        </h2>
        <NetworkItems />
        <div className="networks__separator"></div>
      </div>
    </section>
  )
}

export default Networks