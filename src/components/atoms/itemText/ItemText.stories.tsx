import type { Meta, StoryObj } from '@storybook/react'
import ItemText from './ItemText'
import { iconsImport } from '../icons/domain/use-cases/iconsImport'

const meta = {
  title: 'Components/Atoms/ItemText',
  component: ItemText,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    icon: {
      options: Object.keys(iconsImport),
      control: { type: "select" },
    },
    color: {
      control: { type: "color" },
    },
  },
} satisfies Meta<typeof ItemText>

export default meta
type Story = StoryObj<typeof meta>

export const itemText: Story = {
  args: {
    color: '#FFBA08',
    icon: 'CheckRegular',
    iconWidth: 25,
    iconHeight: 25,
    text: `Consistent returns" could be alternative terms for "moderate return for a forex account.`,
    textColor: '#032B43',
    textSize: 16
  }
}
