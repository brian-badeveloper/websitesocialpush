import type { Meta, StoryObj } from '@storybook/react'
import CardValue from './CardValue'

const meta = {
  title: 'Components/Molecules/CardValue',
  component: CardValue,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    price: {
      control: { type: 'number', min: 0 },
    },
  },
} satisfies Meta<typeof CardValue>

export default meta
type Story = StoryObj<typeof meta>

export const cardValue: Story = {
  args: {
    symbol: "$",
    price: 250,
    currency: "USD",
    title: "Pago Único",
    subtitle: "",
    paragraph: "Seguidores",
  }
}