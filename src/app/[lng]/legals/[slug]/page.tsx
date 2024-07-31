import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SearchParams } from "@/models/interfaces/ParamsProps"
import Terms from './presentation/organism/terms/Terms'
import Policies from './presentation/organism/policies/Policies'

const sections = [
	{
		title: 'Terminos y condiciones',
		slug: 'terms-and-conditions'
	},
	{
		title: 'Políticas de Privacidad',
		slug: 'policies'
	}
]

export const generateMetadata = ({ params }: SearchParams): Metadata  => {
  return {
    title: 'Social Push',
    description: ''
  }
}

const Page = ({ params: {lng, slug} }: SearchParams) =>{
  
	const section = sections.find(item => item.slug === slug)

	if (!section) {
			notFound()
	}

	return (
		<>
		{
			{
				'terms-and-conditions': <Terms lng={lng} />,
				'policies': <Policies lng={lng} />
			}[section.slug]
		}
		</>
	)
}


export default Page
