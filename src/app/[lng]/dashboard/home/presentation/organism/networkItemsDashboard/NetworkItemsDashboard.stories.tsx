import type { Meta, StoryObj } from '@storybook/react'
import NetworkItemsDashboard from './NetworkItemsDashboard'

const meta = {
  title: 'Dashboard/Home/Organism/NetworkItemsDashboard',
  component: NetworkItemsDashboard,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof NetworkItemsDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const networkItemsDashboard: Story = {
  args: {
    //
  },
}