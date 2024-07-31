import type { Meta, StoryObj } from '@storybook/react'
import ProfileImage from './ProfileImage'

const meta = {
  title: 'Components/Molecules/ProfileImage',
  component: ProfileImage,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    bgStyle: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'blue',
        'black',
        'light',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: [
        'sm',
        'md',
        'lg',
        'xl',
        'auto',
      ],
      control: { type: 'select' },
    },
    border: {
      control: { type: 'number', min: 1 },
    },
    borderRadius: {
      control: { type: 'number', min: 1 },
    },
  },
} satisfies Meta<typeof ProfileImage>

export default meta
type Story = StoryObj<typeof meta>

export const profileImage: Story = {
  args: {
    icon: 'UserInSolid',
    bgStyle: 'primary',
    size: 'sm',
    border: 3,
    borderRadius: 100,
    borderColor: '#fff'
  }
}
