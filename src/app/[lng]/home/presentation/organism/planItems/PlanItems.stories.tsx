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
    //
  },
} satisfies Meta<typeof PlanItems>

export default meta
type Story = StoryObj<typeof meta>

export const planItems: Story = {
  args: {
    dataCards: plansData
  },
}