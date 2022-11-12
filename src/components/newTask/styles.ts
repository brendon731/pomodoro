import styled from "styled-components"


export const NewTaskStyle = styled.div`
    border-radius:10px;
    border:5px dotted black;
    color:grey;
    font-weight:800;
    font-size:18px;
    background-color:rgb(0, 0, 0, .2);
    padding:1.2em;
    max-width:500px;
    box-sizing: border-box;
    /* text-align: center; */

    display:flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
    
    svg{
        width:18px;
        height:18px;
        margin-right:.3em;
    }
     svg >*{
        stroke:grey;
    }
`