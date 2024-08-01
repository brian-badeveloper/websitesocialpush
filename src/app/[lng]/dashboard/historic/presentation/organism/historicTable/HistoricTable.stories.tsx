import type { Meta, StoryObj } from '@storybook/react'
import HistoricTable from './HistoricTable'

const meta = {
  title: 'Dashboard/Historic/Organism/HistoricTable',
  component: HistoricTable,
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
} satisfies Meta<typeof HistoricTable>

export default meta
type Story = StoryObj<typeof meta>

export const historicTable: Story = {
  args: {
    lng: 'es'
  },
}