import styled from "styled-components";

export const Container = styled.div`
    background-color:rgb(255, 255, 255, 0.5);
    max-width:500px;
    /* margin:auto; */
`
interface prop{
    current:boolean
}
export const NavButton = styled.button<prop>`

    background-color:${props=>props.current?"rgb(0, 0, 0, 0.2)":"transparent"};
    border:none;
    padding:.5em 1em;
    color:white;
    
`