import React, {useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';

import run from '../ass-ets/running-icon-on-transparent-background-hi.png';
import "./RunPage.scss"

function RunPage(){

    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime}= useContext(TimeContext); 
    
    let workouts = ["Running","Biking","Lifting"]

    const [distance,setDistance]=useState(null);
    const [pace,setPace]=useState(null);
    
    function setStuff(){
        setUser({
            ...current_user,
            workout_goal_set: "Distance",
            workout_set: "Running",
            active_workouts: {"Running":{"current":0,"goal":distance}},
            active_workout_goals: {"Running":{"current":0,"goal":pace}},
            workout_pace:{
                ...current_user["workout_pace"],["Running"]:{
                  ...current_user["workout_pace"]["Running"],[current_time]:{
                    "goal": pace, "avg_reached" : 0, "all_paces":[]
                  }
  
                  }
  
              }
        })
        localStorage.setItem("user",JSON.stringify(current_user))
       
        }


    return (<div className = "all-items">
    <img src={run} className="run"></img>
    <div className='runtitle'>Running Workout Settings</div>
    <br></br>
    <br></br>
    <div className='distancetitle'>Distance</div>
    <div className='distancedescription'>Enter the distance you want to run (miles)</div>
    <form id="distanceform" className="rundistancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setDistance(e.target.value)}/>  <br />
    </form>
    <div className='pacetitle'>Pace</div>
    <div className='pacedescription'>Enter the pace that you want to run at (miles per hour)</div>
    <form id="paceform" className="runpacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setPace(e.target.value)} />  <br />
    </form>
    <Button variant = "secondary" className="submitrun" onClick = {setStuff}> Submit</Button>
    
    </div>)

}

export default RunPage;
