import type { Meta, StoryObj } from '@storybook/react'
import ProfileForm from './ProfileForm'

const meta = {
  title: 'Dashboard/Profile/Organism/ProfileForm',
  component: ProfileForm,
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
} satisfies Meta<typeof ProfileForm>

export default meta
type Story = StoryObj<typeof meta>

export const profileForm: Story = {
  args: {
    lng: 'es'
  },
}