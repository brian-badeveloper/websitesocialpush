import './listOption.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { ListOptionProps } from './ListOptionProps'

const ListOption = ({icon, text, color, centerResponsive}: ListOptionProps) => {
  return (
    <li className={`list-option ${centerResponsive ? 'center' : ''}`}>
      <div className="list-option__icon">
        <IconFactory
          color={color}
          height={20}
          name={icon}
          width={20}
        />
      </div>
      {text}
    </li>
  )
}

export default ListOption