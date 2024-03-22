import type { Meta, StoryObj } from '@storybook/react'
import LanguageButton from './LanguageButton'

const meta = {
  title: 'Components/Molecules/LanguageButton',
  component: LanguageButton,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    language: {
      options: ['en','es'],
      control: {type: 'select'},
    },
    color: {
      control: {type: 'color'}
    }
  },
} satisfies Meta<typeof LanguageButton>

export default meta
type Story = StoryObj<typeof meta>

export const languageButton: Story = {
  args: {
    language: 'es',
    changeLanguage: () => {},
    color: '#000',
    showArrow: true,
    showLng: true
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '5px 15px'}}>
      <LanguageButton {...args} />
    </div>
  )
}

