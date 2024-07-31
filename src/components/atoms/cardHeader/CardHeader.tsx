import { IconFactory } from '../icons/domain/use-cases/factoryIcon'
import './cardHeader.css'

import { CardHeaderProps } from './CardHeaderProps'

const CardHeader = ({
  title,
  bgStyle,
  type,
  size,
  orientation = 'left', 
  network,
  networkText
}: CardHeaderProps) => {
  return (
    <div className={`card-header ${bgStyle} ${type} ${orientation}`}>
      <h4 
        className="card-header__title"
        style={{ fontSize: `${size}px` }}
      >
        {title}
      </h4>
      {
        network && (
          <h4 
            className="card-header__title card-header__title--network"
            style={{ fontSize: `${size}px` }}
          >
            <IconFactory name={network} color={"#000"} width={20} height={20} />
            {networkText}
          </h4>
        )
      }
    </div>
  )
}

export default CardHeader