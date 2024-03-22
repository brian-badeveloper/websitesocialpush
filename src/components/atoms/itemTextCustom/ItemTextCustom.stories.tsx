import type { Meta, StoryObj } from '@storybook/react'
import ItemTextCustom from './ItemTextCustom'
import { iconsImport } from '../icons/domain/use-cases/iconsImport'

const meta = {
  title: 'Components/Atoms/ItemTextCustom',
  component: ItemTextCustom,
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
} satisfies Meta<typeof ItemTextCustom>

export default meta
type Story = StoryObj<typeof meta>

export const itemTextCustom: Story = {
  args: {
    color: '#FFBA08',
    icon: 'CheckRegular',
    iconWidth: 48,
    iconHeight: 48,
    title: `Description:`,
    titleColor: '#032B43',
    titleSize: 24,
    text: `A well-designed and intuitive user interface is crucial for a trading platform. It should allow users to navigate seamlessly, execute trades efficiently, and access essential information without unnecessary complexity.`,
    textColor: '#032B43',
    textSize: 16
  }
}
