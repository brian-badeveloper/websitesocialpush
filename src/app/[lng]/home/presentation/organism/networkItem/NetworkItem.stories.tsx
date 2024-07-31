import type { Meta, StoryObj } from '@storybook/react'
import NetworkItem from './NetworkItem'
import { IconsType } from "@/components/atoms/icons/domain/models/IconsType"

const meta = {
  title: 'Pages/Home/Organism/NetworkItem',
  component: NetworkItem,
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
} satisfies Meta<typeof NetworkItem>

export default meta
type Story = StoryObj<typeof meta>

export const networkItem: Story = {
  args: {
    icon: "Instagram",
    text: "Instagram",
    onClick: () => {}
  },
}