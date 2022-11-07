import {TaskItemStyle} from "./styles"
interface task{
    task:{
        id:number,
        title:string,
        time:string,
        isDone:boolean,
        amount:number,
        amountDone:number
    }
    handleSelectedElement:Function
}

export function TaskItem({ task, handleSelectedElement }: task){
    return(
        <>
        
        <TaskItemStyle onClick={()=>handleSelectedElement(task.id)} isDone={task.isDone}>
            <div>
                <strong>{task.title}</strong>
                <span>{task.time}</span>
            </div>
            <span>{task.amountDone} / {task.amount}</span>
        </TaskItemStyle>
        </>
    )
}