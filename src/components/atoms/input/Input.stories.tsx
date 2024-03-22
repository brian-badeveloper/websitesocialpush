import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta = {
  title: 'Components/Atoms/Input',
	component: Input,
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
    background: {
      control: { type: 'color' }
    },
    type: {
      options: [
        'text',
        'number',
        'email',
        'password',
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const input: Story = {
  args: {
    label: 'Name',
    placeholder: 'Write here...',
    name: 'name',
    type: 'text',
    size: 'md',
    color: '#868686',
    border: 2,
    borderRadius: 10,
    borderColor: '#a8a6a6',
    onChange: () => {}
  }
}