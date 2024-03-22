import type { Meta, StoryObj } from '@storybook/react'
import DropdownNavbar from './DropdownNavbar'
import { NAVBAR_DROPDOWN_PARAMS } from '@/components/organism/navbar/domain/models/schemas/navbar'

const meta = {
  title: 'Components/Organism/DropdownNavbar',
  component: DropdownNavbar,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['en','es'],
      control: { type: 'select'},
    }
  },
} satisfies Meta<typeof DropdownNavbar>

export default meta
type Story = StoryObj<typeof meta>

export const dropdownNavbar: Story = {
  args: {
    title: 'Options',
    lng: 'es',
    defaultLang: 'es',
    options: NAVBAR_DROPDOWN_PARAMS,
    orientation: 'left'
  }
}
