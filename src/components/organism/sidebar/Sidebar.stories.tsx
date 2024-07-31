import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './Sidebar'

const meta = {
  title: 'Components/Organism/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['en','es'],
      control: { type: 'select'},
    },
    defaultLang: {
      options: ['en','es'],
      control: { type: 'select'},
    }
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const sidebar: Story = {
  args: {
    lng: 'es',
    defaultLang: 'es',
    onChange: () => {}
  }
}