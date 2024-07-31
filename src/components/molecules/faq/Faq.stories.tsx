import type { Meta, StoryObj } from '@storybook/react'
import Faq from './Faq'

const meta = {
  title: 'Components/Molecules/Faq',
  component: Faq,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Faq>

export default meta
type Story = StoryObj<typeof meta>

export const faq: Story = {
  args: {
    title: '¿En Cuanto tiempo recibiré mis seguidores?',
    text: 'Su campaña de impulso se lanza al recibir su pago. La opción de “Entrega ultrarrápida” (gratuita) le permite recibir su pedido más rápido, en pocas horas. La entrega estándar es un método de entrega progresiva, que parece más natural.',
  }
}
