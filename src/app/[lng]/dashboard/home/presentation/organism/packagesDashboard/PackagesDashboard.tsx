import { MouseEvent, useState } from 'react'
import Image from 'next/image'

import './packagesDashboard.css'

import Header from '@/components/molecules/header/Header'

import statistics from '@/assets/images/statistics-up.svg'
import { PackagesDashboardProps } from './PackagesDashboardProps'
import PackageItemsDashboard from '../packageItemsDashboard/PackageItemsDashboard'

const PackagesDashboard = ({lng, title, text, dataCards}: PackagesDashboardProps) => {

  return (
    <section className="packages-dashboard">
      <Header 
        title={title}
        paragraph={text}
        colorTitle="var(--main)"
        colorParagraph="#000"
        orientation='left'
      >
        <Image src={statistics} alt="packages" />
      </Header>

      <PackageItemsDashboard dataCards={dataCards} lng={lng} />
    </section>
  )
}

export default PackagesDashboard