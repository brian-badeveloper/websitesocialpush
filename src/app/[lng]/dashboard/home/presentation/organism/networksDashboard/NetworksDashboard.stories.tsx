import type { Meta, StoryObj } from '@storybook/react'
import NetworksDashboard from './NetworksDashboard'

const meta = {
  title: 'Dashboard/Home/Organism/NetworksDashboard',
  component: NetworksDashboard,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof NetworksDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const networksDashboard: Story = {
  args: {
    title: 'Selecciona tu red social :'
  },
}