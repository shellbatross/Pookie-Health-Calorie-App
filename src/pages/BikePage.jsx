import React, {useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import bike from '../ass-ets/kisspng-cycling-bicycle-computer-icons-mountain-biking-cycle-sport-centre-5b192e8044dff0.2187165515283769602821.png';
import "./BikePage.scss"

function BikePage(){

    const {current_user,setUser}= useContext(UserContext); 
    const {current_time,setTime}=useContext(TimeContext);
    const [distance,setDistance]=useState(null);
    const [pace,setPace]=useState(null);
    
    function setStuff(){
        setUser({
            ...current_user,
            workout_goal_set: "Distance",
            workout_set: "Biking",
            active_workouts: {"Biking":{"current":0,"goal":distance}},
            active_workout_goals: {"Biking":{"current":0,"goal":pace}},
            workout_pace:{
                ...current_user["workout_pace"],["Biking"]:{
                  ...current_user["workout_pace"]["Biking"],[current_time]:{
                    "goal": pace, "avg_reached" : 0, "all_paces":[]
                  }
  
                  }
  
              }
        })
        localStorage.setItem("user",JSON.stringify(current_user))
       
        }

    


    return (<div className = "all-items">
    <img src={bike} className="biker"></img>
    <div className='biketitle'>Biking Workout Settings</div>
    <br></br>
    <br></br>
    <div className='distancetitle'>Distance</div>
    <div className='distancedescription'>Enter the distance you want to bike (miles)</div>
    <form id="distanceform" className="bikedistancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0"onInput={e=>setDistance(e.target.value)} />  <br />
    </form>
    <div className='pacetitle'>Pace</div>
    <div className='pacedescription'>Enter the pace that you want to bike at (miles per hour)</div>
    <form id="paceform" className="bikepacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setPace(e.target.value)} />  <br />
    </form>
    <Button variant = "secondary" className="submitbike" onClick = {setStuff}> Submit</Button>
    
    </div>)

}

export default BikePage;