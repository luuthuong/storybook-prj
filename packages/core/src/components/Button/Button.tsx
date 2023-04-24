
import { Button } from "@mui/material";
import ButtonProps from "./button.type";
import { useEffect } from "react";
export const ButtonKit = ({...props}: ButtonProps) => {
    useEffect(() =>{
        console.log(props);
    },[])
    return <Button >{props.text}</Button>
};