import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Social Push",
  description: "",
}

// components, interfaces, types and functions

import { SearchParams } from '@/models/interfaces/ParamsProps'
import RegisterView from './presentation/organism/registerView/RegisterView'

const RegisterPage = ({params: { lng }}: SearchParams) => {
	return (
		<RegisterView lng={lng} />
	)
}

export default RegisterPage
