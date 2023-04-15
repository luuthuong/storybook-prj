import React, { DOMAttributes } from 'react';
import ButtonProps from "./button.type";
import { Button } from './button.styled';

export const ButtonKit = ({ 
    size ='md', 
    color= 'default', 
    text ='', 
    type = 'default' 
    , ...props}: ButtonProps) => {
    return <Button style={
        {
            width: props.width || 'auto',
            height: props.height || 'auto'
        }
    } {...(props as DOMAttributes<HTMLButtonElement>)} className={`${size}`}>
        {text}
    </Button>
};