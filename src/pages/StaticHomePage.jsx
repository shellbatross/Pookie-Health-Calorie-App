import React from "react";
import {useState,useContext,useEffect} from "react";
import {ConfettiContext} from "../context/ConfettiContext";
import {UserContext} from "../context/UserContext";
import {TimeContext} from "../context/TimeContext";
import {FormContext} from "../context/FormContext";
import EndDayButton from "../components/EndDayButton";
import CircleProgress from "../components/CircleProgress";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Button from 'react-bootstrap/Button';
import "./StaticHomePage.scss"
import pookie from "../ass-ets/pookie_level2.png";
import { go_up_down_map } from "../ass-ets/WorkoutConstants";
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
    const {confetti,setConfetti}=useContext(ConfettiContext);
    const {current_time,setTime} = useContext(TimeContext);
    const {getForm,setGetForm}= useContext(FormContext);
    const workout_ring_key = String(current_time)
    const day = current_time
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
    console.log(current_time)
    
    function fireConfetti(){
      setConfetti("true")
      setTimeout(() => {
       setConfetti("False")
    }, 10000);
    }

    useEffect(() => {
      if(current_user["workout_set"]!=""){
      console.log("meow")
      const workout_set = current_user["workout_set"]
      const active_workout_sub_obj = current_user["active_workouts"][workout_set]
      const active_workout_goal_sub_obj = current_user["active_workout_goals"][workout_set]
      const ring_obj = current_user["rings"][workout_ring_key]
      const goal_expression = String(active_workout_goal_sub_obj["current"]) 
      + go_up_down_map[workout_set]+ String(active_workout_goal_sub_obj["goal"])
      console.log(goal_expression)

      //If they closed the workout ring
      console.log(active_workout_sub_obj["current"])
      console.log(active_workout_sub_obj["goal"])
      //Close pace ring
      if (String(active_workout_goal_sub_obj["current"])!== "good luck!" && eval(goal_expression)){
        fireConfetti();
        //Close workout too 
        if (active_workout_sub_obj["current"] >= active_workout_sub_obj["goal"]){
          setUser({...current_user,
            //Update rings closed 
            rings:{
            ...current_user["rings"],[workout_ring_key]:{
              "workout":ring_obj["workout"]+1, 
              "calories":ring_obj["calories"], 
              "workout_goal":ring_obj["workout_goal"]+1 }},
            //Also reset stuff
            active_workout_goals:"",active_workouts:"",workout_set:""
          })
        }
        //else they closed just the workout pace goal whatever you all wanna call it
        else{
          setUser({...current_user,
            //Update rings closed 
            rings:{
            ...current_user["rings"],[workout_ring_key]:{
              "workout":ring_obj["workout"], 
              "calories":ring_obj["calories"], 
              "workout_goal":ring_obj["workout_goal"]+1}},
            //Also reset stuff
            active_workout_goals: {
            ...current_user["active_workout_goals"],[current_user["workout_set"]]:{
              "current":"Reached","goal":"Reached"
            }}
          })

        }


      }

      if (active_workout_sub_obj["current"] >= active_workout_sub_obj["goal"]){
        fireConfetti();

        //They might also have closed the workout goal ring or not, I have to set whole obj at once if they did aaa
        setUser({...current_user,
          //Update rings closed 
          rings:{
          ...current_user["rings"],[workout_ring_key]:{
            "workout":ring_obj["workout"]+1, 
            "calories":ring_obj["calories"], 
            "workout_goal":ring_obj["workout_goal"]}},
          //Also reset stuff
          active_workout_goals:"",active_workouts:"",workout_set:""
        })

      }
    }
    //regardless set to local storage and close the form
    localStorage.setItem("user",JSON.stringify(current_user))
    }, [current_user]); 

    // TODO: logic for confetti PLS ok confetti is now for 2 seconds if u close a ring only- steph ∠( ᐛ 」∠)＿
    // TODO: cursor: pointer for other clickable thingies ok what things - steph _(:τ」∠)_
    // TODO: labels for any button, undos for any action  -what labels, i thought i did undos before? _(:τ」∠)_
    return(

        
        <div className="whole-site">
             
        {confetti === "true" ? <Confetti classname = "confetti" numberOfPieces={1000} width = {window.innerWidth} ></Confetti>: <></>}
        <br/>
        
        <br/>
        <div className = "button-circle-wrapper">
        <div className = "main-buttons">
        <Link to = "/goals"><Button variant = "primary" style={{display: "inline", borderRadius: '20px'}} className ="goalsbutton" >Goals🏅</Button></Link>
        <Link to = "/setworkout"><Button variant = "secondary" style={{display: "inline", borderRadius: '20px'}} className = "caloriesbutton">Workout🏃‍♀️</Button></Link>
        <Link to ="/userinfo"><Button variant = "info" style={{display: "inline", borderRadius: '20px'}} className = "workoutgoalsbutton">User Info📁</Button></Link>
        </div>
        <PookieExp></PookieExp>
        <div className="circles">
        <div className = "leftCircle">
        <h2 style={{fontSize: '70px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>{current_user["active_workouts"] === ""? "":current_user["active_workouts"][current_user["workout_set"]]["current"]+ " / "+ 
        current_user["active_workouts"][current_user["workout_set"]]["goal"]}</h2>
        <CircleProgress className = "workoutInfoCircle" props = {{"info":["Workout: "+current_user["workout_set"],"progress-bar-circle workout",current_user]}}></CircleProgress>
        </div>
        <div className = "middleCircle">
        <h2 style={{fontSize: '70px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>{current_user["calories"] === ""? "":current_user["calories"]["current"] + " / "+ current_user["calories"]["goal"]}</h2>
        <CircleProgress className = "caloriesBurnedCircle" props = {{"info":["Calories","progress-bar-circle-center dailygoal",current_user]}}></CircleProgress>   
        </div>
        
        <div className = "rightCircle">
        <h2 style={{fontSize: '70px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>{typeof(current_user["workout_pace"][current_user["workout_set"]]) === 'undefined' ? "":
        current_user["workout_pace"][current_user["workout_set"]][day]["avg_reached"]+ " / "+ 
        current_user["workout_pace"][current_user["workout_set"]][day]["goal"]}</h2>
        <CircleProgress className = "workoutGoalCircle" props = {{"info":["Pace:  "+current_user["workout_goal_set"],"progress-bar-circle workoutgoal",current_user]}} ></CircleProgress>
        </div>
        </div>
        </div>
        <div className = "pookie-inline-wrapper">
        <img src = {pookie} className = "pookie"></img>
        
        <pookie-box style={{borderRadius: '60px'}}>{messages['motivate'][0]}</pookie-box>
        
        </div>  
      
    <div className = "bottom-stuff" style ={{display:"flex", justifyContent: 'space-between'}}>
      {getForm === ""?  <div className = "choice-buttons" style={{ display: 'flex', gap: '250px', marginLeft: '-500px'}}>
        <Button variant="primary" className = "track-workout-button" style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', flex: 1, marginRight: '20px', paddingLeft: '100px', paddingRight: '100px', borderRadius: '30px'}} onClick ={()=>{setGetForm("workout")}}>Track workout
      </Button>
      <Button variant="secondary" className = "track-calories-button" style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', flex: 1, paddingLeft: '100px', paddingRight: '100px', borderRadius: '30px'}} onClick ={()=>{setGetForm("calories")}}>Track calories</Button>
      </div>: getForm =="workout" ? 
        <div className = "form-wrapper">
          <UpdateForm></UpdateForm>
        </div>
        :
        <div className = "form-wrapper">
          <UpdateCalorieForm></UpdateCalorieForm>
        </div>} 
        
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <EndDayButton ></EndDayButton>
        </div>
        
        
    )
}

export default StaticHomePage;