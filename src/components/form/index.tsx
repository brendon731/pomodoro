import {useState, useEffect} from "react"
import { Container, Button, Footer } from "./styles"
import { Itask } from "../types/task"
interface prop{
    submitForm:Function,
    selectedToEdit:Itask | undefined,
    handleDeleteTask:Function
}
export function Form({submitForm, selectedToEdit, handleDeleteTask} : prop){
    
  const [time, setTime] = useState<string>("00:00")
  const [title, setTitle] = useState<string>("")
  const [amount, setAmount] = useState<number>(1)
  useEffect(()=>{
    if(selectedToEdit){
        setTime(selectedToEdit?.time)
        setTitle(selectedToEdit?.title)
        setAmount(selectedToEdit?.amount)
    }
  },[selectedToEdit])
    function cleanForm(){
        setTime("00:00")
        setTitle("")
        setAmount(1)
    }
    function handleSubmit(evt:any){
        evt.preventDefault()
        const newTask = 
            {
                id:selectedToEdit?.id || Date.now(),
                title:title,
                time:time,
                isDone:selectedToEdit?.isDone,
                amount:amount,
                amountDone:selectedToEdit?.amountDone || 0
              }
        cleanForm()
        submitForm(newTask)
    }
    return(
        <Container onClick={evt=>evt.stopPropagation()}>
          <form onSubmit={handleSubmit}>
            <input type="text" value={title} name="title" placeholder="Task Title" onChange={evt=>setTitle(evt.target.value)}/>
            <div className="amountContainer">

                <input type="number" name="amount" min="1" value={amount} placeholder="Quantity of Pomodoro" onChange={evt=>setAmount(Number(evt.target.value))}/>
                <Button
                    onClick={evt=>{
                    evt.preventDefault()
                    setAmount(amount > 1 ? amount - 1 : 1)
                }}>
                    &#65293;
                </Button>

                <Button 
                    onClick={evt=>{
                    evt.preventDefault()
                    setAmount(amount + 1)
                }}>
                    &#65291;

                </Button>

                
            </div>

            <input type="time" value={time} name="time" max="50:00" placeholder="time "onChange={evt=>setTime(evt.target.value)}/>
            <Footer>

                {
                    selectedToEdit && 
                    <div 
                    className="deleteButton"
                    onClick={()=>{
                        cleanForm()
                        handleDeleteTask(selectedToEdit.id)
                    }
                    }>Delete</div>
                }
                
                <input type="submit" value="Save"/>
            </Footer>
          </form>
        </Container>
    )
}