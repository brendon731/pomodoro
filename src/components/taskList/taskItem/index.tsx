import {TaskItemStyle} from "./styles"
interface task{
    task:{
        id:number,
        title:string,
        time:string,
        isDone:boolean,
        amount:number,
        amountDone:number,
        isSelected:boolean
    }
    handleSelectedElement:Function
}

export function TaskItem({ task, handleSelectedElement }: task){
    return(
        <>
        
        <TaskItemStyle onClick={()=>handleSelectedElement(task.id)} isDone={task.isDone} isSelected={task.isSelected}>
            <div>
                <strong>{task.title}</strong>
                <span>{task.time}</span>
            </div>
            <span>{task.amountDone} / {task.amount}</span>
        </TaskItemStyle>
        </>
    )
}