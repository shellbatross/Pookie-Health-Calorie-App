import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { WorkoutContext } from '../context/TimeContext';
import lift from '../ass-ets/clipart1105277.png';
import "./LiftPage.scss"

function LiftPage(){

    const {current_user,setUser}= useContext(UserContext); 
    
    let workouts = ["Running","Biking","Lifting"]

    function setNew(val){
        console.log("meow")
        workouts = ["Running","Biking","Lifting"]
        if(workouts.includes(val)){
        setUser({...current_user, workout_set:val})
        }
        else{
        setUser({...current_user, workout_goal_set:val})
        }

    }

    return (<div className = "all-items">
    <img src={lift} className="lifter"></img>
    <div className='lifttitle'>Lifting Workout Settings</div>
    <div className='repstitle'>Reps</div>
    <div className='repsdescription'>Enter the amount of reps</div>
    <form id="distanceform" className="distancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <div className='weighttitle'>Weight</div>
    <div className='weightdescription'>Enter the weight that you want to lift (Pounds)</div>
    <form id="paceform" className="pacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <Button variant = "secondary" className="submitlift"> Submit</Button>
    
    </div>)

}

export default LiftPage;