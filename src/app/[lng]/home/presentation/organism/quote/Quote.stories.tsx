import type { Meta, StoryObj } from '@storybook/react'
import Quote from './Quote'

const meta = {
  title: 'Pages/Home/Organism/Quote',
  component: Quote,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    type: {
      options: [
        'Instagram',
        'Tiktok',
        'Youtube',
        'Facebook',
        'Twitter',
        'Twitch',
        'Spotify',
        'LinkedIn',
        'SoundCloud',
        'Threads'
      ],
      control: { type: 'select' }
    }
  },
} satisfies Meta<typeof Quote>

export default meta
type Story = StoryObj<typeof meta>

export const quote: Story = {
  args: {
    text: 'Aumenta tus seguidores, llega a tener más audiencia gracias a nuestro crecimiento orgánico',
    type: 'Instagram',
    comment: 87,
    followers: '10k',
    likes: 700
  },
}