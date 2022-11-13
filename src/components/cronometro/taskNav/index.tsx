import {TaskNavStyle, TaskNavItem} from "./styles"
interface prop{
    setTaskType:Function,
    taskType:string
}
export function TaskNav({setTaskType, taskType}:prop){
    return(
    <>
        <TaskNavStyle>
            <TaskNavItem     
            current={taskType === "Pomodoro"}      
            onClick={evt=>setTaskType(evt.currentTarget.innerText)}>Pomodoro</TaskNavItem>
            <TaskNavItem
            current={taskType === "Short Break"}            
            onClick={evt=>setTaskType(evt.currentTarget.innerText)}>Short Break</TaskNavItem>
            <TaskNavItem 
            current={taskType === "Long Break"}            
            onClick={evt=>setTaskType(evt.currentTarget.innerText)}>Long Break</TaskNavItem>
        </TaskNavStyle>
        </>
        
    )
}