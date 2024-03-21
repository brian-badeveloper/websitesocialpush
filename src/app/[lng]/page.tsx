import { Params, SearchParams } from '@/models/interfaces/ParamsProps'
import HomePage from './home/page'

export default function Home({params}: SearchParams) {
	return (
		<main>
			<HomePage params={params} />
		</main>
	)
}