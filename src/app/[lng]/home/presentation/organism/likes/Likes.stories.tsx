import type { Meta, StoryObj } from '@storybook/react'
import Likes from './Likes'
import { LikeItemProps } from '../likeItem/LikeItemProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'

const likesData:LikeItemProps[] = getAllByNetworkAndType('Instagram','Like') as LikeItemProps[]

const meta = {
  title: 'Pages/Home/Organism/Likes',
  component: Likes,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Likes>

export default meta
type Story = StoryObj<typeof meta>

export const likes: Story = {
  args: {
    title: "Instagram likes premium de inmediato.",
    text: "Obtén me gusta reales en tus posts y aumenta tu índice de alcance.",
    dataCards: likesData
  },
}