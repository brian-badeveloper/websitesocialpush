import Image from 'next/image'

import './faqs.css'

import faqImg from '@/assets/images/faq.png'
import Faq from '@/components/molecules/faq/Faq'
import { FaqsProps } from './FaqsProps'

const Faqs = ({title, questions}: FaqsProps) => {

  return (
    <section className="faqs">
      <div className="container">
        <div className="row faqs__row">
          <div className="faqs__text">
            <h2 className="faqs__title">{title}</h2>
          </div>
          <div className="faqs__items">
            {
              questions?.map((item, key) => (
                <Faq
                  title={item.title}
                  text={item.text}
                  key={`faq-${key}`}
                />
              ))
            }
          </div>
          <div className="faqs__image">
            <Image src={faqImg} className="faqs__image-src" alt="Faqs" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs