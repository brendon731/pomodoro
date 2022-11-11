import styled from "styled-components"
interface props{
    isDone:boolean,
    isSelected:boolean
}
export const TaskItemStyle = styled.li<props>`
    padding:1em;
    margin-bottom:1em;
    display:flex;
    align-items: center;
    background-color:rgb(223, 223, 223);
    opacity:1;
    pointer-events: auto;
    box-shadow:1px 1px 3px black;
    border-radius:7px;
    color:black;
    box-shadow:${prop=>prop.isSelected?
    "inset 3px 3px 3px black, inset -1px -1px 1px black, 1px 1px 3px black":
    "1px 1px 3px black"};

    transition: .2s;
    opacity:${prop=>prop.isSelected?"0.7":"1"};
    
    &.taskDone{
        background-color:rgb(81, 155, 81);
        opacity:0.7;
        pointer-events: none;
    }
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