import type { Meta, StoryObj } from '@storybook/react'
import NetworkItemDashboard from './NetworkItemDashboard'
import { IconsType } from "@/components/atoms/icons/domain/models/IconsType"

const meta = {
  title: 'Dashboard/Home/Organism/NetworkItemDashboard',
  component: NetworkItemDashboard,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    icon: {
      options: [
        'Instagram',
        'Tiktok',
        'Youtube',
        'Facebook',
        'FacebookCircle',
        'Twitter',
        'Twitch',
        'Plus',
        'ArrowDown',
        'User',
        'Cart',
        'CircleCheck',
        'Spotify',
        'LinkedIn',
        'SoundCloud',
        'Threads'
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof NetworkItemDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const networkItemDashboard: Story = {
  args: {
    icon: "Instagram",
    text: "Instagram",
    onClick: () => {}
  },
}