import type { Meta, StoryObj } from '@storybook/react'
import LanguageButtonOrg from './LanguageButtonOrg'

const meta = {
  title: 'Components/Molecules/LanguageButtonOrg',
  component: LanguageButtonOrg,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    language: {
      options: ['en','es'],
      control: {type: 'select'},
    },
  },
} satisfies Meta<typeof LanguageButtonOrg>

export default meta
type Story = StoryObj<typeof meta>

export const languageButtonOrg: Story = {
  args: {
    language: 'es',
    changeLanguage: () => {},
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '5px 15px'}}>
      <LanguageButtonOrg {...args} />
    </div>
  )
}

