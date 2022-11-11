import React from "react"
import { TaskListStyle } from "./styles"
import { TaskItem } from "./taskItem"
interface task{
    tasks:{
        id:number,
        title:string,
        time:string,
        isDone:boolean,
        amount:number,
        amountDone:number,
        isSelected:boolean
    }[]
    handleSelectedElement:Function

}
export function TaskList({tasks, handleSelectedElement}:task){
    return(
        <TaskListStyle>
        {tasks.map(task=><TaskItem key={task.id} task={task} handleSelectedElement={handleSelectedElement}/>)}
      </TaskListStyle>
    )
}