import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Social Push",
  description: "",
}

// components, interfaces, types and functions

import { Params, SearchParams } from "@/models/interfaces/ParamsProps"
import HomePage from "./home/page"

export default function Home({params: { lng } }: SearchParams) {
	return <main>
		<HomePage lng={lng} />
	</main>
}