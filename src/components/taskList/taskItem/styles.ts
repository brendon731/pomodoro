import styled from "styled-components"
interface props{
    isDone:boolean
}
export const TaskItemStyle = styled.li<props>`
    background-color:white;
    padding:1em;
    margin-bottom:1em;
    display:flex;
    align-items: center;
    background-color:${props=>props.isDone?"green":"white"};
    opacity:${props=>props.isDone?0.7:1};
    pointer-events: ${props=>props.isDone?"none":"auto"};
    &:hover{
        cursor:pointer;
    }
    div{
        display:flex;
        flex-direction: column;

        strong{
            margin-bottom:.3em;
            font-size:18px;
        }
    }
    & > span{
        margin-left:auto;
        font-size:24px;
        font-weight: 700;
        opacity: .3;
    }

`