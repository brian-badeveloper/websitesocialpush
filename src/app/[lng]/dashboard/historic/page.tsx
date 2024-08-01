import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Social Push",
  description: "",
}

// components, interfaces, types and functions

import { SearchParams } from '@/models/interfaces/ParamsProps'
import HistoricView from './presentation/organism/historicView/HistoricView'

const HistoricPage = ({params: { lng }}: SearchParams) => {
	return (
		<HistoricView lng={lng} />
	)
}

export default HistoricPage