import styled from "styled-components";
interface prop{
    current:boolean
}
export const TaskNavStyle = styled.ul`
    display:flex;
    margin:0 auto 1.5em;
    justify-content: space-evenly;
`
export const TaskNavItem = styled.div<prop>`
    background-color:${props=>props.current?"rgb(0, 0, 0, 0.7)":"transparent"};
    border-radius:5px;
    cursor:pointer;
    padding:.5rem;
    color:white;
    font-size:1rem;
    display:inline-block;

`
