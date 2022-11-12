import React, {useState, useEffect} from 'react';
import { Cronometro } from './components/cronometro';
import { TaskList } from "./components/taskList/taskList"

import { NewTask } from './components/newTask';
import { Form } from './components/form';

interface task{
  id:number,
  title:string,
  time:string,
  isDone:boolean,
  amount:number,
  amountDone:number,
  isSelected:boolean
}

function App() {
  const [curTask, setCurTask] = useState<task>()
  const [taskList, setTaskList] = useState<task[]>([])
  const [showForm, setShowForm] = useState(false)
  function taskDone(id:number){
      
    setTaskList(taskList.map(task=>{
      if(task.id === id){
        return {
          ...task,
            isSelected:false,
           isDone:task.amount === task.amountDone + 1,
           amountDone:task.amountDone + 1
          }
      }
      return task
    }))
      setCurTask(undefined)
  }
  function handleSubmit(newTask:task){
    setShowForm(false)
    setTaskList([...taskList, newTask])
  }
  
  function handleSelectedElement(id:number){
    setCurTask(taskList.filter(task=>task.id===id)[0])
    setTaskList(taskList.map(task=>{return {...task, isSelected:id === task.id}}))
  }

  return (
    <div className="App" onClick={()=>setShowForm(false)}>

      <Cronometro taskDone={taskDone} selectedTask={curTask}/>
      {showForm?
        <Form submitForm={handleSubmit}/>
        :
        <NewTask setShowForm={setShowForm} showForm={showForm}/>
      }
      <TaskList tasks={taskList} handleSelectedElement={handleSelectedElement}/>
    </div>
  );
}

export default App;
