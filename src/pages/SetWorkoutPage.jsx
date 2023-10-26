import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { WorkoutContext } from '../context/TimeContext';
import bike from '../ass-ets/kisspng-cycling-bicycle-computer-icons-mountain-biking-cycle-sport-centre-5b192e8044dff0.2187165515283769602821.png';
import runner from '../ass-ets/running-icon-on-transparent-background-hi.png';
import lift from '../ass-ets/clipart1105277.png';
import "./SetWorkoutPage.scss"

function SetWorkoutPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);  
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
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
    
    return (<div className = "all-items"><img src={bike} className="bike"></img>
    <img src={runner} className="runner"></img>
    <img src={lift} className="lift"></img>
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

export default SetWorkoutPage;