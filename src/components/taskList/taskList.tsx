import React from "react"
import { TaskItemStyle } from "./styles"
import { TaskItem } from "./taskItem"
interface task{
    tasks:{
        id:number,
        title:string,
        time:string,
        isDone:boolean,
        amount:number,
        amountDone:number
    }[]
    handleSelectedElement:Function

}
export function TaskList({tasks, handleSelectedElement}:task){
    return(
        <ul>
        {tasks.map(task=><TaskItem key={task.id} task={task} handleSelectedElement={handleSelectedElement}/>)}
      </ul>
    )
}