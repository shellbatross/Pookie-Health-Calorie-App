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
    <Form.Select aria-label="Default select example" onChange={(event) => setNew(event.target.value)} className='workoutbox'>
      <option>Start setting your workout here!</option>
      <option value="Running">Running</option>
      <option value="Biking">Biking</option>
      <option value="Lifting">Lifting</option>
    </Form.Select>
    <Form.Select aria-label="Default select example" onChange={(event) => setNew(event.target.value)} className='goalbox'>
      <option>Choose your goal!</option>
      <option value="Distance">Distance</option>
      <option value="Speed">Speed</option>
      <option value="Reps">Reps</option>
    </Form.Select>
    <form id="numberform" className="numberbox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <Button variant = "secondary" className="submit"> Submit</Button>
    
    </div>)

}

export default RunPage;
