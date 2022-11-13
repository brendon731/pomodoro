import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root{
        --background:rgb(40, 44, 46);
        --grey:rgb(199, 199, 199);
        --list-background:rgb(66, 69, 70);
        --taskDone-background:rgb(72 106 72);

    }
    html{
        @media screen and (min-width:0){
            font-size:12px;
        }
        @media screen and (min-width:0){
            font-size:14px;
        }
        @media screen and (min-width:375px){
            font-size:16px;
        }
        @media screen and (min-width:720px){
            font-size:18px;
        }
    }
    *{
        font-family:Arial, Helvetica, sans-serif;
    }
    body{
        background-color:var(--background);
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    .App{
        min-height:100vh;
        display:flex;
        justify-content: space-around;
        max-width:1080px;
        flex-wrap: wrap;
        margin:auto;
    }
    .App > div{
        box-sizing:border-box;
        max-width:500px;
        padding:1.5rem 1rem;
        width:100%;
    }

    ul{
        padding:0;
        max-width:500px;
        margin:0;
    }
    li{
        list-style: none;
    }
    button, input[type="submit"]{
        border:none;

        &:hover, &:focus{
            outline:none;
            cursor:pointer;
        }

    }
`
