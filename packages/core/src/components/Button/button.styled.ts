import ButtonProps, { ButtonColorDefault } from "./button.type";
import { ColorVariables } from "../../variables";
import styled from "styled-components";
export const Button = styled.button.attrs((props: ButtonProps) => props)`
    background-color: ${
        props => props.color ? ButtonColorDefault[props.color] 
                            : ButtonColorDefault['default']
    };
    min-width: 125px;
    border: none;
    padding: .75rem;
    font-size: 1rem;
    border-radius: .75rem;
    box-shadow: 0 0.2rem ${ColorVariables.boxShadow};
    cursor: pointer;
    color: #FFF;
    &:active{
        box-shadow: 0 0.1rem ${ColorVariables.boxShadow};
        transform: translateY(0.2rem);
    }

    &:disabled {
        cursor: auto;
        color: grey;
    }
`;