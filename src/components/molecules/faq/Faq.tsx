import { MouseEventHandler, useState } from 'react'

import './faq.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { FaqProps } from './FaqProps'

const Faq = ({title, text}: FaqProps) => {

  const [active, setActive] = useState<boolean>(false)

  const onChangeStatus:MouseEventHandler<HTMLButtonElement|HTMLHeadingElement> = (e) => {
    e.preventDefault()
    setActive(!active)

  }

  return (
    <div className={`faq ${active ? 'active' : ''}`}>
      <div className="faq__header">
        <button className="faq__button" onClick={onChangeStatus}>
          <IconFactory
            color="#fff"
            name={active ? "Line" : "PlusSharp"}
            width={active ? 30 : 20 }
            height={active ? 30 : 20 }
          />
        </button>
        <h3 className="faq__title" onClick={onChangeStatus}>{title}</h3>
      </div>
      <div className="faq__body">
        <p className="faq__paragraph" dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  )
}

export default Faq