import styled from "styled-components";
import Theme from "../styles/Theme";
import { lighten } from "polished";

interface StyledDivProps {
    borderColor?: string;
    backgroundColor?: string;
}
  

export const Container = styled.div<StyledDivProps>`
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    
    background-color: ${(props)=> props.backgroundColor || 'white'} ;
    /* background-color: ${Theme.colors.yellow_300}; */
    border: 2px solid ${Theme.colors.purple_300};
    border-radius: 0.6rem;

    &:focus-within{
        border: 2px solid ${(props) => props.borderColor || '#3498db'};
        outline: 3px solid ${lighten(0.35,Theme.colors.red_300)};
    }
`;


export const Input = styled.input`
    background-color: transparent;
    border: none;
    height: 1.6rem;
    width: 100%;
    outline: none;
`;

export const Label = styled.label`
    font-size: medium;
    color: ${Theme.colors.black};
`

export const Adornment = styled.span`
    font-size: medium;
    color: ${Theme.colors.purple_100};
`

// Esses elementos extendem-se de adornment
export const StartAdornment = styled(Adornment)`
    margin-right: 0.6rem;
`
export const EndAdornment = styled(Adornment)`
    margin-left: 0.6rem;
`
