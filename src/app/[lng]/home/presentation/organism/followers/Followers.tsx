import { MouseEvent, useState } from 'react'
import Image from 'next/image'

import './followers.css'

import Header from '@/components/molecules/header/Header'
import Button from '@/components/atoms/button/Button'

import userPlus from '@/assets/images/user.svg'
import { FollowersProps } from './FollowersProps'
import FollowerItems from '../followerItems/FollowerItems'

const Followers = ({lng, title, text, textTwo, textBtn, textBtnActive, dataCards}: FollowersProps) => {

  const [show, setShow] = useState<boolean>(false)
  
  const onShow = (e:MouseEvent) => {
    setShow(!show)
  }

  return (
    <section className="followers">
      <div className="container">
        <Header 
        title={title}
        colorTitle="#ffffff"
        >
          <Image src={userPlus} alt="Seguidores" />
        </Header>

        <FollowerItems dataCards={dataCards} show={show} lng={lng} />
        
        <div className="followers__content">
          <p className="followers__paragraph">{text}</p>
          <div className="followers__button">
            <Button
              bgStyle="blue"
              onClick={(e) => onShow(e)}
              size="sm"
              textSize={16}
            >
              { 
                !show ? textBtn : textBtnActive 
              }
            </Button>
          </div>
          <p className="followers__paragraph">{textTwo}</p>
        </div>
      </div>
    </section>
  )
}

export default Followers