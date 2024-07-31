import type { Meta, StoryObj } from '@storybook/react'
import PackageItemsDashboard from './PackageItemsDashboard'
import { PlanItemDashboardProps } from '../planItemDashboard/PlanItemDashboardProps'
import { getAllByNetworkAndType } from '@/infraestructure/services'

const plansData:PlanItemDashboardProps[] = getAllByNetworkAndType('Instagram','Plan') as PlanItemDashboardProps[]

const meta = {
  title: 'Dashboard/Home/Organism/PackageItemsDashboard',
  component: PackageItemsDashboard,
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
} satisfies Meta<typeof PackageItemsDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const packageItemsDashboard: Story = {
  args: {
    dataCards: plansData,
    lng: 'es'
  },
}