import type { Meta, StoryObj } from '@storybook/react'
import FormContact from './FormContact'

const meta = {
  title: 'Components/Molecules/FormContact',
  component: FormContact,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ["es","en"],
      control: { type: "select" }
    },
    defaultLang: {
      options: ["es","en"],
      control: { type: "select" }
    },
  },
} satisfies Meta<typeof FormContact>

export default meta
type Story = StoryObj<typeof meta>

export const formContact: Story = { 
  args: {
    lng: 'es',
    defaultLang: 'en'
  },
  render: (args) => (
    <div style={{
      width: '100%',
      maxWidth: '600px'
    }}>
      <FormContact {...args} />
    </div>
  )
}