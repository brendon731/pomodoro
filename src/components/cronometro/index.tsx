import React, { useEffect, useRef, useState } from "react"
import { Button } from "../button"
import { Container, NavButton } from "./styles"
import { Timer } from "./timer/index"

interface prop{
    taskDone:Function,
    time:string
}
interface task{
    taskDone:Function,
    selectedTask:{
        id:number,
        title:string,
        time:string,
        isDone:boolean,
        amount:number,
        amountDone:number
    } | undefined
  }
function convertToSeconds(time:string){
    let [minutes=0, seconds=0] = time.split(":")
    const minutesToSeconds = Number(minutes) * 60
    return minutesToSeconds + Number(seconds)
}

export function Cronometro({taskDone, selectedTask}:task){
    let timerDecreasing = useRef(0)
    const [taskType, setTaskType] = useState("Pomodoro")
    const [curTime, setCurTime] = useState(0)
    const [isPaused, setIsPaused] = useState(true)
    
    useEffect(()=>{
        
        if(selectedTask?.time && !selectedTask?.isDone){
            setCurTime(convertToSeconds(selectedTask.time))
        }
    },[selectedTask])

    useEffect(()=>{
        clearTimeout(timerDecreasing.current)
        if(isPaused)return

        if(curTime === 0){
            if(taskType === "Pomodoro"){
                taskDone(selectedTask?.id)
            }
            // setCurTime(getInitialTimer(taskType, selectedTask))
            setIsPaused(true)
            return
        }
        timerDecreasing.current = window.setTimeout(()=>{
            function decrease(){
                setCurTime(curTime - 1)
            }
            decrease()
        },1000)
    },[curTime, isPaused])

    function getInitialTimer(taskType:string, selectedTask:any){

        if(taskType === "Short Break"){
            return convertToSeconds("00:05")

        }else if(taskType === "Long Break"){
            return convertToSeconds("15:00")
        }
        return convertToSeconds(
            selectedTask?.isDone?"00:00":selectedTask?.time || "00:00"  
        )
    }

    useEffect(()=>{
        setCurTime(getInitialTimer(taskType, selectedTask))
    },[taskType])
    return(
        <>
            <Container>
                <NavButton     
                current={taskType === "Pomodoro"}      
                onClick={evt=>setTaskType(evt.currentTarget.innerText)}>Pomodoro</NavButton>
                <NavButton
                current={taskType === "Short Break"}            
                onClick={evt=>setTaskType(evt.currentTarget.innerText)}>Short Break</NavButton>
                <NavButton 
                current={taskType === "Long Break"}            
                onClick={evt=>setTaskType(evt.currentTarget.innerText)}>Long Break</NavButton>
                
                <Timer time={curTime}/>
                {isPaused?
                    <Button clicked={()=>setIsPaused(false)}>Start</Button>:
                    <Button clicked={()=>setIsPaused(true)}>Pause</Button>
                
                }
            </Container>
        </>
    )
}