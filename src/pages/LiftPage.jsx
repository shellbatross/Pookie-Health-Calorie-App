import React, {useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import { WorkoutContext } from '../context/TimeContext';
import lift from '../ass-ets/clipart1105277.png';
import "./LiftPage.scss"
import {Link} from "react-router-dom";

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
            active_workouts: {"Lifting":{"current":0,"goal":parseInt(reps)}},
            active_workout_goals: {"Lifting":{"current":"good luck!","goal":parseInt(weight), "all":[]}},
            workout_pace:{
                ...current_user["workout_pace"],["Lifting"]:{
                  ...current_user["workout_pace"]["Lifting"],[current_time]:{
                    "goal": parseInt(weight), "avg_reached" : 0, "all_paces":[]
                  }
  
                  }
  
              }
        })
       
        }
        localStorage.setItem("user",JSON.stringify(current_user))

    return (<div className = "all-items">
    <img src={lift} className="lifter"></img>
    <Link to = "/setworkout"><Button variant = "primary" size="lg" className ="home-btn" style={{fontSize: '90px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)',  borderRadius: '33px', paddingTop: '30px', paddingBottom: '30px', position: 'absolute', marginLeft: '-1500px', marginTop: '-50px', paddingLeft: '35px', paddingRight: '30px'}}>Back</Button></Link>
    <div className='lifttitle' style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginBottom: '50px', borderBottom: '3px solid black', display: 'inline-block' }}>Lifting Workout Settings</div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='repstitle' style={{fontSize: '150px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Reps</div>
    <div className='repsdescription'>Enter the amount of reps</div>
    <form id="distanceform" className="distancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setReps(e.target.value)}/>  <br />
    </form>
    <div className='weighttitle' style={{fontSize: '150px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Weight</div>
    <div className='weightdescription'>Enter the weight that you want to lift (Pounds)</div>
    <form id="paceform" className="pacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setWeight(e.target.value)}/>  <br />
    </form>
    <Link to = "/home"><Button variant = "secondary" className="submitlift" onClick = {setStuff}> Submit</Button></Link>
    
    </div>)

}

export default LiftPage;