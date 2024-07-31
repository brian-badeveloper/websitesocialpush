import type { Meta, StoryObj } from '@storybook/react'
import CardAccordion from './CardAccordion'
import ListOption from '../listOption/ListOption'

const options = [
  "Todo en un solo pago.",
  "Seguidores reales",
  "No pedimos contraseña",
  "Crecimiento orgánico",
  "Envío de inmediato.",
]

const meta = {
  title: 'Components/Molecules/CardAccordion',
  component: CardAccordion,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: [
        'left',
        'center',
        'right'
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CardAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const cardAccordion: Story = {
  args: {
    text: 'Más Información',
    textClose: 'Menos Información',
    orientation: 'left',
    color: "#706FE5"
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '300px'}}>
      <CardAccordion {...args}>
        <ul className="card__list">
          {
            options?.map((li, key) => (
              <ListOption 
                icon="CircleCheck" 
                text={li} 
                color="#000000" 
                key={`list-${key}`}
                centerResponsive={true}
              />
            ))
          }
        </ul>
      </CardAccordion>
    </div>
  )
}
