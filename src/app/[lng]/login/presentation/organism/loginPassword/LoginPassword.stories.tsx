import type { Meta, StoryObj } from '@storybook/react'
import LoginPassword from './LoginPassword'

const meta = {
  title: 'Pages/Login/Organism/LoginPassword',
  component: LoginPassword,
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
} satisfies Meta<typeof LoginPassword>

export default meta
type Story = StoryObj<typeof meta>

export const loginPassword: Story = {
  args: {
    onChangeView: () => {},
    onChangeEmail: () => {},
    email: '',
    onChangeOtp: () => {},
    otp: '',
    lng: 'es'
  },
}