import type { Meta, StoryObj } from '@storybook/react'
import HeaderDashboard from './HeaderDashboard'

const meta = {
  title: 'Dashboard/Home/Organism/HeaderDashboard',
  component: HeaderDashboard,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof HeaderDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const headerDashboard: Story = {
  args: {
    title: `Hi,  Laura Suarez!!!`,
    paragraph: 'Ready to keep improving in social media?'
  },
}
