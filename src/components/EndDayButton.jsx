import React from "react";
import { useState,useContext } from "react";
import Button from 'react-bootstrap/Button';
import { TimeContext } from "../context/TimeContext";
import {UserContext} from "../context/UserContext";
import "./EndDayButton.scss";
function EndDayButton(){
    const {current_time,setTime} = useContext(TimeContext);
    const {current_user,setUser}=useContext(UserContext)

    function handleChange(){
        let time = current_time
        let arr_info = time.split("/")
        for(let i=0; i<arr_info.length;i++){
            arr_info[i] = parseInt(arr_info[i])

        }
        //cases: 30/<12/2023 carry over month, reset to 01
        //30/12/2023 this makes it carry over year, reset to 01/01
        if (arr_info[1] > 30){
            if(arr_info[0]>12){
                arr_info[0]= "01"
                arr_info[1]= "01"
                arr_info[2]= String(arr_info[2]+1)
                setTime(arr_info.join("/"))
            }
            else{
                arr_info[0]=String(arr_info[0]+1)
                arr_info[1]="01"
                arr_info[2]=String(arr_info[2])
                setTime(arr_info.join("/"))
                
            }
            return 
        }
        arr_info[1] = String(arr_info[1]+1)
        arr_info[0]=String(arr_info[0])
        arr_info[2]=String(arr_info[2])
        setTime(arr_info.join("/"))
        
        setUser({...current_user, workout_set:""})
        setUser({...current_user, workout_goal_set:""})

    }
    return(
      <div className = "whole-progress-bar">
        <Button variant="primary" className="end-day-button" onClick={handleChange}><b>End Day</b></Button>{' '}
    </div>
    )
}

export default EndDayButton;