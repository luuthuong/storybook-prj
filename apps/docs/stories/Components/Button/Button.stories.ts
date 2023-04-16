import type { Meta, StoryObj } from '@storybook/react';
import { ButtonKit } from 'kit-ui-react';
const meta: Meta<typeof ButtonKit> = {
  title: "Component/Button",
  component: ButtonKit,
  argTypes: {
    text: {
      name: 'text',
      type: 'string'
    },
    color:{
      name: 'color',
      // type: 'string',
      option: ['default', 'primary', 'secondary', 'cyan'],
      control: {
        type: 'radio'
      },
      // defaultValue: '`default`',
      description: 'Button color following by `default` | `primary` | `secondary` | `cyan` ',
    },
    size:{
      name: 'size',
      description: ' Size of button `xs` | `sm` | `md` | `lg` | `xl`',
      defaultValue: '`sm`'
    },
    customClass:{
      name: 'customClass',
      description: 'Custom class',
      type: 'string'
    },
    width: {
      name: 'width',
      description: 'Width of button',
      type: 'string'
    },
    height: {
      name: 'height',
      description: 'Height of button',
      type: 'string'
    },
    onClick:{
      name: 'onClick',
      description: 'Optional click handler `((void) => void)`',
      type: 'function'
    }

  },
};
export default meta;
type Story = StoryObj<typeof ButtonKit>;

export const Default: Story ={
  args:{
    text: 'Default',
    color: 'default',
  },
}

export const Primary: Story ={
  args: {
    text: 'Primary',
    color: 'primary'
  }
}

export const Secondary: Story ={
  args: {
    text: 'Secondary',
    color: 'secondary',
  } 
}
export const Cyan: Story ={
  args: {
    text: 'Cyan',
    color: 'cyan',
  } 
}