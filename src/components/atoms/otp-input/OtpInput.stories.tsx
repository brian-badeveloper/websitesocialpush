import type { Meta, StoryObj } from '@storybook/react'
import OtpInput from './OtpInput'

const meta = {
  title: 'Components/Atoms/OtpInput',
  component: OtpInput,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
		lng: {
			options: ['en','es'],
			control: { type: "select"}
		},
		type: {
			options: ['number','text'],
			control: { type: "select"}
		}
  },
} satisfies Meta<typeof OtpInput>

export default meta
type Story = StoryObj<typeof meta>

export const otpInput: Story = {
  args: {
    onChange: (otp: string) => console.log(otp),
		numInputs: 5,
		lng: 'en',
		type: 'number'
  },
}
