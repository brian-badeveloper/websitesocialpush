import type { Meta, StoryObj } from '@storybook/react'
import CartBar from './CartBar'

const meta = {
  title: 'Pages/Cart/Organism/CartBar',
  component: CartBar,
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
} satisfies Meta<typeof CartBar>

export default meta
type Story = StoryObj<typeof meta>

export const cartBar: Story = {
  args: {
    lng: 'es'
  },
}