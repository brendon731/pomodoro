import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        font-family:Arial, Helvetica, sans-serif;
    }
    body{
        
        background-color:blueviolet;
    }
    .App{
        min-height:100vh;
    }
    .App > div{
        max-width:500px;
    }
    .newTask{
        border:2px solid black;
        padding:2em;
        max-width:500px;
        box-sizing: border-box;
        text-align: center;
        cursor:pointer;
    }
    ul{
        padding:0;
        max-width:500px;
    }
    li{
        list-style: none;
    }
    button{

        &:hover{
            cursor:pointer;
        }
    }
`
