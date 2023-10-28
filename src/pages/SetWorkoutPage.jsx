import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { WorkoutContext } from '../context/TimeContext';
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
    <Form.Select aria-label="Default select example" onChange={(event) => setNew(event.target.value)} className='goalbox'>
      <option>Choose your goal here!</option>
      <option value="Duration">Duration</option>
      <option value="Speed">Speed</option>
      <option value="Reps">Reps</option>
      <option value="Distance">Distance</option>
    </Form.Select>
    <div className='personal'>Enter your personal best for your goal</div>
    <div className='personaldescription'>i.e. if you chose duration for your goal, enter your longest duration session</div>
    <form className="personalbox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <div className='goalnumber'>Enter your goal</div>
    <form className="goalnumberbox">
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
    </form>
    <Button variant = "secondary" className="submit"> Submit</Button>
    
    </div>)

}

export default SetWorkoutPage;