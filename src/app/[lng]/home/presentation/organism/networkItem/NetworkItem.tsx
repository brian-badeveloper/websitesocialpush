import './networkItem.css'

import { NetworkItemProps } from './NetworkItemProps'
import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'

const NetworkItem = ({icon, text, size, active, onClick}: NetworkItemProps) => {
  return (
    <button className={`network-item ${size} ${active ? 'active' : ''}`} onClick={onClick}>
      <span className="network-item__icon">
        <IconFactory
          color="#CCCCCC"
          height={25}
          name={icon}
          width={25}
        />
      </span>
      <span className="network-item__text">{text}</span>
    </button>
  )
}

export default NetworkItem