import type { Meta, StoryObj } from '@storybook/react'
import PlanItems from './PlanItems'
import { PlanItemProps } from '../planItem/PlanItemProps';
import { getAllByNetworkAndType } from '@/infraestructure/services'

const plansData:PlanItemProps[] = getAllByNetworkAndType('Instagram','Plan') as PlanItemProps[];

const meta = {
  title: 'Pages/Home/Organism/PlanItems',
  component: PlanItems,
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
} satisfies Meta<typeof PlanItems>

export default meta
type Story = StoryObj<typeof meta>

export const planItems: Story = {
  args: {
    lng: 'es',
    dataCards: plansData
  },
}