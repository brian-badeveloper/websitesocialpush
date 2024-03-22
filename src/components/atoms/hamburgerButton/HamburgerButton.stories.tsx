import type { Meta, StoryObj } from '@storybook/react'
import HamburgerButton from './HamburgerButton'

const meta = {
  title: 'Components/Atoms/HamburgerButton',
  component: HamburgerButton,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
		//
	},
} satisfies Meta<typeof HamburgerButton>

export default meta
type Story = StoryObj<typeof meta>

export const hamburgerButton: Story = {
  args: {
    status: false,
		show: true,
		color: '#000',
		onChangeStatus: () => console.log('click!!'),
  }
}