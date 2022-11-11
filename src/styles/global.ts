import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root{
        --background:rgb(40, 44, 46);

    }
    *{
        font-family:Arial, Helvetica, sans-serif;
    }
    body{
        
        background-color:blueviolet;
        background-color:var(--background);
    }
    .App{
        min-height:100vh;
    }
    .App > div{
        max-width:500px;
    }
    .newTask{
        border:5px dotted white;
        color:white;
        opacity:.7;
        font-weight:800;
        font-size:18px;
        background-color:rgb(0, 0, 0, .2);
        padding:1.5em;
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
