import styled from "styled-components";
import ButtonProps, { ButtonColorDefault } from "./button.type";
export const Button = styled.button.attrs((props: ButtonProps) => props)`
    background-color: ${props => props.color ? ButtonColorDefault[props.color] : ButtonColorDefault['default']};
    border: none;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    color: lightcoral;
    box-shadow: 0 0.2rem #dfd9d9;
    cursor: pointer;
    color: #FFF;
    &:active{
        color: white;
        box-shadow: 0 0.1rem #dfd9d9;
        transform: translateY(0.2rem);
    }
    &:hover:not(:disabled) {
        background: lightcoral;
        color: white;
        text-shadow: 0 0.1rem #bcb4b4;
    }
    &:disabled {
        cursor: auto;
        color: grey;
    }
`;