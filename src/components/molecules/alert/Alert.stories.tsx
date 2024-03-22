import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'

const messages = [
  'El campo Nombre es Obligatorio',
  'Debes aceptar las politicas de privacidad'
]

const meta = {
  title: 'Components/Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    type: {
      options: [
        'success',
        'error',
        'info',
        'danger',
        'warning'
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const alert: Story = {
  args: {
    messages: messages,
    onStatus: () => {},
    type: 'error',
    fixed: true
  }
}