import type { Meta, StoryObj } from '@storybook/react'
import ContactUs from './ContactUs'

const meta = {
  title: 'Pages/Home/Organism/ContactUs',
  component: ContactUs,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    lng: {
      options: ['es', 'en'],
      control: { type: 'select'}
    },
    defaultLang: {
      options: ['es', 'en'],
      control: { type: 'select'}
    }
  },
} satisfies Meta<typeof ContactUs>

export default meta
type Story = StoryObj<typeof meta>

export const contactUs: Story = {
  args: {
    title: 'Te podemos ayudar !',
    paragraph: 'Nuestro proceso de trabajo se basa en la utilización de algoritmos avanzados que permiten a nuestros clientes obtener un número considerable de seguidores en un corto período de tiempo. Hacemos uso de IA para implementar tu trafico.',
    lng: 'es',
    defaultLang: 'es'
  },
}