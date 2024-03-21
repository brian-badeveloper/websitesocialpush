import type { Metadata } from 'next'

import './globals.css'

import { LayoutParams } from '@/models/interfaces/ParamsProps'
import { InitializeLanguage } from '@/helpers/language'

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
  params
}: LayoutParams) {
  InitializeLanguage()

  return (
    <html lang={params.lng}>
      <body>
        {children}
      </body>
    </html>
  );
}
