import React from "react"
import {TaskListItem} from "./style"
import {Itask} from "../types/task"
interface task{
    tasks:Itask[]
    handleSelectedElement:Function,
    selectedTask:Itask | undefined,
    selectTaskToEdit:Function

}
export function TaskList({tasks, handleSelectedElement, selectedTask, selectTaskToEdit}:task){
    return(
        <ul>
        {tasks.map(task=>

        <TaskListItem 
            key={task.id}
            className={task.isDone?"taskDone":undefined}
            onClick={()=>handleSelectedElement(task.id)} isDone={task.isDone} 
            isSelected={selectedTask?.id === task.id}>
            <div>
                <strong>{task.title}</strong>
                <span>{task.time}</span>
            </div>
            <span>{task.amountDone} / {task.amount}</span>
            <span>

            <span onClick={evt=>{evt.stopPropagation()
                selectTaskToEdit(task.id)
                }}>edit</span>
            </span>
        </TaskListItem>)}
      </ul>
    )
}
//<TaskItem key={task.id} selectedTask={selectedTask} task={task} handleSelectedElement={handleSelectedElement}/>)}
