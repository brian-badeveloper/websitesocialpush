import type { Meta, StoryObj } from '@storybook/react'
import RegisterView from './RegisterView'

const meta = {
  title: 'Pages/Register/Organism/RegisterView',
  component: RegisterView,
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
} satisfies Meta<typeof RegisterView>

export default meta
type Story = StoryObj<typeof meta>

export const registerView: Story = {
  args: {
    lng: 'es'
  },
}