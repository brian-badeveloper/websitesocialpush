import type { Meta, StoryObj } from '@storybook/react'
import { QuoteImageFactory } from './domain/use-cases/factoryQuoteImage'
import { QuoteImage } from './domain/models/QuoteImage'

const meta = {
  title: 'Pages/Home/Atoms/QuoteImageFactory',
  component: QuoteImageFactory,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    name: {
			options: [
				'Instagram',
				'Tiktok',
				'Youtube',
				'Facebook',
				'Twitter',
				'Twitch',
				'Spotify',
				'LinkedIn',
				'SoundCloud',
				'Threads'
			],
			control: { type: 'select' }
		}
  },
} satisfies Meta<typeof QuoteImageFactory>

export default meta
type Story = StoryObj<typeof meta>

export const quoteImageFactory: Story = {
  args: {
    clStyle: 'img',
		name: 'Instagram'
  },
}
