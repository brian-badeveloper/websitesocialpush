import type { Meta, StoryObj } from '@storybook/react'
import Figure from './Figure'

const meta = {
  title: 'Components/Atoms/Figure',
  component: Figure,
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
  },
} satisfies Meta<typeof Figure>

export default meta
type Story = StoryObj<typeof meta>

export const figure: Story = {
  args: {
    color: '#EEE',
    orientation: 'top',
  }
}
