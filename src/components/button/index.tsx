import { ButtonStyled } from "./styles"

interface Button{
    clicked:()=>void,
    children:React.ReactNode
}
export function Button({clicked, children}:Button){
    return(<ButtonStyled onClick={clicked}>{children}</ButtonStyled>)
}