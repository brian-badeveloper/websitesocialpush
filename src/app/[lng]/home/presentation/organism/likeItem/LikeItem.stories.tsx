import type { Meta, StoryObj } from '@storybook/react'
import LikeItem from './LikeItem'
import { LikeItemProps } from './LikeItemProps'
import { getAllByNetworkAndType } from '@/infraestructure/services';

const likesData:LikeItemProps[] = getAllByNetworkAndType('Instagram','Like') as LikeItemProps[];

const meta = {
  title: 'Pages/Home/Organism/LikeItem',
  component: LikeItem,
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
} satisfies Meta<typeof LikeItem>

export default meta
type Story = StoryObj<typeof meta>

export const likeItem: Story = {
  args: {
    lng: 'es',
    item: likesData[0]
  },
}