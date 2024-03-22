import type { Meta, StoryObj } from '@storybook/react'
import { IconFactory } from './domain/use-cases/factoryIcon'
import { Icon } from './domain/models/Icon'
import { iconsImport } from './domain/use-cases/iconsImport'

const meta = {
  title: "Components/Atoms/IconFactory",
  component: IconFactory,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    name: {
      options: Object.keys(iconsImport),
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof IconFactory>

export default meta
type Story = StoryObj<typeof meta>

export const iconFactory: Story = {
  args: {
    color: "#000000",
    height: 50,
    width: 50,
    name: "World",
  } as Icon,
  render: (args: Icon) => <IconFactory {...args}></IconFactory>
}