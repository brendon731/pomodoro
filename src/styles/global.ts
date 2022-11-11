import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root{
        --background:rgb(40, 44, 46);
        --grey:rgb(199, 199, 199);

    }
    *{
        font-family:Arial, Helvetica, sans-serif;
    }
    body{
        
        background-color:blueviolet;
        background-color:var(--background);
    }
    .amountInputContainer{
        display:flex;
        align-items: center;
    }
    .changeAmount{
        border:1px solid black;
        background-color:black;
        color:grey;
        padding:.3em;
        margin-left:.5em;
        display:flex;
        align-items: center;
        border-radius:5px;
    }
    .changeAmount svg{
        width:24px;
        height:24px;
    }
    .changeAmount svg >*{
        stroke:grey;
    }
    
    .App{
        min-height:100vh;
    }
    .App > div{
        max-width:500px;
    }
    .newTask{
        border-radius:10px;
        border:5px dotted black;
        color:var(--grey);
        font-weight:800;
        font-size:18px;
        background-color:rgb(0, 0, 0, .2);
        padding:1.5em;
        max-width:500px;
        box-sizing: border-box;
        text-align: center;
        cursor:pointer;

    }
    form{
        background-color:rgb(0, 0, 0, .2);
        display:flex;
        flex-direction: column;
        padding:1em;
        border-radius:15px;

    }
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
    ul{
        padding:0;
        max-width:500px;
    }
    li{
        list-style: none;
    }
    button, input[type="submit"]{

        &:hover{
            cursor:pointer;
        }
    }
`
