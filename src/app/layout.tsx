import type { Metadata } from 'next'

import './[lng]/globals.css'

import { LayoutParams } from '@/models/interfaces/ParamsProps'
import { InitializeLanguage } from '@/helpers/language';

export const metadata: Metadata = {
  title: "Social Push",
  description: "",
};

export default function RootLayout({
  children,
  params
}: LayoutParams) {

  InitializeLanguage()

  return (
    <html lang={params.lng} suppressHydrationWarning={true}>
      <body>
        {children}
      </body>
    </html>
  );
}
