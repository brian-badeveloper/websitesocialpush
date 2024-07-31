import type { Meta, StoryObj } from '@storybook/react'
import Followers from './Followers'
import { getAllByNetworkAndType } from '@/infraestructure/services'
import { FollowerItemProps } from '../followerItem/FollowerItemProps'

const followersData:FollowerItemProps[] = getAllByNetworkAndType('Instagram','Follower') as FollowerItemProps[]

const meta = {
  title: 'Pages/Home/Organism/Followers',
  component: Followers,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Followers>

export default meta
type Story = StoryObj<typeof meta>

export const followers: Story = {
  args: {
    title: "Seguidores Premium De Instagram Rápidos",
    text: "Los precios mostrados son en dólares. Cada uno de los seguidores serán agregados paulatinamente en tu cuenta a medida que transcurran los días establecidos en cada una de las tarjetas.",
    textTwo: "Si necesitas un plan personalizado escríbenos",
    textBtn: "Plan Personalizado",
    textBtnActive: "Ocultar Plan",
    dataCards: followersData
  },
}