import type { Meta, StoryObj } from '@storybook/react'
import CartTable from './CartTable'

const meta = {
  title: 'Pages/Cart/Organism/CartTable',
  component: CartTable,
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
} satisfies Meta<typeof CartTable>

export default meta
type Story = StoryObj<typeof meta>

export const cartTable: Story = {
  args: {
    lng: 'es'
  },
}