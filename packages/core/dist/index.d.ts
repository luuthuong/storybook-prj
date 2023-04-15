import { DOMAttributes } from 'react';

declare const WrapperContainer: () => JSX.Element;

type BaseColorType = {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
};

type BaseSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonSize = BaseSizeType;
type ButtonColorType = BaseColorType & {
    cyan: string;
};
type ButtonColor = keyof ButtonColorType;
interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
    text?: string;
    size?: ButtonSize;
    color?: ButtonColor;
    width?: number | string;
    height?: number | string;
    type?: 'default' | 'outline';
}

declare const ButtonKit: ({ size, color, text, type, ...props }: ButtonProps) => JSX.Element;

export { ButtonKit, WrapperContainer };
