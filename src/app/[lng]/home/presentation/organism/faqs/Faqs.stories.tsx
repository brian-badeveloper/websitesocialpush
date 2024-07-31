import type { Meta, StoryObj } from '@storybook/react'
import Faqs from './Faqs'

const meta = {
  title: 'Pages/Home/Organism/Faqs',
  component: Faqs,
  parameters: {
    layout: 'padded', // centered, fullscreen, padded
  },
  // tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof Faqs>

export default meta
type Story = StoryObj<typeof meta>

export const faqs: Story = {
  args: {
    title: '',
    questions: [
      {
        title: '¿Cuánto tardaré en recibir mis seguidores?',
        text: 'Una vez recibido el pago, su campaña de promoción se pone en marcha inmediatamente. Le ofrecemos una opción de "entrega ultrarrápida", sin coste adicional, que le permitirá recibir su pedido en tan sólo unas horas.<br/><br/>Sin embargo, si prefiere una entrega más gradual y natural, también ofrecemos un método de entrega estándar. Este método garantiza que el progreso de su campaña imite el crecimiento orgánico, que puede ser más discreto y alineado con una presencia en línea típica. La elección entre entrega ultrarrápida y estándar es suya, lo que le permite personalizar su campaña en función de sus preferencias y objetivos.'
      },
      {
        title: '¿Hay algún riesgo en la compra de seguidores? ¿Instagram puede suspenderme?',
        text: 'Como empresa líder en el negocio de proporcionar seguidores e interacciones en redes sociales, nos enorgullecemos de ofrecer servicios de primera categoría que son totalmente legales y orgánicos. La seguridad de su cuenta es nuestra máxima prioridad, y tomamos todas las medidas para garantizar que nunca esté en riesgo. Con un historial de cumplimiento de miles de pedidos, estamos orgullosos de informar de que nunca hemos encontrado un caso de una cuenta de ser prohibido o bloqueado debido a nuestros servicios.'
      },
      {
        title: '¿Son reales los seguidores?',
        text: 'Nuestro objetivo principal es ofrecer seguidores de Instagram que son a la vez real y activa. Es importante reconocer que la base de seguidores proporcionada puede consistir en una combinación de usuarios auténticos y algunas cuentas inactivas o bots. La composición exacta puede fluctuar, pero estamos comprometidos a mantener una presencia sustancial de seguidores legítimos.'
      },
      {
        title: '¿De qué nacionalidades son los seguidores?',
        text: 'Normalmente, ofrecemos opciones de segmentación que incluyen seguidores por nicho o seguidores de países específicos. Sin embargo, es importante tener en cuenta que la segmentación demográfica precisa en el marketing en redes sociales puede no estar siempre disponible o no ser del todo precisa.'
      },
      {
        title: '¿Los seguidores comprados dejarán de seguirme?',
        text: 'Normalmente, los seguidores proporcionados a través de nuestros servicios permanecen estables y no desaparecen. Sin embargo, entendemos que pueden surgir situaciones inesperadas. Por eso ofrecemos una garantía de sustitución de 30 días a partir del día de su compra.<br/><br/> Esto significa que si, en los 30 días siguientes a su compra, experimenta una caída significativa de seguidores, los sustituiremos rápidamente sin coste adicional. Tu satisfacción y la integridad de tu cuenta de seguidores son esenciales para nosotros, y nos comprometemos a garantizar que recibas el valor que esperas de nuestros servicios.'
      },
      {
        title: '¿Puedo comprar sólo 200-300 seguidores o likes?',
        text: 'La disponibilidad de los distintos paquetes de seguidores puede variar en función del proveedor de servicios específico. Sin embargo, no suele haber limitaciones estrictas en cuanto al número de seguidores que puedes comprar. Los proveedores de servicios suelen ofrecer una gama de paquetes para adaptarse a distintas necesidades y presupuestos, lo que permite a los clientes elegir el paquete que mejor se adapte a sus objetivos.'
      },
      {
        title: '¿Puedo seleccionar mis preferencias de segmentación de seguidores y me gusta?',
        text: 'Las plataformas de medios sociales pueden ser dinámicas, y los datos de los usuarios pueden cambiar rápidamente, lo que dificulta garantizar una precisión demográfica exacta. Nos esforzamos por ofrecer opciones que se ajusten lo mejor posible a sus preferencias y objetivos de segmentación.'
      },
      {
        title: '¿Puedo interrumpir o pausar mi suscripción?',
        text: 'Si desea interrumpir nuestros servicios, póngase en contacto con nosotros a través de nuestra página de contacto. Le ayudaremos rápidamente a interrumpir cualquier servicio o suscripción en curso según su solicitud. Su satisfacción y sus preferencias son importantes para nosotros, y estamos aquí para satisfacer sus necesidades.'
      },
    ]
  },
}
