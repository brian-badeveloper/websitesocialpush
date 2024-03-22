import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

const meta = {
  title: 'Components/Organism/Footer',
  component: Footer,
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
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const footer: Story = {
  args: {
    lng: 'en',
    defaultLang: 'en'
  }
}