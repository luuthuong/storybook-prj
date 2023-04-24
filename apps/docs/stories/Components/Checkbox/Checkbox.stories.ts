import type { Meta } from '@storybook/react';
import {CheckboxKit } from "kit-ui-react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxKit> = {
    title: "Component/Checkbox",
    component: CheckboxKit,
    tags: ['autodocs'],
    argTypes: {
        defaultChecked:{
            defaultValue: true,
            type: 'boolean',
            name: 'defaultChecked',
        },
        color:{
            name: 'color',
            defaultValue: 'primary',
            options: ['primary' ,'secondary' , 'error' , 'info' , 'success' , 'warning' , 'default'] ,
            control: {
                type: 'radio'
            },
        }
    },
    args: {}
};

export default meta;
type Story = StoryObj<typeof CheckboxKit>;

export const Default: Story ={
    args:{
        color: 'default'
    }
}

export const Secondary: Story ={
    args:{
        color: 'secondary'
    }
}
export const Error: Story ={
    args:{
        color: 'error'
    }
}