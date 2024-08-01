import type { Meta, StoryObj } from '@storybook/react'
import HistoricView from './HistoricView'

const meta = {
  title: 'Dashboard/Historic/Organism/HistoricView',
  component: HistoricView,
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
} satisfies Meta<typeof HistoricView>

export default meta
type Story = StoryObj<typeof meta>

export const historicView: Story = {
  args: {
    lng: 'es'
  },
}