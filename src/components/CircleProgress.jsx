import React from "react";
import "./CircleProgress.scss";
import { useState,useContext } from "react";
import { UserContext } from "../context/UserContext";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CircleProgress(props){


let x = props.props.info
let circle_label = x[0]
let circle_starter = x[1]
console.log(circle_label)
let workout_final_val = 0
let calorie_final = 0
let workout_goal_final = 0
if(x[2]["workout_set"] != ""){
let curr_workout = x[2]["workout_set"]
let workout_start_val = x[2]["active_workouts"][curr_workout]["current"]
let workout_end_val =x[2]["active_workouts"][curr_workout]["goal"]
workout_final_val = Math.floor(workout_start_val/workout_end_val*100)
let curr_workout_goal = x[2]["active_workout_goals"][curr_workout]
let start_workout_goal = curr_workout_goal["current"]
let end_workout_goal = curr_workout_goal["goal"]
console.log(start_workout_goal,end_workout_goal)
workout_goal_final = Math.floor(end_workout_goal/start_workout_goal*100)

}

let curr_calorie = x[2]["calories"]
let start_calories = curr_calorie["current"]
let end_calories = curr_calorie["goal"]
calorie_final = Math.floor(start_calories/end_calories*100)


const rootStyle = document.querySelector(':root').style;
    rootStyle.setProperty('--workoutval', workout_final_val);
    rootStyle.setProperty('--calorieval', calorie_final);
    rootStyle.setProperty('--workoutgoalval', workout_goal_final);

const tmp = circle_label.split(/(\s+)/);
let info = <></>


return(
    <div class="progress-bar-container">
   <h2>
    {circle_label}
  </h2>
  <div class={circle_starter}>
    <progress id={circle_label} min="0" max="100" value="92"></progress>
  </div>
</div>

)
}
export default CircleProgress;