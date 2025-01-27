import type { Meta, StoryObj } from '@storybook/react'
import Policies from './Policies'

const meta = {
  title: 'Pages/Legals/Organism/Policies',
  component: Policies,
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
} satisfies Meta<typeof Policies>

export default meta
type Story = StoryObj<typeof meta>

export const policies: Story = {
  args: {
    lng: 'es'
  },
}