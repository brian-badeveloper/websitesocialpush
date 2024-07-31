import type { Meta, StoryObj } from '@storybook/react'
import LikeItemDashboard from './LikeItemDashboard'
import { LikeItemDashboardProps } from './LikeItemDashboardProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'

const likesData:LikeItemDashboardProps[] = getAllByNetworkAndType('Instagram','Like') as LikeItemDashboardProps[]

const meta = {
  title: 'Dashboard/Home/Organism/LikeItemDashboard',
  component: LikeItemDashboard,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['es','en'],
      control: { type: 'select' }
    }
  },
} satisfies Meta<typeof LikeItemDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const likeItemDashboard: Story = {
  args: {
    item: {
      ...likesData[0],
      senior: true,
      stars: 1
    },
    lng: 'es'
  },
}