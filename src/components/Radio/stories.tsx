import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <div
    style={{ margin: 20, display: 'flex', flexDirection: 'column', gap: 20 }}
  >
    <Radio
      label="primeiro"
      labelFor="primeiro"
      id="primeiro"
      name="nome"
      value="primeiro"
      defaultChecked
      {...args}
    />
    <Radio
      label="segundo"
      labelFor="segundo"
      id="segundo"
      name="nome"
      value="segundo"
      {...args}
    />
    <Radio
      label="terceiro"
      labelFor="terceiro"
      id="terceiro"
      name="nome"
      value="terceiro"
      {...args}
    />
  </div>
)
