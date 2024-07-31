import type { Meta, StoryObj } from '@storybook/react'
import { QuoteImageFactory } from './domain/use-cases/factoryQuoteImage'
import { quoteImagesImport } from './domain/use-cases/quoteImagesImport'
import { QuoteImage } from './domain/models/QuoteImage'

const meta = {
  title: 'Pages/Home/Atoms/QuoteImage',
  component: QuoteImageFactory,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof QuoteImageFactory>

export default meta
type Story = StoryObj<typeof meta>

export const quoteImage: Story = {
  args: {
    clStyle: 'img',
		name: 'Instagram'
  },
	render: (args: QuoteImage) => (
		<section
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}
		>
			{Object.entries(quoteImagesImport).map((image, index) => (
				<article
					key={`${index}`}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '5px'
					}}
				>
					{image[1]({ ...args })}
					<span>{image[0]}</span>
				</article>
			))}
		</section>
	)
}
