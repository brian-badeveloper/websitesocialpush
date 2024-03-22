import styles from './infoText.module.css'

import { InfoTextProps } from './InfoTextProps'

const InfoText = ({ body }: InfoTextProps) => {
  return (
    <section className={styles.info_text}>
      <article className={styles.info_text__content} dangerouslySetInnerHTML={{ __html: body ?? '' }}></article>
    </section>
  )
}

export default InfoText