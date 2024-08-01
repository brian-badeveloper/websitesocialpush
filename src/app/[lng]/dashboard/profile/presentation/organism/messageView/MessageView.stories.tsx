import type { Meta, StoryObj } from '@storybook/react'
import MessageView from './MessageView'

const meta = {
  title: 'Dashboard/Profile/Organism/MessageView',
  component: MessageView,
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
} satisfies Meta<typeof MessageView>

export default meta
type Story = StoryObj<typeof meta>

export const messageView: Story = {
  args: {
    lng: 'es'
  },
}