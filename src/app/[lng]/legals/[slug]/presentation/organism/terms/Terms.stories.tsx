import type { Meta, StoryObj } from '@storybook/react'
import Terms from './Terms'

const meta = {
  title: 'Pages/Legals/Organism/Terms',
  component: Terms,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['es','en'],
      control: { type: 'select' }
    }
  },
} satisfies Meta<typeof Terms>

export default meta
type Story = StoryObj<typeof meta>

export const terms: Story = {
  args: {
    lng: 'es'
  },
}