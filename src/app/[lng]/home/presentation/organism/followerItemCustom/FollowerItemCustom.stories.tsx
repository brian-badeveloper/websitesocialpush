import type { Meta, StoryObj } from '@storybook/react'
import FollowerItemCustom from './FollowerItemCustom'
import { FollowerItemCustomProps } from './FollowerItemCustomProps'

const customProps: FollowerItemCustomProps = {
  id: "FollowerCustom",   
  name: "CUSTOMIZED PLAN",
  description: "",
  type: "Follower",
  price: 250,
  config: {
    type: "Follower",
    priority: 1,
    name_social: "Instagram",
    price: 0,
    symbol: "$",
    currency: "USD",
    value_min: 250
  },
  i18n: {
    en: {
      name: "CUSTOMIZED PLAN",
      scope: "FLC",
      title: "Customized Plan",
      text: "One-time payment",
      subText: "Followers",
      type_time: "",
    },
    es: {
      name: "PLAN PERSONALIZADO",
      scope: "FLC",
      title: "Plan Personalizado",
      text: "Pago único",
      subText: "Seguidores",
      type_time: "",
    }
  }
}

const meta = {
  title: 'Pages/Home/Organism/FollowerItemCustom',
  component: FollowerItemCustom,
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
} satisfies Meta<typeof FollowerItemCustom>

export default meta
type Story = StoryObj<typeof meta>

export const followerItemCustom: Story = {
  args: {
    lng: 'es',
    item: customProps
  },
}