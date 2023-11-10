import styled from 'styled-components'
import { ButtonComponent } from '../components/button'
import Theme from '../styles/Theme'

const Button = styled.button`
    width: 30rem;
    background-color: red;
    border: none;
    padding: .5rem 1rem;
    border-radius: 4px;
`
const numb = 10
const text = `string ${numb}`

export default function StylesPage(){
    return (
        <>
            <h2>Styles</h2>
            <Button>{text}</Button>
            <ButtonComponent backgroundColor={Theme.colors.red_300}>Click</ButtonComponent>
        </>
    )
}