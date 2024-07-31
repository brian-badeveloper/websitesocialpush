import type { Meta, StoryObj } from '@storybook/react'
import Calendar from './Calendar'

const meta = {
  title: 'Components/Atoms/Calendar',
  component: Calendar,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    bgStyle: {
      options: ["primary", "secondary", "tertiary", "blue", "black", "light"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg", "xl", "auto"],
      control: { type: "select" },
    },
    textSize: {
      control: { type: "number", min: 1 },
    },
    language: {
      options: ['en','es'],
      control: { type: 'select'},
    }
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const calendar: Story = {
  args: {
    date: 'Wednesday, december 06, 2023',
    language: 'en',
    bgStyle: 'primary',
    size: 'sm',
    textSize: 14,
    disable: false
  }
}