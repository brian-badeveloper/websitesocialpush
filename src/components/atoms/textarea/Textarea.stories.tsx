import type { Meta, StoryObj } from '@storybook/react'
import Textarea from './Textarea'

const meta = {
  title: 'Components/Atoms/Textarea',
	component: Textarea,
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
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const textarea: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write here...',
    name: 'message',
    size: 'md',
    color: '#868686',
    border: 2,
    borderRadius: 10,
    borderColor: '#a8a6a6',
    onChange: () => {}
  }
}