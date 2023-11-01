import React from "react";
import {useState,useContext} from "react";
import {UserContext} from "../context/UserContext";
import {TimeContext} from "../context/TimeContext";
import {FormContext} from "../context/FormContext";
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
import UpdateCalorieForm from "../components/UpdateCalorieForm";
import SetWorkOutPopUp from "../components/SetWorkOutPopUp";
import Confetti from "react-confetti";
import messages from "../ass-ets/PookieMessages";
function StaticHomePage(){
    //Just making it semi useable for later, hardcoded values for rings but after that you can just pass in what to print in the rings
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime} = useContext(TimeContext);
    const {getForm,setGetForm}= useContext(FormContext);

    const day = current_time
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
    return(

        
        <div className="whole-site">
             
        <Confetti classname = "confetti" numberOfPieces={1000} gravity = {10} ></Confetti>
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
        <div className = "leftCircle">
        <h2>{current_user["active_workouts"] === ""? "":current_user["active_workouts"][current_user["workout_set"]]["current"]+ " / "+ 
        current_user["active_workouts"][current_user["workout_set"]]["goal"]}</h2>
        <CircleProgress className = "workoutInfoCircle" props = {{"info":["Workout: "+current_user["workout_set"],"progress-bar-circle workout",current_user]}}></CircleProgress>
        </div>
        <div className = "middleCircle">
        <h2>{current_user["calories"] === ""? "":current_user["calories"]["current"] + " / "+ current_user["calories"]["goal"]}</h2>
        <CircleProgress className = "caloriesBurnedCircle" props = {{"info":["Calories","progress-bar-circle-center dailygoal",current_user]}}></CircleProgress>   
        </div>
        
        <div className = "rightCircle">
        <h2>{typeof(current_user["workout_pace"][current_user["workout_set"]]) === 'undefined' ? "":
        current_user["workout_pace"][current_user["workout_set"]][day]["avg_reached"]+ " / "+ 
        current_user["workout_pace"][current_user["workout_set"]][day]["goal"]}</h2>
        <CircleProgress className = "workoutGoalCircle" props = {{"info":["Pace:  "+current_user["workout_goal_set"],"progress-bar-circle workoutgoal",current_user]}} ></CircleProgress>
        </div>
        </div>
        </div>
        <div className = "pookie-inline-wrapper">
        <img src = {pookie} className = "pookie"></img>
        
        <pookie-box>{messages['motivate'][0]}</pookie-box>
        
        </div>  
      
    <div className = "bottom-stuff" >
      {getForm === ""?  <div className = "choice-buttons" style ={{display:"flex"}}>
        <Button variant="primary" className = "track-workout-button" onClick ={()=>{setGetForm("workout")}}>Track workout
      </Button>
      <Button variant="secondary" className = "track-calories-button"onClick ={()=>{setGetForm("calories")}}>Track calories</Button>
      </div>: getForm =="workout" ? <div className = "form-wrapper">
      <UpdateForm></UpdateForm>
        </div>
        :
        <div className = "form-wrapper"><UpdateCalorieForm></UpdateCalorieForm></div>}       
        
        </div>
        <EndDayButton></EndDayButton>
        </div>
        
        
    )
}

export default StaticHomePage;