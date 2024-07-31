import type { Meta, StoryObj } from '@storybook/react'
import ButtonSimple from './ButtonSimple'

const meta = {
  title: 'Components/Atoms/ButtonSimple',
  component: ButtonSimple,
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
  },
} satisfies Meta<typeof ButtonSimple>

export default meta
type Story = StoryObj<typeof meta>

export const buttonSimple: Story = {
  args: {
    bgStyle: 'primary',
    size: 'sm',
    textSize: 14,
    onClick: () => {},
    redirectTo: '/home',
    disable: false,
    children: 'Button'
  },
  render: (args) => <ButtonSimple {...args}>{args.children}</ButtonSimple>
}