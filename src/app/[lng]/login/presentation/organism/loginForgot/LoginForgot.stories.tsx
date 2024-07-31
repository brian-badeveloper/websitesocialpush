import type { Meta, StoryObj } from '@storybook/react'
import LoginForgot from './LoginForgot'

const meta = {
  title: 'Pages/Login/Organism/LoginForgot',
  component: LoginForgot,
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
} satisfies Meta<typeof LoginForgot>

export default meta
type Story = StoryObj<typeof meta>

export const loginForgot: Story = {
  args: {
    onChangeView: () => {},
    onChangeEmail: () => {},
    lng: 'es',
  },
}