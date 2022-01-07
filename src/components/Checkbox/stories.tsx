import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', gap: 20, flexDirection: 'column' }}>
    <Checkbox
      name="category"
      label="Action"
      labelFor="action"
      isChecked
      {...args}
    />
    <Checkbox
      name="category"
      label="Adventure"
      labelFor="adventure"
      {...args}
    />
    <Checkbox name="category" label="Strategy" labelFor="strategy" {...args} />
  </div>
)
