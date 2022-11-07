import React, {useState, useEffect} from 'react';
import { Cronometro } from './components/cronometro';
import { TaskList } from "./components/taskList/taskList"
interface task{
  id:number,
  title:string,
  time:string,
  isDone:boolean,
  amount:number,
  amountDone:number
}

function App() {
  const [curTask, setCurTask] = useState<task>()
  const [taskList, setTaskList] = useState<task[]>([])
  const [time, setTime] = useState<string>("00:00")
  const [title, setTitle] = useState<string>("")
  const [amount, setAmount] = useState<number>(1)
  const [showForm, setShowForm] = useState(false)
  function taskDone(id:number){
    //   if(curTask){

    //     setCurTask({
    //       ...curTask,
    //     isDone:curTask.amount === curTask.amountDone + 1,
    //     amountDone:curTask.amountDone + 1 
    //   })
    // }
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
  function handleSubmit(evt:any){
    evt.preventDefault()
    setShowForm(false)
    setTaskList([...taskList,
    {
      id:Date.now(),
      title:title,
      time:time,
      isDone:false,
      amount:amount,
      amountDone:0
    }
    ])
  }
  
  function handleSelectedElement(id:number){
    setCurTask(taskList.filter(task=>task.id===id)[0])
  }
  
  

  return (
    <div className="App" onClick={()=>setShowForm(false)}>

      <Cronometro taskDone={taskDone} selectedTask={curTask}/>
      {showForm?
      <div onClick={evt=>evt.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" onChange={evt=>setTitle(evt.target.value)}/>
          <input type="number" name="amount" onChange={evt=>setAmount(Number(evt.target.value))}/>
          <input type="time" name="time" onChange={evt=>setTime(evt.target.value)}/>
          <button>novo</button>
        </form>
      </div>
      :
      <div className="newTask" onClick={(evt)=>{
        evt.stopPropagation()
        setShowForm(!showForm)
      }}>new Task</div>
      }
      <TaskList tasks={taskList} handleSelectedElement={handleSelectedElement}/>
        </div>
  );
}

export default App;
