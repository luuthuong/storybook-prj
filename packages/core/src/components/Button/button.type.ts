import { BaseColorType, BaseSizeType } from '../../types';
import { ColorsDefault } from '../../variables';
import { DOMAttributes } from 'react';

export type ButtonSize = BaseSizeType;

export type ButtonColorType =  BaseColorType & {
    cyan: string;
}
export type ButtonColor = keyof ButtonColorType;

export const ButtonColorDefault: ButtonColorType = {
    ...ColorsDefault,
    cyan: "#06B7DB"
}

interface ButtonProps extends DOMAttributes<HTMLButtonElement>{
    text?: string;
    size?: ButtonSize;
    color?: ButtonColor;
    width?: number | string;
    height?: number | string;
    type?: 'default' | 'outline' ;
    customClass?: string;
};
export default ButtonProps;