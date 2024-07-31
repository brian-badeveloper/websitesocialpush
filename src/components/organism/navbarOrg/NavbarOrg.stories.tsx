import type { Meta, StoryObj } from '@storybook/react'
import NavbarOrg from './NavbarOrg'

const meta = {
  title: 'Components/Organism/NavbarOrg',
  component: NavbarOrg,
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
} satisfies Meta<typeof NavbarOrg>

export default meta
type Story = StoryObj<typeof meta>

export const navbarOrg: Story = {
  args: {
    lng: 'es',
    defaultLang: 'en',
    changeLang: () => {}
  },
}
