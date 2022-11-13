import { useEffect, useRef, useState } from "react"
import { Button } from "../button"
import { ProgressCircle } from "../progressCircle"
import { TaskNav } from "../taskNav"
import { Timer } from "./timer/index"
import {ReactComponent as PauseIcon} from "../../assets/pause.svg"
import {ReactComponent as PlayIcon} from "../../assets/play.svg"
import { Itask } from "../types/task"

interface task{
    taskDone:Function,
    selectedTask:Itask | undefined
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
    const [initialTimer, setInitialTimer] = useState(0)
    useEffect(()=>{
        
        if(selectedTask?.time && taskType === "Pomodoro"){
            setCurTime(convertToSeconds(selectedTask.time))
            setInitialTimer(getInitialTimer(taskType, selectedTask))

        }
        setIsPaused(true)
    },[selectedTask])
    
    useEffect(()=>{
        if(isPaused){
            clearTimeout(timerDecreasing.current)

        }
    },[isPaused])

    function start(time:number){   
        setIsPaused(false)

        function decrease(time:number){

            setCurTime(time)
            
            if(time === 0){
                if(taskType === "Pomodoro"){
                    
                    taskDone(selectedTask?.id)
                }
                setIsPaused(true)
                return
            }
            
            
            timerDecreasing.current = window.setTimeout(()=>{
                
            decrease(time - 1)
            },1000)
        }
        decrease(time)
    }

    function getInitialTimer(taskType:string, selectedTask:Itask | undefined){

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
        setInitialTimer(getInitialTimer(taskType, selectedTask))
        setIsPaused(true)
    },[taskType])
    

    return(
            <div>
               <TaskNav setTaskType={setTaskType} taskType={taskType}/>
                <ProgressCircle progress={100 - (curTime / initialTimer) * 100}>
                    <Timer time={curTime}/>
                </ProgressCircle>

                    
                {isPaused?
                    <Button clicked={()=>{start(curTime)}}>
                        <PlayIcon/>
                        Start</Button>:
                    <Button clicked={()=>setIsPaused(true)}>
                        <PauseIcon/>
                        Pause</Button>
                
                }
            </div>
    )
}