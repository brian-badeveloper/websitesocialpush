import type { Meta, StoryObj } from '@storybook/react'
import Navbar from './Navbar'

const meta = {
  title: 'Components/Organism/Navbar',
  component: Navbar,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ["es", "en"],
      control: { type: "select" },
    },
    defaultLang: {
      options: ["es", "en"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const navbar: Story = {
  args: {
    lng: 'es',
    defaultLang: 'en',
    changeLang: () => {}
  },
}
