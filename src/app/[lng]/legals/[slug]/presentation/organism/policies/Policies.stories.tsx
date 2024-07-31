import { ComponentMeta, ComponentStory } from '@storybook/react'
import Policies from './Policies'

export default {
  title: 'Pages/Legals/Organism/Policies',
  component: Policies,
} as ComponentMeta<typeof Policies>

const component: ComponentStory<typeof Policies> = (args) => <Policies {...args} />
export const policies = component.bind({})
policies.args = {
  lng: 'es'
}
policies.argTypes = {
  lng: {
    options: ['es','en'],
    control: { type: 'select' }
  }
}