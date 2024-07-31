import './itemMenuNavbar.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { ItemMenuNavbarProps } from './ItemMenuNavbarProps'
import useItemMenuNavbar from './useItemMenuNavbar'

const ItemMenuNavbar = ({icon, text, redirectTo, network, type}: ItemMenuNavbarProps) => {

  const { onAction } = useItemMenuNavbar({network, tag: type, link: redirectTo})

  return (
    <li className="item-menu__content">
      <a href={redirectTo} className="item-menu__link" onClick={onAction}>
        <IconFactory
          color="var(--white)"
          height={19}
          name={icon}
          width={19}
        />
        {text}
      </a>
    </li>
  )
}

export default ItemMenuNavbar