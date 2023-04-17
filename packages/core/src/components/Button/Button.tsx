import { DOMAttributes } from 'react';
import { Button } from './button.styled';
import ButtonProps from "./button.type";

export const ButtonKit = ({ 
    size ='md', 
    color= 'default', 
    text ='', 
    type = 'default' ,
    customClass = ''
    , ...props}: ButtonProps) => {
    return <Button style={
        {
            width: props.width || 'auto',
            height: props.height || 'auto'
        }
    } 
    {...(props as DOMAttributes<HTMLButtonElement>)} 
    type={type}
    color={color} 
    className={`${size} ${customClass}`}
    >
    {text}
    </Button>
};