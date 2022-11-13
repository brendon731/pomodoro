import React, {useState, useEffect} from 'react';
import { Cronometro } from './components/cronometro';
import { TaskList } from "./components/taskList/taskList"
import { NewTask } from './components/newTask';
import { Form } from './components/form';
import { Itask } from './components/types/task';
import { TaskListHeader } from './components/taskListHeader';

function App() {
  const [curTask, setCurTask] = useState<Itask>()
  const [selectedToEdit, setSelectedToEdit] = useState<Itask>()
  const [taskList, setTaskList] = useState<Itask[]>(()=>{
    const storage = localStorage.getItem("@pomodoro:taskList")
    if(storage) return JSON.parse(storage)
    return []
  })
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    localStorage.setItem("@pomodoro:taskList", JSON.stringify(taskList))
    setCurTask(taskList.filter(task=>task.id === curTask?.id)[0])
  },[taskList])
  

  function taskDone(id:number){
      
    setTaskList(taskList.map(task=>{
      if(task.id === id){
        return {
          ...task,
           isDone:task.amount === task.amountDone + 1,
           amountDone:task.amountDone + 1
          }
      }
      return task
    }))
    if(curTask && curTask.amountDone + 1 === curTask.amount){

      setCurTask(undefined)
    }
  }
  function handleSubmit(newTask:Itask){
    if(selectedToEdit){
      setTaskList(taskList.map(task=>(
        selectedToEdit.id === task.id?newTask:task
        )))
        
        setShowForm(false)
      }else{
        setTaskList([newTask, ...taskList])
      }
      setSelectedToEdit(undefined)
  }
  function selectTaskToEdit(id:number){
    setSelectedToEdit(taskList.filter(task=>task.id===id)[0])
    setShowForm(true)
  }
  function handleDeleteTask(id:number){
    if(id === curTask?.id){
      setCurTask(undefined)
    }
    setTaskList(taskList.filter(task=>task.id !== id))
    setSelectedToEdit(undefined)
    setShowForm(false)

  }

  function handleSelectedElement(id:number){
    setCurTask(taskList.filter(task=>task.id===id)[0])
  }
  function deleteTask(action:string){
    if(!window.confirm("Are you sure yuo want to delete?"))return
    switch(action){
      
      case "DELETE_ALL_TASK":
        setTaskList([])
        return

      case "DELETE_TASK_DONE":
        setTaskList(taskList.filter(task=>!task.isDone))
        return

      case "DELETE_TASK_NOT_DONE":
        setTaskList(taskList.filter(task=>task.isDone))
        return

      default:
        return

    }
  }

  return (
    <div onClick={()=>{
      setShowForm(false)
      setSelectedToEdit(undefined)
    }}> 

    <div className="App" >
      
      <Cronometro taskDone={taskDone} selectedTask={curTask}/>
      <div>
      
        <TaskListHeader
        deleteTask={deleteTask}
        />
        {showForm?
          <Form 
          handleDeleteTask={handleDeleteTask}
          submitForm={handleSubmit} 
          selectedToEdit={selectedToEdit}/>
          :
          <NewTask setShowForm={setShowForm} showForm={showForm}/>
        }
        <TaskList 
        tasks={taskList}
        selectedTask={curTask}
        selectTaskToEdit={selectTaskToEdit}
        handleSelectedElement={handleSelectedElement}/>
      </div>
    </div>
    </div>

  );
}

export default App;
