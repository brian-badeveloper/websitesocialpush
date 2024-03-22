import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 14 },
    },
    colorActive: {
      control: { type: 'color' }
    }
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const checkbox: Story = {
  args: {
    onChange: () => {},
    label: 'Acepto politicas de privacidad',
    name: 'policies',
    checked: true,
    colorActive: '#706FE5',
    color: '#A8A6A6',
    size: 16,
    redirectTo: '/',
  }
}