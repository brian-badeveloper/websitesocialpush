import type { Meta, StoryObj } from '@storybook/react'
import RegisterForm from './RegisterForm'

const meta = {
  title: 'Pages/Register/Organism/RegisterForm',
  component: RegisterForm,
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
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const registerForm: Story = {
  args: {
    lng: 'es'
  },
}