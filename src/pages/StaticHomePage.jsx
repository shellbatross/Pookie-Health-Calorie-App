import React from "react";
import {useState,useContext} from "react";
import {UserContext} from "../context/UserContext";
import EndDayButton from "../components/EndDayButton";
import CircleProgress from "../components/CircleProgress";
import Button from 'react-bootstrap/Button';
import "./StaticHomePage.scss"
import pookie from "../ass-ets/pookie_level2.png";
import speechbubble from "../ass-ets/speechbubble.png";
import PookieExp from "../components/PookieExp";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import UpdateForm from "../components/UpdateForm";
import SetWorkOutPopUp from "../components/SetWorkOutPopUp";
import Confetti from "react-confetti";
function StaticHomePage(){
    //Just making it semi useable for later, hardcoded values for rings but after that you can just pass in what to print in the rings
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
    return(

        
        <div className="whole-site">
            
        <Confetti></Confetti>
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
        
        <CircleProgress className = "workoutInfoCircle" props = {{"info":["Workout: "+current_user["workout_set"],"progress-bar-circle workout",current_user]}}></CircleProgress>
        <div className = "middleCircle">
        <CircleProgress className = "caloriesBurnedCircle" props = {{"info":["Calories Burned","progress-bar-circle-center dailygoal",current_user]}}></CircleProgress>
        
        </div>
        
        <CircleProgress className = "workoutGoalCircle" props = {{"info":["Workout Goal:  "+current_user["workout_goal_set"],"progress-bar-circle workoutgoal",current_user]}} ></CircleProgress>
        </div>
        </div>
        <div className = "pookie-inline-wrapper">
        <img src = {pookie} className = "pookie"></img>
        <pookie-box>Heeeyyyyyyyyyyyyyyyyyyyyyyyy</pookie-box>
        
        </div>  
    <div className = "form-wrapper">
      <UpdateForm></UpdateForm>
        
   
    </div>
    <EndDayButton></EndDayButton>
        </div>
        
    )
}

export default StaticHomePage;