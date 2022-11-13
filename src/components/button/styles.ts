import styled from "styled-components";

export const ButtonStyled = styled.button`

    background-color:black;
    border-radius:15px;
    font-size:1.5rem;
    padding:.7em 1em;
    color:var(--grey);
    font-weight: 600;
    min-width:125px;
    border:none;
    margin:1.2em auto;
    display:flex;
    align-items: center;
    
    &:hover{
        cursor:pointer;
    
    }
    svg{
        height:24px;
        width:24px;
        margin-right: .5em;
    }
    svg > *{
        stroke: var(--grey);
        fill: var(--grey);
    }

`