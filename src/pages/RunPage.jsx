import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { WorkoutContext } from '../context/TimeContext';
import run from '../ass-ets/running-icon-on-transparent-background-hi.png';
import "./RunPage.scss"

function RunPage(){

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
    <img src={run} className="run"></img>
    <div className='runtitle'>Running Workout Settings</div>
    <div className='distancetitle'>Distance</div>
    <div className='distancedescription'>Enter the distance you want to run (miles)</div>
    <form id="distanceform" className="rundistancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <div className='pacetitle'>Pace</div>
    <div className='pacedescription'>Enter the pace that you want to run at (miles per hour)</div>
    <form id="paceform" className="runpacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <Button variant = "secondary" className="submitrun"> Submit</Button>
    
    </div>)

}

export default RunPage;
