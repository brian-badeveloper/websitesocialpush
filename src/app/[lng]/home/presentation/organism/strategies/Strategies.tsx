import Image from 'next/image'

import './strategies.css'

import marketing from '@/assets/images/marketing.svg'
import ListOption from '@/components/molecules/listOption/ListOption'
import { StrategiesProps } from './StrategiesProps'

const Strategies = ({subtitle, title, paragraph, options}: StrategiesProps) => {
  return (
    <section className="strategies">
      <div className="container">
         <div className="row strategies__row">
          <div className="strategies__image">
            <Image src={marketing} className="strategies__image-src" alt="Marketing" />
          </div>
          <div className="strategies__text">
            <h3 className="strategies__subtitle">{subtitle}</h3>
            <h2 className="strategies__title">{title}</h2>
            <p className="strategies__paragraph">{paragraph}</p>

            <ul className="strategies__options">
            {
              options?.map((item, key) => (
                <ListOption 
                  color="#596CFF"
                  icon="CircleCheck"
                  text={item}
                  key={`detail-${key}`}
                />
              ))
            }
            </ul>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Strategies