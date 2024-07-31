import { MouseEvent, useState } from 'react'
import Image from 'next/image'

import './likes.css'

import Header from '@/components/molecules/header/Header'

import emojinKiss from '@/assets/images/emojin-kiss.svg'
import { LikesProps } from './LikesProps'
import LikeItems from '../likeItems/LikeItems'

const Likes = ({lng, title, text, dataCards}: LikesProps) => {

  return (
    <section className="likes">
      <div className="container">
        <Header 
          title={title}
          paragraph={text}
          colorTitle="#555"
          colorParagraph="#000"
        >
          <Image src={emojinKiss} alt="Likes" />
        </Header>

        <LikeItems lng={lng} dataCards={dataCards} />
      </div>
    </section>
  )
}

export default Likes