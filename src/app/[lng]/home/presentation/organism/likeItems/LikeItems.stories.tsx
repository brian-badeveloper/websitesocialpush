import type { Meta, StoryObj } from '@storybook/react'
import LikeItems from './LikeItems'
import { LikeItemProps } from '../likeItem/LikeItemProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'

const likesData:LikeItemProps[] = getAllByNetworkAndType('Instagram','Like') as LikeItemProps[]

const meta = {
  title: 'Pages/Home/Organism/LikeItems',
  component: LikeItems,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof LikeItems>

export default meta
type Story = StoryObj<typeof meta>

export const likeItems: Story = {
  args: {
    dataCards: likesData
  },
}