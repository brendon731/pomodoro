import styled from "styled-components"

interface props{
    isDone:boolean,
    isSelected:boolean
}
export const TaskListItem = styled.li<props>`
    padding:.7em .4em .7em .7em;
    margin-top:1em;
    display:flex;
    align-items: center;
    background-color:var(--list-background);
    pointer-events: auto;
    border-radius:7px;
    color:white;
    box-shadow:${prop=>prop.isSelected?
    "inset 3px 3px 3px black, inset -1px -1px 1px black":
    "1px 1px 3px black"};

    transition: .2s;
    opacity:${prop=>prop.isSelected?"0.7":"1"};
    
    &.taskDone{
        background-color:var(--taskDone-background);
        color:white;
        pointer-events: none;
        box-shadow:none;
    }
    &:hover{
        cursor:pointer;
    }
    .title{
        display:flex;
        flex-direction: column;
        flex:1;
        
        strong{
            color:var(--grey);
            margin-bottom:.3em;
            font-size:18px;
        }
        span{
            opacity:.3;

        }
    }
    .iconContainer{
        display:flex;
        align-items:center;
        font-weight: 700;
        font-size:1.1rem;

        span{
            margin-left:.3em;
            opacity:.3;
        }
       
        .icon{
            display:flex;
            svg{
                width:32px;
                height:32px;
                
                & > *{
                    stroke:var(--grey);
                }
            }
            &:hover{
                opacity:1;
                
            }
        }
    }

`