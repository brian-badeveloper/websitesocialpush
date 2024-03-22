import type { Meta, StoryObj } from '@storybook/react'
import Link from './Link'
import { iconsImport } from '../icons/domain/use-cases/iconsImport'

const meta = {
  title: 'Components/Atoms/Link',
  component: Link,
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
    icon: {
      options: Object.keys(iconsImport),
      control: { type: "select" },
    },
    iconWidth: {
      control: { type: "number" },
    },
    iconHeight: {
      control: { type: "number" },
    },
    iconStyle: {
      options: ["normal", "stroke"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const link: Story = {
  args: {
    target: "_blank",
    bgStyle: "primary",
    size: "sm",
    textSize: 14,
    redirectTo: "/home",
    disable: false,
    children: 'Link',
    icon: 'ArrowRightRegular',
    iconWidth: 25,
    iconHeight: 25,
    iconStyle: 'normal'
  },
  render: (args) => <Link {...args}>{args.children}</Link>
}
