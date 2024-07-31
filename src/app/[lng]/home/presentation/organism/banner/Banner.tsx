import Image from 'next/image';

import './banner.css'

import bannerImg from '@/assets/images/banner.png'

import Button from '@/components/atoms/button/Button'
import useBanner from './useBanner'
import { BannerProps } from './BannerProps'

const Banner = ({title, paragraph, textBtn}: BannerProps) => {

  const { onAction } = useBanner('followers')

  return (
    <section className="banner">
      <div className="container">
        <div className="row banner__row">
          <div className="banner__text">
            <h1 className="banner__title">{title}</h1>
            <p className="banner__paragraph">{paragraph}</p>
            <Button
              bgStyle="primary"
              onClick={onAction}
              size="sm"
              textSize={18}
            >
              {textBtn}
            </Button>
          </div>
          <div className="banner__image">
            <Image src={bannerImg} className="banner__image-src" alt='hola' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner