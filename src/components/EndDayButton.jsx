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
        const new_day = arr_info.join("/")
        setTime(new_day)
        //save calories and reset shit, actually no matter what make a ring placeholderif (workout_ring_key in current_user["rings"] === false){
        setUser({...current_user,
            rings:{
                ...current_user["rings"],[new_day]:{"workout":0, "calories":0, "workout_goal":0}},
            calories_per_day: {
                ...current_user["calories_per_day"],[time]:{
                    "intake":current_user["calories"]["current"]
                }
            },
            calories: {"current":0,"goal":current_user["BMR"]},
            workout_goal_set:"",
            workout_set: "",
            active_workouts: "",
            active_workout_goals:""})


            localStorage.setItem("time",JSON.stringify(new_day))
    }
    
    return(
      <div className = "whole-progress-bar">
        <Button variant="primary" className="end-day-button" onClick={handleChange} style={{marginLeft: '160px', fontSize: '80px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)'}}><b>End Day</b></Button>{' '}
    </div>
    )
}

export default EndDayButton;