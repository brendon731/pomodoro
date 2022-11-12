import styled from "styled-components";

export const Container = styled.div`
    
    background-color:rgb(0, 0, 0, .2);
    display:flex;
    flex-direction: column;
    padding:1em;
    border-radius:15px;
    
    form input{
        border-radius:5px;
        width:50%;
        min-width:320px;
        border:none;
        line-height:2em;
        background-color: transparent;
        color:white;
        padding: 0.5em;
        font-size:18px;
        outline: none;
    }
    form input:focus{
        background-color:rgb(0, 0, 0, 0.2);
    }
    input[type="number"] {
    -webkit-appearance: textfield;
        -moz-appearance: textfield;
            appearance: textfield;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    }
    .amountContainer{
        display:flex;
        align-items:center;
    }
`

export const Button = styled.button`

    border:1px solid black;
    background-color:black;
    color:grey;
    margin-left:.3em;
    border-radius:5px;
    font-size:32px;
    height:36px;
    width:36px;
    line-height:18px;
    display:flex;
    justify-content: center;
    align-items: center;
    /* svg{
        width:24px;
        height:24px;
        vertical-align: middle;
    }
    svg, svg > *{
        fill: var(--grey);
        stroke:inherit;
   } */
    
`