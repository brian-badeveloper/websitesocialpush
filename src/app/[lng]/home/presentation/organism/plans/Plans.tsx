import { MouseEvent, useState } from 'react'
import Image from 'next/image'

import './plans.css'

import Header from '@/components/molecules/header/Header'

import bars from '@/assets/images/bars.svg'
import { PlansProps } from './PlansProps'
import PlanItems from '../planItems/PlanItems'

const Plans = ({lng, title, text, dataCards}: PlansProps) => {

  return (
    <section className="plans">
      <div className="container">
        <Header 
          title={title}
          paragraph={text}
          colorTitle="#555"
          colorParagraph="#000"
        >
          <Image src={bars} alt="plans" />
        </Header>

        <PlanItems dataCards={dataCards} lng={lng} />
      </div>
    </section>
  )
}

export default Plans