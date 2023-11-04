import React, {useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import bike from '../ass-ets/kisspng-cycling-bicycle-computer-icons-mountain-biking-cycle-sport-centre-5b192e8044dff0.2187165515283769602821.png';
import "./BikePage.scss"
import {Link} from "react-router-dom";

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
            active_workouts: {"Biking":{"current":0,"goal":parseInt(distance)}},
            active_workout_goals: {"Biking":{"current":0,"goal":parseInt(pace)}},
            workout_pace:{  
                ...current_user["workout_pace"],["Biking"]:{
                  ...current_user["workout_pace"]["Biking"],[current_time]:{
                    "goal": parseInt(pace), "avg_reached" : 0, "all_paces":[]
                  }
  
                  }
  
              }
        })
       
        }
        localStorage.setItem("user",JSON.stringify(current_user))

    


    return (<div className = "all-items">
    <img src={bike} className="biker"></img>
    <Link to = "/setworkout"><Button variant = "primary" size="lg" className ="home-btn" style={{fontSize: '90px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)',  borderRadius: '33px', paddingTop: '30px', paddingBottom: '30px', position: 'absolute', marginLeft: '-1320px', marginTop: '-50px', paddingLeft: '35px', paddingRight: '30px'}}>Back</Button></Link>
    <div className='biketitle' style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginBottom: '50px', borderBottom: '3px solid black', display: 'inline-block' }}>Biking Workout Settings</div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='distancetitle' style={{fontSize: '150px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Distance</div>
    <div className='distancedescription'>Enter the distance you want to bike (miles)</div>
    <form id="distanceform" className="bikedistancebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0"onInput={e=>setDistance(e.target.value)} />  <br />
    </form>
    <div className='pacetitle' style={{fontSize: '150px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Pace</div>
    <div className='pacedescription'>Enter the pace that you want to bike at (miles per hour)</div>
    <form id="paceform" className="bikepacebox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setPace(e.target.value)} />  <br />
    </form>
    <Button variant = "secondary" className="submitbike" onClick = {setStuff}> Submit</Button>
    
    </div>)

}

export default BikePage;