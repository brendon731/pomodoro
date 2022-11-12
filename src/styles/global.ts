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
    .App{
        min-height:100vh;
    }
    .App > div{
        max-width:500px;
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
