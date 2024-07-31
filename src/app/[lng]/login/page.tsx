import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Social Push",
  description: "",
}

// components, interfaces, types and functions

import { SearchParams } from '@/models/interfaces/ParamsProps'
import LoginView from './presentation/organism/loginView/LoginView'

const HomePage = ({ params: { lng } }: SearchParams) => {
  return (
    <LoginView lng={lng} />
  )
}

export default HomePage