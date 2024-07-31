import type { Meta, StoryObj } from '@storybook/react'
import PlanItemDashboard from './PlanItemDashboard'
import { PlanItemDashboardProps } from './PlanItemDashboardProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'

const plansData:PlanItemDashboardProps[] = getAllByNetworkAndType('Instagram','Plan') as PlanItemDashboardProps[]

const meta = {
  title: 'Dashboard/Home/Organism/PlanItemDashboard',
  component: PlanItemDashboard,
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
} satisfies Meta<typeof PlanItemDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const planItemDashboard: Story = {
  args: {
    item: {
      ...plansData[0],
      senior: true,
      stars: 2
    },
    lng: 'es'
  },
}