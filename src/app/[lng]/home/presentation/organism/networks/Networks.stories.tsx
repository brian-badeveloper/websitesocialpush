import type { Meta, StoryObj } from '@storybook/react'
import Networks from './Networks'

const meta = {
  title: 'Pages/Home/Organism/Networks',
  component: Networks,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Networks>

export default meta
type Story = StoryObj<typeof meta>

export const networks: Story = {
  args: {
    title: 'Selecciona tu red social :'
  },
}