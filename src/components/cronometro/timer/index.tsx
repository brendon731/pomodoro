import React from "react"
import { Clock } from "./styles"

interface prop{
    time:number
}
export function Timer({time}:prop){
    let minutes = `${ Math.floor(time / 60)}`.padStart(2, "0")
    let seconds = `${time % 60}`.padStart(2, "0")
    return(
        <Clock>{minutes}:{seconds}</Clock>
   )
}