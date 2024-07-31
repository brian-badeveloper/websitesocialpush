import type { Meta, StoryObj } from '@storybook/react'
import NetworkItems from './NetworkItems'

const meta = {
  title: 'Pages/Home/Organism/NetworkItems',
  component: NetworkItems,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof NetworkItems>

export default meta
type Story = StoryObj<typeof meta>

export const networkItems: Story = {
  args: {
    //
  },
}