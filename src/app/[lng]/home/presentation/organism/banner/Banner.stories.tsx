import type { Meta, StoryObj } from '@storybook/react'
import Banner from './Banner'

const meta = {
  title: 'Pages/Home/Organism/Banner',
  component: Banner,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const banner: Story = {
  args: {
    title: 'No solo compres seguidores, obtenlos reales!',
    paragraph: 'Hacemos crecer tus cuentas de Instagram/TikTok/Facebook/YouTube/Twitter atrayendo seguidores en tu nicho. Nuestras estrategias, que evolucionan día a día, permiten resultados rápidos garantizados. Destáquese de sus competidores mientras mantiene el enfoque en su negocio.',
    textBtn: 'Únete ahora!'
  },
}