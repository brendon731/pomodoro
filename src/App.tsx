import React, {useState, useEffect} from 'react';
import { Cronometro } from './components/cronometro';
import { TaskList } from "./components/taskList/taskList"

import { NewTask } from './components/newTask';
import { Form } from './components/form';
import { Itask } from './components/types/task';

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
      setCurTask(undefined)
  }
  function handleSubmit(newTask:Itask){
    if(selectedToEdit){
      setTaskList(taskList.map(task=>(
        selectedToEdit.id === task.id?newTask:task
        )))
        
        setShowForm(false)
      }else{
        setTaskList([...taskList, newTask])
      }
      setSelectedToEdit(undefined)
  }
  function selectTaskToEdit(id:number){
    setSelectedToEdit(taskList.filter(task=>task.id===id)[0])
    setShowForm(true)
  }
  function handleDeleteTask(id:number){
    setTaskList(taskList.filter(task=>task.id !== id))
    setSelectedToEdit(undefined)
    setShowForm(false)

  }
  function handleSelectedElement(id:number){
    setCurTask(taskList.filter(task=>task.id===id)[0])
    // if(id === curTask?.id){
    //   setCurTask(undefined)
    // }else{
    // }
    // setTaskList(taskList.map(task=>{return {...task, isSelected:id === task.id}}))
  }

  return (
    <div onClick={()=>{
      setShowForm(false)
      setSelectedToEdit(undefined)
    }}> 

    <div className="App" >
      
      <Cronometro taskDone={taskDone} selectedTask={curTask}/>
      <div>

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
