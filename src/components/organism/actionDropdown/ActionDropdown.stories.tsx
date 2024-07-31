import type { Meta, StoryObj } from '@storybook/react'
import ActionDropdown from './ActionDropdown'
import { iconsImport } from '@/components/atoms/icons/domain/use-cases/iconsImport'

const meta = {
  title: 'Components/Organism/ActionDropdown',
  component: ActionDropdown,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    icon: {
      options: Object.keys(iconsImport),
      control: { type: "select" }
    }
  },
} satisfies Meta<typeof ActionDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const actionDropdown: Story = {
  args: {
    icon: 'User',
    text: 'Laura Suarez',
    onlyIconResponsive: true,
    items: [
      {
        icon: 'Logout',
        text: 'Logout',
        action: () => {}
      }
    ]
  },
  render: (args) => (
    <div style={{display: 'flex', gap: '5px 15px'}}>
     <ActionDropdown {...args} />
    </div>
  )
}
