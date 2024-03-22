import styles from './wave.module.css'

import { WaveProps } from './WaveProps'

const Wave = ({color, orientation, type}: WaveProps) => {
  return (
    <div className={`${styles.wave} ${orientation === 'bottom' ? styles.wave___bottom : styles.wave___top} ${type === 'circle' ? styles.circle : ''}`}>
      {
        type === 'normal' ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={styles.wave__svg}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
          </svg>
        ) : (
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`${styles.wave__svg} ${styles.wave__svg___circle}`}>
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill={color}></path>
          </svg>
        )
      }
    </div>
  )
}

export default Wave