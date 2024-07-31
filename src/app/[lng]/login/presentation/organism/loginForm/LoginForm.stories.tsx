import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'

const meta = {
  title: 'Pages/Login/Organism/LoginForm',
  component: LoginForm,
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
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const loginForm: Story = {
  args: {
    onChangeView: () => {},
    lng: 'es'
  },
}