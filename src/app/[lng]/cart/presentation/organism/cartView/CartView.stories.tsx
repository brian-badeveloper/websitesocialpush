import type { Meta, StoryObj } from '@storybook/react'
import CartView from './CartView'

const meta = {
  title: 'Pages/Cart/Organism/CartView',
  component: CartView,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['es', 'en'],
      control: { type:'select' }
    }
  },
} satisfies Meta<typeof CartView>

export default meta
type Story = StoryObj<typeof meta>

export const cartView: Story = {
  args: {
    lng: 'es'
  },
}