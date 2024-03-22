import type { Meta, StoryObj } from '@storybook/react'
import Wave from './Wave'

const meta = {
  title: "Components/Atoms/Wave",
  component: Wave,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: "color" },
    },
    orientation: {
      options: ["top", "bottom"],
      control: { type: "select" },
    },
    type: {
      options: ["normal", "circle"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Wave>

export default meta
type Story = StoryObj<typeof meta>

export const wave: Story = {
  args: {
    color: '#fff',
    orientation: 'top',
    type: 'circle'
  }
}
