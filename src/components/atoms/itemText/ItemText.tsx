import styles from './itemText.module.css'

import { ItemTextProps } from './ItemTextProps'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon' 

const ItemText = ({
  icon = 'CheckRegular',
  iconWidth = 20,
  iconHeight = 20,
  color = '#FFBA08',
  text,
  textColor = '#032B43',
  textSize = 16
}: ItemTextProps) => {
  return (
    <div className={styles.item_text}>
      <span className={styles.item_text__icon}>
        <IconFactory name={icon} width={iconWidth} height={iconHeight} color={color} />
      </span>
      <p 
        className={styles.item_text__paragraph}
        style={{
          fontSize: `${textSize}px`,
          color: textColor
        }}
      >{text}</p>
    </div>
  )
}

export default ItemText
