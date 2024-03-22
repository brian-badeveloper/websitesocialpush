import type { Meta, StoryObj } from '@storybook/react'
import InputPhonePicker from './InputPhonePicker'
import { COUNTRY } from './domain/models/schemas/country'

const meta = {
  title: 'Components/Atoms/InputPhonePicker',
	component: InputPhonePicker,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        'xl',
        'auto',
      ],
      control: { type: 'select' },
    },
    background: {
      control: { type: 'color' }
    },
    type: {
      options: [
        'text',
        'number',
        'email',
        'password',
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof InputPhonePicker>

export default meta
type Story = StoryObj<typeof meta>

export const inputPhonePicker: Story = {
  args: {
    country: {
      name: 'Colombia',
      code: 'CO',
      prefix: '57',
      prefixWithoutMore: '+57',
      flag: {
        emoji: "https://cdn.ipregistry.co/flags/wikimedia/co.svg",
        emoji_border_circular: "https://cdn.ipregistry.co/flags/twemoji/co.svg",
        emoji_circle: "https://cdn.ipregistry.co/flags/emojitwo/co.svg"
      }
    },
    countryState: COUNTRY,
    onChange: () => {},
    onSelectCountry: () => {},
    label: 'Name',
    placeholder: 'Write here...',
    name: 'name',
    type: 'number',
    size: 'md',
    color: '#868686',
    border: 2,
    borderRadius: 10,
    borderColor: '#a8a6a6',
    borderAddon: 0,
    borderAddonColor: '#a8a6a6'
  }
}