
import {ReactComponent as PlusIcon} from "../../assets/img/plus.svg"
import {NewTaskStyle} from "./styles"
interface prop{
    showForm:boolean, 
    setShowForm:Function
}
export function NewTask({setShowForm, showForm} : prop){
    return(
        
            <NewTaskStyle 
                onClick={(evt)=>{
                evt.stopPropagation()
                setShowForm(!showForm)
            }}>
            <PlusIcon/>
            Add Task</NewTaskStyle>
        
    )
}