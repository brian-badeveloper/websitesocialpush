import type { Meta, StoryObj } from '@storybook/react'
import CartInput from './CartInput'

const meta = {
  title: 'Components/Molecules/CartInput',
  component: CartInput,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof CartInput>

export default meta
type Story = StoryObj<typeof meta>

export const cartInput: Story = {
  args: {
    valueInitial: 1,
    onQuantity: () => {}
  }
}
