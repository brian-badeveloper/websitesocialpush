import type { Meta, StoryObj } from '@storybook/react'
import CardHeader from './CardHeader'
import { NetworkName, NetworkType } from "@/models/types/NetworkType"

const meta = {
  title: 'Components/Atoms/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    bgStyle: {
      options: ["primary", "secondary", "tertiary", "blue", "black", "light"],
      control: { type: "radio" },
    },
    type: {
      options: [
        'color',
        'withoutColor',
      ],
      control: { type: 'select' },
    },
    size: {
      control: { type: 'number', min: 1 },
    },
    orientation: {
      options: [
        'left',
        'center',
        'right',
      ],
      control: { type: 'select' },
    },
    network: {
      options: NetworkName,
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CardHeader>

export default meta
type Story = StoryObj<typeof meta>

export const cardHeader: Story = {
  args: {
    title: '35,000 SEGUIDORES',
    bgStyle: 'primary',
    type: 'color',
    size: 14,
    orientation: "center",
    network: "Instagram",
    networkText: "Instagram"
  }
}