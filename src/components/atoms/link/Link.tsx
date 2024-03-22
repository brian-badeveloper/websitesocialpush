import styles from './link.module.css'

import {LinkProps } from './LinkProps'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon'

const Link = ({
  children,
  target = '_parent',
	bgStyle,
  size,
  textSize,
  redirectTo,
  disable,
  icon,
	iconWidth = 25,
	iconHeight = 25,
	iconStyle = 'normal'
}: LinkProps) => {

  return (
    <a
      target={target}
      href={redirectTo ?? ''}
      className={`${styles.link} ${bgStyle ? styles[bgStyle] : ''} ${size ? styles[size] : ''} ${disable ? styles.disable : '' }`}
      style={{
        fontSize: `${textSize}px`,
      }}
    >
      <span className={styles.link__row}>
        <span className={styles.link__content}>{children}</span>
        {
          icon && (
            <span className={`${styles.link__icon} ${iconStyle ? styles[iconStyle] : ''}`}>
              <IconFactory width={iconWidth} height={iconHeight} color="#000" name={icon} />
            </span>
          )
        }
      </span>
    </a>
  );
};

export default Link;
