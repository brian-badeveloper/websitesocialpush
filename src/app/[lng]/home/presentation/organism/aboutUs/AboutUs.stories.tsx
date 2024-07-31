import type { Meta, StoryObj } from '@storybook/react'
import AboutUs from './AboutUs'

const meta = {
  title: 'Pages/Home/Organism/AboutUs',
  component: AboutUs,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof AboutUs>

export default meta
type Story = StoryObj<typeof meta>

export const aboutUs: Story = {
  args: {
    subtitle: 'Somos Social Push',
    title: `Analizamos<br> tu red social y ofrecemos estrategias.`,
    paragraph: 'Somos una plataforma de soluciones estratégicas con experiencia y enfoque en impulsar el potencial de marcas y personas. Utilizamos técnicas, tecnologías e innovación multidisciplinaria para desarrollar estrategias que promuevan su crecimiento. Nos motiva tener un impacto significativo en los resultados, lo que nos diferencia como una oferta full service, integral y adaptable, más que una simple agencia.'
  },
}
