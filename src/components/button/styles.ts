import styled from "styled-components";

interface props{
    disabled:boolean
}
export const ButtonStyled = styled.button`

    background-color:white;
    font-size:24px;
    padding:1em;
    color:blueviolet;
    font-weight: 700;
    min-width:150px;
    border:none;
    margin:auto;
    
    &:hover{
        cursor:pointer;
    }

`