import type { Meta, StoryObj } from '@storybook/react'
import { IconFactory } from './domain/use-cases/factoryIcon'
import { iconsImport } from './domain/use-cases/iconsImport'
import { Icon } from './domain/models/Icon'

const meta = {
  title: 'Components/Atoms/Icons',
	component: IconFactory,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
   //
  },
} satisfies Meta<typeof IconFactory>

export default meta
type Story = StoryObj<typeof meta>

export const icons: Story = {
	args: {
		height: 50,
		width: 50,
		color: '#000000'
	} as Icon,
	render: (args: Icon) => (
	<section
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}
		>
			{Object.entries(iconsImport).map((icon, index) => (
				<article
					key={`${index}`}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '5px'
					}}
				>
					{icon[1]({ ...args })}
					<span>{icon[0]}</span>
				</article>
			))}
		</section>
	)
}
