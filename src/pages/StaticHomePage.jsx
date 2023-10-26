import React from "react";
import {useState,useContext} from "react";
import {UserContext} from "../context/UserContext";
import { WorkoutContext } from '../context/WorkoutContext';
import CircleProgress from "../components/CircleProgress";
import Button from 'react-bootstrap/Button';
import "./StaticHomePage.scss"
import pookie from "../ass-ets/pookie_level2.png";
import speechbubble from "../ass-ets/speechbubble.png";
import PookieExp from "../components/PookieExp";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import SetWorkOutPopUp from "../components/SetWorkOutPopUp";
function StaticHomePage(){
    //Just making it semi useable for later, hardcoded values for rings but after that you can just pass in what to print in the rings
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const {current_workout,setWorkout} = useContext(WorkoutContext);
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
    console.log(current_workout)
    return(

        <div className="whole-site">
        <br/>
        
        <br/>
        <div className = "button-circle-wrapper">
        <div className = "main-buttons">
        <Link to = "/goals"><Button variant = "primary" style={{display: "inline"}} className ="goalsbutton" >Goals🏅</Button></Link>
        <Link to = "/setworkout"><Button variant = "secondary" style={{display: "inline"}} className = "caloriesbutton">Workout🏃‍♀️</Button></Link>
        <Link to ="/userinfo"><Button variant = "info" style={{display: "inline"}} className = "workoutgoalsbutton">User Info📁</Button></Link>
        </div>
        <PookieExp></PookieExp>
        <div className="circles">
        <CircleProgress className = "workoutInfoCircle" props = {{"info":["Workout: "+current_user["workout_set"],"progress-bar-circle workout"]}}></CircleProgress>
        <div className = "middleCircle">
        <CircleProgress className = "caloriesBurnedCircle" props = {{"info":["Calories Burned","progress-bar-circle-center dailygoal"]}}></CircleProgress>
        </div>
        <CircleProgress className = "workoutGoalCircle" props = {{"info":["Workout Goal:  "+current_user["workout_goal_set"],"progress-bar-circle workoutgoal"]}} ></CircleProgress>
        </div>
        </div>
        <div className = "pookie-inline-wrapper">
        <img src = {pookie} className = "pookie"></img>
        <img src = {speechbubble} className = "speechbubble"></img>
        
    </div>
    <div className = "form-wrapper">
        <Form className = "full-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style = {{fontFamily: "Noto Sans TC"}}>Run Distance</Form.Label>
        <Form.Control type="email" rows={1}placeholder="10 miles" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style = {{fontFamily: "Noto Sans TC"}}>Run Duration</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder ="01:30 hours:minutes"/>
        <Button variant = "warning" style={{display: "inline" }} className = "submitbutton">Submit</Button>

      </Form.Group>
    </Form>
    </div>
        </div>
        
    )
}

export default StaticHomePage;