import Image from 'next/image'

import './networksDashboard.css'

import cursor from '@/assets/images/cursor.svg'
import NetworkItemsDashboard from '../networkItemsDashboard/NetworkItemsDashboard'
import { NetworksDashboardProps } from './NetworksDashboardProps'

const NetworksDashboard = ({title}: NetworksDashboardProps) => {
  return (
    <section className="networks-dashboard">
      <h2 className="networks-dashboard__title">
        <Image src={cursor} className="networks-dashboard__title-img" alt="cursor" />
        {title}
      </h2>
      <NetworkItemsDashboard />
    </section>
  )
}

export default NetworksDashboard