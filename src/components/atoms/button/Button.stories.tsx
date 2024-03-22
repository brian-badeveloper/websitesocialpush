import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const button: Story = {
  args: {
    bgStyle: "primary",
    size: "sm",
    textSize: 14,
    onClick: () => {},
    redirectTo: "/home",
    disable: false,
    borderRadius: 9,
    children: 'Button'
  },
  render: (args) => <Button {...args}>{args.children}</Button>
}
