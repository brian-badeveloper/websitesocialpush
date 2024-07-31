import type { Meta, StoryObj } from '@storybook/react'
import LoginOTP from './LoginOTP'

const meta = {
  title: 'Pages/Login/Organism/LoginOTP',
  component: LoginOTP,
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
} satisfies Meta<typeof LoginOTP>

export default meta
type Story = StoryObj<typeof meta>

export const loginOTP: Story = {
  args: {
    email: '',
    onChangeView: () => {},
    onChangeOtp: () => {},
    lng: 'es'
  },
}