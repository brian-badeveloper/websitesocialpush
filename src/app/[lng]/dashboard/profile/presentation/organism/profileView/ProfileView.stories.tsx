import type { Meta, StoryObj } from '@storybook/react'
import ProfileView from './ProfileView'

const meta = {
  title: 'Dashboard/Profile/Organism/ProfileView',
  component: ProfileView,
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
} satisfies Meta<typeof ProfileView>

export default meta
type Story = StoryObj<typeof meta>

export const profileView: Story = {
  args: {
    lng: 'es'
  },
}