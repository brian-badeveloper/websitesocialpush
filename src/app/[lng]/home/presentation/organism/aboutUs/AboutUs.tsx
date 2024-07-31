import Image from 'next/image'

import './aboutUs.css'

import aboutUs from '@/assets/images/info.png'
import infoOne from '@/assets/images/info-1.png'
import infoTwo from '@/assets/images/info-2.png'
import infoThree from '@/assets/images/info-3.png'
import infoFour from '@/assets/images/info-4.png'
import { AboutUsProps } from './AboutUsProps'

const AboutUs = ({subtitle, title, paragraph}: AboutUsProps) => {

  return (
    <section className="about-us">
      <div className="container">
        <div className="row about-us__row">
          <div className="about-us__text">
            <h3 className="about-us__subtitle">{subtitle}</h3>
            <h2 className="about-us__title" dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p className="about-us__paragraph">{paragraph}</p>
          </div>
          <div className="about-us__image">
            <Image src={aboutUs} className="about-us__image-src" alt="Somos SocialPush" />
          </div>
          <div className="about-us__images">
            <div className="about-us__images__row">
              <div className="about-us__images-item">
                <Image src={infoOne} className="about-us__images-item__img" alt="Info One" />
              </div>
              <div className="about-us__images-item">
                <Image src={infoTwo} className="about-us__images-item__img" alt="Info Two" />
              </div>
              <div className="about-us__images-item">
                <Image src={infoThree} className="about-us__images-item__img" alt="Info Three" />
              </div>
              <div className="about-us__images-item">
                <Image src={infoFour} className="about-us__images-item__img" alt="Info Four" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs