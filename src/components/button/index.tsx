import { ButtonStyled } from "./styles"

interface Button{
    clicked:()=>void,
    children:React.ReactNode
}
export function Button({clicked, children}:Button){
    return(<ButtonStyled onClick={evt=>{
        evt.preventDefault()
        clicked()
    }}>{children}</ButtonStyled>)
}