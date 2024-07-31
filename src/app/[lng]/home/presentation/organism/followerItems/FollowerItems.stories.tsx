import type { Meta, StoryObj } from '@storybook/react'
import FollowerItems from './FollowerItems'
import { getAllByNetworkAndType } from '@/infraestructure/services'
import { FollowerItemProps } from '../followerItem/FollowerItemProps'

const followersData:FollowerItemProps[] = getAllByNetworkAndType('Instagram','Follower') as FollowerItemProps[]

const meta = {
  title: 'Pages/Home/Organism/FollowerItems',
  component: FollowerItems,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof FollowerItems>

export default meta
type Story = StoryObj<typeof meta>

export const followerItems: Story = {
  args: {
    dataCards: followersData,
    show: true
  },
}