import type { Meta, StoryObj } from '@storybook/react'
import LoginView from './LoginView'

const meta = {
  title: 'Pages/Login/Organism/LoginView',
  component: LoginView,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['es', 'en'],
      control: { type: 'select' }
    }
  },
} satisfies Meta<typeof LoginView>

export default meta
type Story = StoryObj<typeof meta>

export const loginView: Story = {
  args: {
    lng: 'es',
  },
}