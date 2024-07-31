import type { Meta, StoryObj } from '@storybook/react'
import FooterOrg from './FooterOrg'

const meta = {
  title: 'Components/Organism/FooterOrg',
  component: FooterOrg,
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
} satisfies Meta<typeof FooterOrg>

export default meta
type Story = StoryObj<typeof meta>

export const footerOrg: Story = {
  args: {
    lng: 'en',
    defaultLang: 'en'
  }
}