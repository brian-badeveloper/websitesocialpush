import type { Meta, StoryObj } from '@storybook/react'
import Strategies from './Strategies'

const meta = {
  title: 'Pages/Home/Organism/Strategies',
  component: Strategies,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Strategies>

export default meta
type Story = StoryObj<typeof meta>

export const strategies: Story = {
  args: {
    subtitle: 'Estrategias',
    title: 'Marketing Social Totalmente Orgánico.',
    paragraph: 'Crea tu cuenta, asignaremos tu campaña a tu nuevo administrador de cuentas de redes sociales y pregunte algunos preguntas sobre el tipo de seguidores que le gustaría recibir.',
    options: [
      'Apunta a tu nicho',
      'Estrategias de Alcance',
      'Estrategias de seguidores',
      'Gestionado por inteligencia artificial.',
      'TOS compliant'
    ]
  },
}