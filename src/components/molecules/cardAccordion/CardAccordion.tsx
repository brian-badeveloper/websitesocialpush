import React, { useState } from 'react'

import './cardAccordion.css'

import { CardAccordionProps } from './CardAccordionProps'

const CardAccordion = ({
  children,
  text,
  textClose,
  orientation,
  color = "#706FE5",
  margin
}: CardAccordionProps) => {

  const [active, setActive] = useState<Boolean>(false)

  const onChangeActive = () => {
    setActive(!active)
  }

  return (
    <div className={`card-accordion ${active ? 'active' : ''} ${margin}`}>
      <div className="card-accordion__content">
        {children}
      </div>
      <button 
        className={`card-accordion__btn ${orientation}`} 
        onClick={onChangeActive}
        style={{
          color: color
        }}
      >{!active ? text : textClose}</button>
    </div>
  )
}

export default CardAccordion