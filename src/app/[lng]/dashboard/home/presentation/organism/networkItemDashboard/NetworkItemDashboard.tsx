import './networkItemDashboard.css'

import { NetworkItemDashboardProps } from './NetworkItemDashboardProps'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'

const NetworkItemDashboard = ({icon, text, size, active, onClick}: NetworkItemDashboardProps) => {
  return (
    <button className={`network-item-dashboard ${size} ${active ? 'active' : ''}`} onClick={onClick}>
      <span className="network-item-dashboard__icon">
        <IconFactory
          color="#CCCCCC"
          height={25}
          name={icon}
          width={25}
        />
      </span>
      <span className="network-item-dashboard__text">{text}</span>
    </button>
  )
}

export default NetworkItemDashboard