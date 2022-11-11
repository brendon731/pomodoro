import styled from "styled-components";
interface prop{
    current:boolean
}
export const TaskNavStyle = styled.ul`
    display:flex;
    margin:1.5em auto;
    width:fit-content;
`
export const TaskNavItem = styled.div<prop>`
    background-color:${props=>props.current?"rgb(0, 0, 0, 0.7)":"transparent"};
    border-radius:5px;
    cursor:pointer;
    padding:.5em 1em;
    color:white;
    display:inline-block;

`
