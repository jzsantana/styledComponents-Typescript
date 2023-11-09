import * as S from './Styles.ts'
import {InputHTMLAttributes, ReactNode, useId} from 'react'

type InputProps = {
  label?: string;
  borderColor?: string;
  backgroundColor?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}& InputHTMLAttributes<HTMLInputElement>

// passo os elementos que o input tradicional do html teria
// esse rest significa que el consegue pegar todos os componentes utilizados nessa tag
export const Input = ({type ='', borderColor='', backgroundColor= '', label = '', name = '',startAdornment, endAdornment, ...rest}: InputProps) => {

  const labelId =useId();

  return (
    <>
    {/* Só vai renderizar o label se eu passar como parametro */}
      {label && <S.Label htmlFor={labelId}>{label}</S.Label>} 
        <S.Container borderColor={borderColor} backgroundColor={backgroundColor}>
          {startAdornment && <S.StartAdornment>{startAdornment}</S.StartAdornment>}
          <S.Input id={labelId} type={type} name={name} {...rest}/>
          {endAdornment && <S.EndAdornment>{endAdornment}</S.EndAdornment>}
        </S.Container>
    </>
  )
};