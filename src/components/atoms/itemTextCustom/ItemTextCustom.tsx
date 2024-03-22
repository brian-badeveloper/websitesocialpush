import styles from './itemTextCustom.module.css'

import { ItemTextCustomProps } from './ItemTextCustomProps'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon'

const ItemTextCustom = ({
  icon = 'CheckRegular',
  iconWidth = 20,
  iconHeight = 20,
  color = '#FFBA08',
  title,
  titleColor = '#032B43',
  titleSize = 16,
  text,
  textColor = '#032B43',
  textSize = 16
}: ItemTextCustomProps) => {
  return (
    <div className={styles.item_text}>
      <div className={styles.item_text__icon}>
        <IconFactory name={icon} width={iconWidth} height={iconHeight} color={color} />
      </div>
      <div className={styles.item_text__body}>
        <h3 
          className={styles.item_text__title}
          style={{
            fontSize: `${textSize}px`,
            color: textColor
          }}
        >{title}</h3>
        <p 
          className={styles.item_text__paragraph}
          style={{
            fontSize: `${textSize}px`,
            color: textColor
          }}
        >{text}</p>
      </div>
    </div>
  )
}

export default ItemTextCustom
