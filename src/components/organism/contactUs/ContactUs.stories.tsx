import type { Meta, StoryObj } from '@storybook/react'
import ContactUs from './ContactUs'

const meta = {
  title: 'Components/Organism/ContactUs',
  component: ContactUs,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ["es","en"],
      control: { type: "select" }
    },
    defaultLang: {
      options: ["es","en"],
      control: { type: "select" }
    }
  },
} satisfies Meta<typeof ContactUs>

export default meta
type Story = StoryObj<typeof meta>

export const contactUs: Story = {
  args: {
    lng: 'en',
    defaultLang: 'en'
  }
}