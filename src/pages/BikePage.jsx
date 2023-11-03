import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { WorkoutContext } from '../context/TimeContext';
import bike from '../ass-ets/kisspng-cycling-bicycle-computer-icons-mountain-biking-cycle-sport-centre-5b192e8044dff0.2187165515283769602821.png';
import "./BikePage.scss"

function BikePage(){

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
    <img src={bike} className="biker"></img>
    <div className='biketitle'>Biking Workout Settings</div>
    <br></br>
    <br></br>
    <div className='distancetitle'>Distance</div>
    <div className='distancedescription'>Enter the distance you want to bike (miles)</div>
    <form id="distanceform" className="bikedistancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <div className='pacetitle'>Pace</div>
    <div className='pacedescription'>Enter the pace that you want to bike at (miles per hour)</div>
    <form id="paceform" className="bikepacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <Button variant = "secondary" className="submitbike"> Submit</Button>
    
    </div>)

}

export default BikePage;