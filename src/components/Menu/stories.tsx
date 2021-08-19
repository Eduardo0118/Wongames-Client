import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />

Desktop.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />

Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}
