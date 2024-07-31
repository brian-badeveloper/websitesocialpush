import type { Meta, StoryObj } from '@storybook/react'
import DropdownNavbarOrg from './DropdownNavbarOrg'
import { NAVBAR_DROPDOWN_PARAMS } from '@/components/organism/navbarOrg/domain/models/schemas/navbar'

const meta = {
  title: 'Components/Organism/DropdownNavbarOrg',
  component: DropdownNavbarOrg,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof DropdownNavbarOrg>

export default meta
type Story = StoryObj<typeof meta>

export const dropdownNavbarOrg: Story = {
  args: {
    iconLeft: 'PlusSharp',
    title: 'Options',
    options: NAVBAR_DROPDOWN_PARAMS,
    
  }
}
