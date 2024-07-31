import type { Meta, StoryObj } from '@storybook/react'
import FollowerItemCustomDashboard from './FollowerItemCustomDashboard'
import { FollowerItemCustomDashboardProps } from './FollowerItemCustomDashboardProps'

const customProps: FollowerItemCustomDashboardProps = {
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
  title: 'Dashboard/Home/Organism/FollowerItemCustomDashboard',
  component: FollowerItemCustomDashboard,
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
} satisfies Meta<typeof FollowerItemCustomDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const followerItemCustomDashboard: Story = {
  args: {
    item: {
      ...customProps,
      senior: true,
      stars: 3,
    },
    lng: 'es'
  },
}