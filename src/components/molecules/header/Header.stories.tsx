import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'
import Image from 'next/image'

import userPlus from '@/assets/images/user.svg'

const meta = {
  title: 'Components/Molecules/Header',
  component: Header,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    colorTitle: {
      control: { type: 'color' }
    },
    colorParagraph: {
      control: { type: 'color' }
    },
    orientation: {
      control: { type: 'select' },
      options: ['left','center','right']
    }
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const header: Story = {
  args: {
    title: "Seguidores Premium De Instagram Rápidos.",
    paragraph: "Obtén me gusta reales en tus posts y aumenta tu índice de alcance.",
    colorTitle: "#ffffff",
    colorParagraph: "#ffffff",
    orientation: "center",
    children: <Image src={userPlus} alt="" />
  }
}
