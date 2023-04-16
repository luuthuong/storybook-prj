import { DOMAttributes } from 'react';

type BaseColorType = {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
};

type BaseSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type BaseWeightType = 'light' | 'normal' | 'bold' | 'extrabold' | 'black';

declare const ColorsDefault: BaseColorType;
declare const ColorVariables: {
    boxShadow: string;
    textShadow: string;
};

type ButtonSize = BaseSizeType;
type ButtonColorType = BaseColorType & {
    cyan: string;
};
type ButtonColor = keyof ButtonColorType;
declare const ButtonColorDefault: ButtonColorType;
interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
    text?: string;
    size?: ButtonSize;
    color?: ButtonColor;
    width?: number | string;
    height?: number | string;
    type?: 'default' | 'outline';
    customClass?: string;
}

declare const ButtonKit: ({ size, color, text, type, customClass, ...props }: ButtonProps) => JSX.Element;

export { BaseColorType, BaseSizeType, BaseWeightType, ButtonColor, ButtonColorDefault, ButtonColorType, ButtonKit, ButtonSize, ColorVariables, ColorsDefault };
