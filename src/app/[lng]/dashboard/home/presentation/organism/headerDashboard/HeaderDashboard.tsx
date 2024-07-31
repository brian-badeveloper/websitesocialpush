import React from 'react'
import Image from 'next/image'

import './headerDashboard.css'

import imageOne from "@/assets/images/emoji-love.png"
import imageTwo from "@/assets/images/comment-emoji.png"
import imageThree from "@/assets/images/starts-row.svg"

import { HeaderDashboardProps } from './HeaderDashboardProps'
import Calendar from '@/components/atoms/calendar/Calendar'
import ProfileImage from '@/components/molecules/profileImage/ProfileImage'

const HeaderDashboard = ({title, paragraph, language = 'en'}: HeaderDashboardProps) => {
  return (
    <div className="header-dashboard">
      <div className="header-dashboard__calendar">
        <Calendar
          language={language}
          bgStyle="primary"
          size="auto"
        />
      </div>
      <div className="header-dashboard__banner">
        <div className="header-dashboard__image">
          <ProfileImage
            icon="UserInSolid"
            bgStyle="tertiary"
          />
          <Image src={imageOne} className="header-dashboard__image-one" alt="" />
          <Image src={imageTwo} className="header-dashboard__image-two" alt="" />
          <Image src={imageThree} className="header-dashboard__image-three" alt="" />
        </div>
        <div className="header-dashboard__content">
          <h2 className="header-dashboard__title">{title}</h2>
          <p className="header-dashboard__paragraph">{paragraph}</p>
          <Image src={imageThree} className="header-dashboard__content-img" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeaderDashboard