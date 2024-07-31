import React from 'react'

import './profileImage.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { ProfileImageProps } from './ProfileImageProps'

const ProfileImage = ({
  icon = "UserInSolid",
  bgStyle,
  size,
  border = 3,
  borderRadius = 100,
  borderColor = '#fff'
}: ProfileImageProps) => {
  return (
    <div 
      className={`profile-image ${bgStyle} ${size}`}
      style={{ 
        border: `solid ${border}px ${borderColor}`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      <IconFactory
        name={icon}
        width={100}
        height={100}
        color="var(--white)"
      />
    </div>
  )
}

export default ProfileImage