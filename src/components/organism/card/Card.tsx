import Image from 'next/image'

import './card.css'

import crown from "@/assets/images/crown.png"
import star from "@/assets/images/start.png"

import { CardProps } from './CardProps'

const Card = ({
  bgStyle,
  border,
  borderBg,
  size,
  children,
  senior = false,
  stars = 0
}: CardProps) => {
  return (
    <div 
      className={`card ${size}`}
    > 
      {
        senior && (
          <Image src={crown} className="card__crown" alt="" />
        )
      }
      <div 
        className={`card__container ${bgStyle}`}
        style={{ 
         border: (border && border > 0) ? `${border}px solid ${borderBg}` : 'none'
        }}
      >
      {children}
      </div>
      {
        stars > 0 && (
          <div className="card__stars">
          {
            (stars >= 1) ? <Image src={star} alt="" /> : ''
          }
          {
            (stars >= 2) ? <Image src={star} alt="" /> : ''
          }
          {
            (stars >= 3) ? <Image src={star} alt="" /> : ''
          }
          </div>
        )
      }
    </div>
  )
}

export default Card