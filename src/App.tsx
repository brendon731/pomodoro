import React, {useState, useEffect} from 'react';
import { Cronometro } from './components/cronometro';
import { TaskList } from "./components/taskList/taskList"
import {ReactComponent as IncreaseIcon} from "./assets/caret-up.svg"
import {ReactComponent as DecreaseIcon} from "./assets/caret-down.svg"
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
  const [time, setTime] = useState<string>("00:00")
  const [title, setTitle] = useState<string>("")
  const [amount, setAmount] = useState<number>(1)
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
    // if(curTask){

    //   setCurTask({
    //     ...curTask,
    //   isDone:curTask.amount === curTask.amountDone + 1,
    //   amountDone:curTask.amountDone + 1 
    // })
    // }

      setCurTask(undefined)
    
    // setTaskList(taskList.map(task=>{return {...task, isSelected:false}}))

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
      amountDone:0,
      isSelected:false
    }
    ])
    setAmount(1)
  }
  
  function handleSelectedElement(id:number){
    setCurTask(taskList.filter(task=>task.id===id)[0])
    setTaskList(taskList.map(task=>{return {...task, isSelected:id === task.id}}))
  }

  return (
    <div className="App" onClick={()=>setShowForm(false)}>

      <Cronometro taskDone={taskDone} selectedTask={curTask}/>
      {showForm?
        <div onClick={evt=>evt.stopPropagation()}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Task Title" onChange={evt=>setTitle(evt.target.value)}/>
            <div className="amountInputContainer">

            <input type="number" name="amount" min="1" value={amount} placeholder="Quantity of Pomodoro" onChange={evt=>setAmount(Number(evt.target.value))}/>
            <button className="changeAmount" onClick={evt=>{
              evt.preventDefault()
              setAmount(amount + 1)
            }}>
              <IncreaseIcon/></button>
            <button className="changeAmount" onClick={evt=>{
              evt.preventDefault()
              setAmount(amount > 1 ? amount - 1 : 1)
            }}><DecreaseIcon/></button>
            </div>
            <input type="time" name="time" placeholder="time "onChange={evt=>setTime(evt.target.value)}/>
            <input type="submit" value="Add Task"/>
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
