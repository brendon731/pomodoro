import { Header } from "./styles"
import {ReactComponent as Dots} from "../../assets/img/dots.svg"
interface prop{
    deleteTask:Function
}
export function TaskListHeader({deleteTask}:prop){
    return(
        <Header>
        <h1>Tasks</h1>
          <div className="menuContainer">
            <button><Dots/></button>
              <ul>
                <li onClick={()=>deleteTask("DELETE_TASK_DONE")}>Remove Done</li>
                <li onClick={()=>deleteTask("DELETE_TASK_NOT_DONE")}>Remove not Done</li>
                <li onClick={()=>deleteTask("DELETE_ALL_TASK")}>Remove All</li>
              </ul>
          </div>
        </Header>

    )
}