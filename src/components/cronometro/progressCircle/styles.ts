import styled from "styled-components";

interface prop{
    progress:number
}
export const OutsideDiv = styled.div<prop>`
    border-radius:50%;
    width:100%;
    max-width:320px;
    aspect-ratio:1/1;
    background:conic-gradient(rgb(0, 204, 255), rgb(164, 74, 248) ${prop=>prop.progress || 0}%, black 0%);
    display:flex;
    margin:auto;
`

export const InsideDiv = styled.div`
    border-radius:50%;
    margin:auto;
    width:95%;
    height:95%;
    background-color:var(--background);
    display:flex;

`