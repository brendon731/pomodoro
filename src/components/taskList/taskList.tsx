import React from "react"
import {TaskListItem} from "./style"
import {Itask} from "../types/task"
import {ReactComponent as Edit} from "../../assets/img/note-pencil.svg"
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
            <div className="title">
                <strong>{task.title}</strong>
                <span>{task.time}</span>
            </div>
            <div className="iconContainer">
                <span>{task.amountDone} / {task.amount}</span>
                <span 
                className="icon"
                onClick={evt=>{evt.stopPropagation()
                    selectTaskToEdit(task.id)
                }}>
                    <Edit/>
                </span>
            </div>
        </TaskListItem>)}
      </ul>
    )
}
//<TaskItem key={task.id} selectedTask={selectedTask} task={task} handleSelectedElement={handleSelectedElement}/>)}
