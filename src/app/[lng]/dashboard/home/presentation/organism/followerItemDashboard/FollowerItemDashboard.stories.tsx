import type { Meta, StoryObj } from '@storybook/react'
import FollowerItemDashboard from './FollowerItemDashboard'
import { FollowerItemDashboardProps } from './FollowerItemDashboardProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'


const followersData:FollowerItemDashboardProps[] = getAllByNetworkAndType('Instagram','Follower') as FollowerItemDashboardProps[]

const meta = {
  title: 'Dashboard/Home/Organism/FollowerItemDashboard',
  component: FollowerItemDashboard,
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
} satisfies Meta<typeof FollowerItemDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const followerItemDashboard: Story = {
  args: {
    item: {
      ...followersData[0],
      senior: true,
      stars: 3
    },
    lng: 'es'
  },
}