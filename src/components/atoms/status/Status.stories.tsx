import type { Meta, StoryObj } from '@storybook/react'
import Status from './Status'

const meta = {
  title: 'Components/Atoms/Status',
  component: Status,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    status: {
      options: [
        'paid',
        'unpaid',
        'cancel',
      ],
      control: { type: 'select' },
    },
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
    textSize: {
      control: { type: 'number', min: 1 },
    },
    language: {
      options: [
        'en',
        'es',
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof meta>

export const status: Story = {
  args: {
    status: 'paid',
    size: 'sm',
    textSize: 14,
    disable: false,
    language: 'en'
  },
}
