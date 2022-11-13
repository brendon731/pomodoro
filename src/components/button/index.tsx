import { ButtonStyled } from "./styles"

interface Button{
    clicked:()=>void,
    children:React.ReactNode,
    disabled:boolean
}
export function Button({clicked, children, disabled = false}:Button){
    return(
    <ButtonStyled 
        disabled={disabled}
        onClick={evt=>{
            evt.preventDefault()
            clicked()
    }}>{children}
    </ButtonStyled>)
}