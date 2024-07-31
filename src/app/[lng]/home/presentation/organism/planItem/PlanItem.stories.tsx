import type { Meta, StoryObj } from '@storybook/react'
import PlanItem from './PlanItem'
import { PlanItemProps } from './PlanItemProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'

const plansData:PlanItemProps[] = getAllByNetworkAndType('Instagram','Plan') as PlanItemProps[];

const meta = {
  title: 'Pages/Home/Organism/PlanItem',
  component: PlanItem,
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
} satisfies Meta<typeof PlanItem>

export default meta
type Story = StoryObj<typeof meta>

export const planItem: Story = {
  args: {
    lng: 'es',
    item: plansData[0]
  },
}