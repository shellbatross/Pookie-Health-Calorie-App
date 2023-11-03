import React, {useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import { WorkoutContext } from '../context/TimeContext';
import lift from '../ass-ets/clipart1105277.png';
import "./LiftPage.scss"

function LiftPage(){

    const {current_user,setUser}= useContext(UserContext); 
    
    const {current_time,setTime}=useContext(TimeContext);
    const [weight,setWeight]=useState(null);
    const [reps,setReps]=useState(null);
    
    function setStuff(){
        setUser({
            ...current_user,
            workout_goal_set: "Reps",
            workout_set: "Lifting",
            active_workouts: {"Lifting":{"current":0,"goal":reps}},
            active_workout_goals: {"Lifting":{"current":0,"goal":weight}},
            workout_pace:{
                ...current_user["workout_pace"],["Lifting"]:{
                  ...current_user["workout_pace"]["Lifting"],[current_time]:{
                    "goal": weight, "avg_reached" : 0, "all_paces":[]
                  }
  
                  }
  
              }
        })
        localStorage.setItem("user",JSON.stringify(current_user))
       
        }

    return (<div className = "all-items">
    <img src={lift} className="lifter"></img>
    <div className='lifttitle'>Lifting Workout Settings</div>
    <div className='repstitle'>Reps</div>
    <div className='repsdescription'>Enter the amount of reps</div>
    <form id="distanceform" className="distancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setReps(e.target.value)}/>  <br />
    </form>
    <div className='weighttitle'>Weight</div>
    <div className='weightdescription'>Enter the weight that you want to lift (Pounds)</div>
    <form id="paceform" className="pacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setWeight(e.target.value)}/>  <br />
    </form>
    <Button variant = "secondary" className="submitlift" onClick = {setStuff}> Submit</Button>
    
    </div>)

}

export default LiftPage;