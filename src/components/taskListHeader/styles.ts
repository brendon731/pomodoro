import styled from "styled-components"


export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    color:var(--grey);
    border-bottom:.5px solid var(--grey);
    margin-bottom:1em;

    h1{
        font-size: 1.2rem;
    }
   
    .menuContainer{
        position:relative;
        height:fit-content;

        &:hover{
            button{
                background-color: var(--grey);
                
                svg > circle{
                    stroke:none;
                    fill:var(--background);
                }
            }
            ul{
                display:block;

            }
        }
        button{
            background-color:transparent;
            color:var(--grey);
            display:flex;
            border-radius:5px;
            background-color: black;
            padding:.3em;
            svg{
                height:24px;
                width:24px;
            }
            svg > circle{
                stroke:none;
                fill:var(--grey);
            }
        }
        ul{
            border-radius:5px;
            display:none;
            width:150px;
            background-color: var(--background);
            z-index:1;
            position:absolute;
            overflow:hidden;

            li{
                font-size:.9rem;
                border-bottom:.5px solid black;
                padding:.5em;
            }

            li:hover{
                background-color:grey;
                cursor:pointer;

            }
        }
    }
    

`