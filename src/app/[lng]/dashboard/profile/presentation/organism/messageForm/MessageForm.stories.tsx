import type { Meta, StoryObj } from '@storybook/react'
import MessageForm from './MessageForm'

const meta = {
  title: 'Dashboard/Profile/Organism/MessageForm',
  component: MessageForm,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['es','en'],
      control: { type: 'select' }
    }
  },
} satisfies Meta<typeof MessageForm>

export default meta
type Story = StoryObj<typeof meta>

export const messageForm: Story = {
  args: {
    lng: 'es'
  },
}