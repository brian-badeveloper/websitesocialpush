import type { Meta, StoryObj } from '@storybook/react'
import ListOption from './ListOption'
import { iconsImport } from '@/components/atoms/icons/domain/use-cases/iconsImport'

const meta = {
  title: 'Components/Molecules/ListOption',
  component: ListOption,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    icon: {
      options: Object.keys(iconsImport),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof ListOption>

export default meta
type Story = StoryObj<typeof meta>

export const listOption: Story = {
  args: {
    icon: 'CircleCheck',
    text: 'Todo en un solo pago.',
    color: '#000000',
    centerResponsive: false
  }
}