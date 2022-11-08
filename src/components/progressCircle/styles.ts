import styled from "styled-components";

interface prop{
    progress:number
}
export const OutsideDiv = styled.div<prop>`
    border-radius:50%;
    width:350px;
    height:350px;
    background-color:red;
    background:conic-gradient(red ${prop=>prop.progress}%, blue 0%);
    display:flex;
`

export const InsideDiv = styled.div`
    border-radius:50%;
    margin:auto;
    width:320px;
    height:320px;
    background-color:blueviolet;
    display:flex;

`