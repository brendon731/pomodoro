import {useState} from "react"
import {ReactComponent as IncreaseIcon} from "../../assets/caret-up.svg"
import {ReactComponent as DecreaseIcon} from "../../assets/caret-down.svg"
import {ReactComponent as MinusIcon} from "../../assets/minus.svg"
import { Container, Button } from "./styles"
interface prop{
    submitForm:Function
}
export function Form({submitForm} : prop){
    
  const [time, setTime] = useState<string>("00:00")
  const [title, setTitle] = useState<string>("")
  const [amount, setAmount] = useState<number>(1)

    function handleSubmit(evt:any){
        evt.preventDefault()
        const newTask = 
            {
                id:Date.now(),
                title:title,
                time:time,
                isDone:false,
                amount:amount,
                amountDone:0,
                isSelected:false
              }
        submitForm(newTask)
        setAmount(1)
    }
    return(
        <Container onClick={evt=>evt.stopPropagation()}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Task Title" onChange={evt=>setTitle(evt.target.value)}/>
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

            <input type="time" name="time" placeholder="time "onChange={evt=>setTime(evt.target.value)}/>
            <input type="submit" value="Add Task"/>
          </form>
        </Container>
    )
}