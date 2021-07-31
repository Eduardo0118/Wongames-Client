import { Story, Meta } from '@storybook/react/types-6-0'
import Heading from '.'
import { IHeadingProps } from './type'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<IHeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Populars',
  color: 'black'
}
