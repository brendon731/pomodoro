import React from "react";
import { InsideDiv, OutsideDiv } from "./styles";

interface prop{
    children:React.ReactNode,
    progress:number
}
export function ProgressCircle({ children, progress }:prop){
    return(
        <OutsideDiv progress={progress}>
            <InsideDiv>
                {children}
            </InsideDiv>
        </OutsideDiv>
    )
}