import {WrapperContainer} from "kit-ui-react";
import { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof WrapperContainer> = {
    title: 'Example/Wrapper',
    component: WrapperContainer,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof WrapperContainer>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};