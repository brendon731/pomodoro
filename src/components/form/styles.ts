import styled from "styled-components";

export const Container = styled.div`
    
    background-color:rgb(0, 0, 0, .2);
    display:flex;
    flex-direction: column;
    padding:1em;
    border-radius:15px;
    
    form{
        span{
            color:white;
        }
        input{
            border-radius:5px;
            width:100%;
            max-width:320px;
            border:none;
            line-height:2em;
            background-color: transparent;
            color:white;
            padding: 0.5em;
            font-size:18px;
            outline: none;
        }
        input[type="submit"]{
            background-color:black;
            margin-left:auto;
            width:fit-content;
        }

        input:focus{
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
    }
`
export const Footer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:1em;
    .deleteButton{
        color:grey;
        padding: .5em;
    }
    .deleteButton:hover{
        filter:brightness(1.75);
        cursor:pointer;
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
       
`