import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta = {
  title: 'Components/Atoms/Select',
	component: Select,
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
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const select: Story = {
  args: {
    label: 'Options',
    placeholder: 'Select an option...',
    name: 'name',
    size: 'md',
    color: '#868686',
    border: 2,
    borderRadius: 10,
    borderColor: '#a8a6a6',
    options: [
      {
        name: 'option 1',
        value: 'option 1'
      },
      {
        name: 'option 2',
        value: 'option 2'
      }
    ],
    onChange: () => {}
  }
}

