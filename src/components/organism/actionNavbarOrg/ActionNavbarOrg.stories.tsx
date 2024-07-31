import type { Meta, StoryObj } from '@storybook/react'
import ActionNavbarOrg from './ActionNavbarOrg'

const meta = {
  title: 'Components/Organism/ActionNavbarOrg',
  component: ActionNavbarOrg,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ["es","en"],
      control: { type: "select" }
    }
  },
} satisfies Meta<typeof ActionNavbarOrg>

export default meta
type Story = StoryObj<typeof meta>

export const actionNavbarOrg: Story = {
  args: {
    lng: 'es',
    defaultLang: 'es',
    loginLink: '#',
    cartNumer: 0,
    cartLink: '#',
    status: false,
    show: true,
    onChangeStatus: () => {},
    changeLang: () => {}
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '5px 15px'}}>
     <ActionNavbarOrg {...args} />
    </div>
  )
}
