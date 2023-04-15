import type { Meta, StoryObj } from '@storybook/react';
import { ButtonKit } from 'kit-ui-react';
const meta: Meta<typeof ButtonKit> = {
  title: "Component/Button",
  component: ButtonKit,
  tags: ['autodocs'],
  argTypes: {
    text: {
      defaultValue: 'Text',
      name: 'Button',
      type: 'string',
    },
    color:{
    }
  },
};

export default meta;
type Story = StoryObj<typeof ButtonKit>;
export const Primary: Story ={
  args: {
    text: 'Button Primary'
  }
}
export const Cyan: Story ={
  args: {
    text: 'Button Primary',
    color: 'cyan'
  }
}