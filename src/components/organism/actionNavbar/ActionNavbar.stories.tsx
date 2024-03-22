import type { Meta, StoryObj } from '@storybook/react'
import ActionNavbar from './ActionNavbar'

const meta = {
  title: 'Components/Organism/ActionNavbar',
  component: ActionNavbar,
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
} satisfies Meta<typeof ActionNavbar>

export default meta
type Story = StoryObj<typeof meta>

export const actionNavbar: Story = {
  args: {
    lng: 'es',
    status: false,
    show: true,
    onChangeStatus: () => {},
    changeLang: () => {}
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '5px 15px'}}>
     <ActionNavbar {...args} />
    </div>
  )
}
