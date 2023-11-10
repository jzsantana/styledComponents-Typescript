import styled, { keyframes } from "styled-components";

import { ButtonProps } from ".";
type ContainerProps = Pick<ButtonProps, 'backgroundColor'>
const rotate = keyframes`
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
`

export const Container = styled.button<ContainerProps>`
    background-color: ${(props)=>props.backgroundColor};
    border: none;
    border-radius: 4px;
    padding: .6rem 1.5rem;
    color: black;
    animation: ${rotate} 2s linear infinite;
`