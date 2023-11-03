import React, {useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext} from '../context/TimeContext';
import bike from '../ass-ets/kisspng-cycling-bicycle-computer-icons-mountain-biking-cycle-sport-centre-5b192e8044dff0.2187165515283769602821.png';
import runner from '../ass-ets/running-icon-on-transparent-background-hi.png';
import lift from '../ass-ets/clipart1105277.png';
import "./SetWorkoutPage.scss"
import {Link} from "react-router-dom";

function SetWorkoutPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const {current_time, setTime} =useContext(TimeContext)
    const [pb,setPersonalBest] = useState(null)
    const [goal,setGoal] = useState(null)
    const [workoutType,setWorkoutType] = useState(null)

    const time_key = current_time
    //Inspect, check console in browser you'll see what I mean
    function setStuff(){
        setUser({
            ...current_user,
            workout_goal_set:   workoutType === null ? current_user["workout_goal_set"]: workoutType,
            workout_set: "Other",
            active_workouts: {"Other":{"current":0,"goal":goal}},
            active_workout_goals: {"Other":{"current":pb,"goal":goal}},
            workout_pace:{
                ...current_user["workout_pace"],["Other"]:{
                  ...current_user["workout_pace"]["Other"],[current_time]:{
                    "goal": goal, "avg_reached" : pb, "all_paces":[]
                  }
  
                  }
  
              }
        })
       
        }

    
    localStorage.setItem("user",JSON.stringify(current_user))
    return (<div className = "all-items">
    <div className='title'>Choose a Workout</div>
    <div className='directions'>Click an Icon or Submit Custom Workout Below</div>
    <div className='images'>
    <Link to = "/bike"><Button variant = "primary" style={{display: "inline"}} className ="runbutton" ><img src={bike} className="bike"></img></Button></Link>
    <Link to = "/run"><Button variant = "primary" style={{display: "inline"}} className ="runbutton" ><img src={runner} className="runner"></img></Button></Link>
    <Link to = "/lift"><Button variant = "primary" style={{display: "inline"}} className ="runbutton" ><img src={lift} className="lift"></img></Button></Link>
    </div>
    <div className='customworkout'>Submit a Custom Workout</div>
    <div className='disclaimer'>Disclaimer: The app does not track calories for custom workouts</div>
    <Form.Select aria-label="Default select example" onChange={e=>setWorkoutType(e.target.value)} className='goalbox'>
      <option>Choose your goal here!</option>
      <option value="Duration">Duration</option>
      <option value="Speed">Speed</option>
      <option value="Reps">Reps</option>
      <option value="Distance">Distance</option>
    </Form.Select>
    <div className='personal'>Enter your personal best for your goal</div>
    <div className='personaldescription'>i.e. if you chose duration for your goal, enter your longest duration session</div>
    <form className="personalbox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setPersonalBest(e.target.value)}/>  <br />
    </form>
    <div className='goalnumber'>Enter your goal</div>
    <form className="goalnumberbox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" onInput={e=>setGoal(e.target.value)}/>  <br />
    </form>
    <Button variant = "secondary" className="submitcustom" onClick = {setStuff}> Submit</Button>
    
    </div>)

    }

export default SetWorkoutPage;