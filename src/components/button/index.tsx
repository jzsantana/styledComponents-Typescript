import { ReactNode } from "react"
import * as J from "./styles"

export type ButtonProps = {
    children: React.ReactNode;
    backgroundColor?: string;
}

export const ButtonComponent = ({children, backgroundColor}:ButtonProps) => {
    return (
        <>
            <J.Container backgroundColor={backgroundColor}>{children}</J.Container>
        </>
    )
}