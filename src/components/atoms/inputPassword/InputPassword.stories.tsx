import type { Meta, StoryObj } from '@storybook/react'
import InputPassword from './InputPassword'

const meta = {
  title: 'Components/Atoms/InputPassword',
  component: InputPassword,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        'xl',
        'auto',
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof InputPassword>

export default meta
type Story = StoryObj<typeof meta>

export const inputPassword: Story = {
  args: {
    label: 'Contraseña',
    placeholder: 'Write here...',
    name: 'password',
    size: 'md',
    color: '#868686',
    border: 2,
    borderRadius: 10,
    borderColor: '#a8a6a6',
    onChange: () => {}
  },
}