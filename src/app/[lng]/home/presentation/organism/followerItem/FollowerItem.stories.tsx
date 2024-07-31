import type { Meta, StoryObj } from '@storybook/react'
import FollowerItem from './FollowerItem'
import { FollowerItemProps } from './FollowerItemProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'


const followersData:FollowerItemProps[] = getAllByNetworkAndType('Instagram','Follower') as FollowerItemProps[];

const meta = {
  title: 'Pages/Home/Organism/FollowerItem',
  component: FollowerItem,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof FollowerItem>

export default meta
type Story = StoryObj<typeof meta>

export const followerItem: Story = {
  args: {
    ...followersData[0]
  },
}