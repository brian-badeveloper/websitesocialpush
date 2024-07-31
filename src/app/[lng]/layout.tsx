'use client'
import { useEffect, useState } from 'react';

import './globals.css'

import { LayoutParams } from '@/models/interfaces/ParamsProps'
import { InitializeLanguage } from '@/helpers/language';
import SiteProvider from '@/context/SiteProvider';
import Loading from './loading';

export default function RootLayout({
  children,
  params
}: LayoutParams) {

  InitializeLanguage()

  const [load, setLoad] = useState<boolean>(true)

	const onLoading = () => {
		setTimeout(() => {
			setLoad(false)
		},500)
	}

	useEffect(() => {
		onLoading()
	},[])

  return (
    <SiteProvider>
    <html lang={params.lng}>
      <body>
        {
					load && <Loading />
				}
        {children}
      </body>
    </html>
    </SiteProvider>
  );
}
