import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import CardHeader from '@/components/atoms/cardHeader/CardHeader'
import CardValue from '@/components/molecules/cardValue/CardValue'

const meta = {
  title: 'Components/Organism/Card',
  component: Card,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    bgStyle: {
      options: [
        'color',
        'light',
      ],
      control: { type: 'select' },
    },
    border: {
      control: { type: 'number', min: 0 },
    },
    borderBg: {
      control: { type: 'color' },
    },
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
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const card: Story = {
  args: {
    bgStyle: "color",
    border: 0,
    borderBg: "#9291C9",
    size: "sm",
    children: (
    <>
      <CardHeader 
        title="35,000 SEGUIDORES" 
        bgStyle="primary" 
        type="color" 
        size={14}
      />
      <div className="card__content">
        <CardValue
          symbol="$"
          price={250}
          currency="USD"
          title="Pago Único"
          paragraph="Seguidores"
        />
        <p>description...</p>
      </div>
    </>
    ),
    senior: true,
    stars: 3
  }
}