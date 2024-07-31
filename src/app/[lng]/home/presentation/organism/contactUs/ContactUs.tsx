'use client'
import Image from 'next/image'

import './contactUs.css'


import stars from '@/assets/images/stars.svg'
import FormContact from '../formContact/FormContact'
import { ContactUsProps } from './ContactUsProps'

const ContactUs = ({
  lng,
  defaultLang,
  title,
  paragraph
}: ContactUsProps) => {
  return (
    <section className="contact-us">
      <div className="container">
        <div className="row contact-us__row">
          <div className="contact-us__text">
            <Image src={stars} className="contact-us__image" alt="Stars" />
            <h2 className="contact-us__title">{title}</h2>
            <p className="contact-us__paragraph">{paragraph}</p>
          </div>
          <div className="contact-us__form">
            <FormContact lng={lng}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs