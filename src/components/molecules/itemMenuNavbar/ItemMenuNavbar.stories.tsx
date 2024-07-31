import type { Meta, StoryObj } from '@storybook/react'
import ItemMenuNavbar from './ItemMenuNavbar'
import { iconsImport } from '@/components/atoms/icons/domain/use-cases/iconsImport'

const meta = {
  title: 'Components/Molecules/ItemMenuNavbar',
  component: ItemMenuNavbar,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    icon: {
      options: Object.keys(iconsImport),
      control: { type: 'select' },
    },
    type: {
      options: [
        'followers',
        'likes',
        'plans',
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof ItemMenuNavbar>

export default meta
type Story = StoryObj<typeof meta>

export const itemMenuNavbar: Story = {
  args: {
    icon: "Instagram",
    text: "Instagram",
    redirectTo: "#",
    network: "Instagram",
    type: "followers"
  }
}