import styled from "styled-components";

export const ButtonStyled = styled.button`

    background-color:black;
    border-radius:15px;
    font-size:1.25rem;
    padding:.6em 1em;
    color:var(--grey);
    font-weight: 600;
    min-width:125px;
    border:none;
    margin:1.2em auto;
    display:flex;
    align-items: center;

    &:disabled{
        opacity:.5
    }
    &:disabled:hover{
        box-shadow:none;
        cursor:unset;
    }
    &:hover{
        box-shadow:0px 0px 0px 2px var(--background), 0px 0px 0px 4px black;
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