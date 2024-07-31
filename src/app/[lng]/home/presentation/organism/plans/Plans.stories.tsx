import type { Meta, StoryObj } from '@storybook/react'
import Plans from './Plans'
import { PlanItemProps } from '../planItem/PlanItemProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'

const plansData:PlanItemProps[] = getAllByNetworkAndType('Instagram','Plan') as PlanItemProps[]

const meta = {
  title: 'Pages/Home/Organism/Plans',
  component: Plans,
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
} satisfies Meta<typeof Plans>

export default meta
type Story = StoryObj<typeof meta>

export const plans: Story = {
  args: {
    title: "Nuestros planes de crecimiento de instagram",
    text: "Obtenga me gusta reales en su contenido real y aumente su índice de participación",
    dataCards: plansData,
    lng: 'es'
  },
}