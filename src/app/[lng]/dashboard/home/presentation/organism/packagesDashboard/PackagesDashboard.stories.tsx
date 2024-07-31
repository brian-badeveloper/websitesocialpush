import type { Meta, StoryObj } from '@storybook/react'
import PackagesDashboard from './PackagesDashboard'
import { Plan } from '@/models/interfaces/Plan'
import { getAllByFeatures } from '@/infraestructure/services'

const data:Plan[] = getAllByFeatures(1) as Plan[]

const meta = {
  title: 'Dashboard/Home/Organism/PackagesDashboard',
  component: PackagesDashboard,
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
} satisfies Meta<typeof PackagesDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const packagesDashboard: Story = {
  args: {
    title: "Los paquetes más comprados",
    dataCards: data,
    lng: 'es'
  },
}