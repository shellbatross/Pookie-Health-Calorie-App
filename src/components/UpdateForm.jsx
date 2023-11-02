import React from "react";
import { useState,useContext,useEffect } from "react";
import "./UpdateForm.scss"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import {UserContext} from "../context/UserContext";
import { TimeContext } from "../context/TimeContext";
import { FormContext } from "../context/FormContext";
import { go_up_down_map } from "../ass-ets/WorkoutConstants";
import redx from "../ass-ets/redx.png"

function UpdateForm(){
    //Some of the most scuffed code i've done in a frontend lmao
    /*
                            ╱|、
                          (˚ˎ 。7  ~~~ Meow ~~
                           |、˜〵          -Steph
                          じしˍ,)ノ


    */
    const {current_user,setUser}= useContext(UserContext)
    const {getForm,setGetForm}=useContext(FormContext)
    const {current_time,setTime}= useContext(TimeContext)
    const [input1,setInput1] = useState("")
    const [input2,setInput2] = useState("")
    const [needError, setNeedError]=useState("false")
    const workout_ring_key = String(current_time)
    console.log(console.log(getForm))
    let error_modal = <></>
    useEffect(() => {
        if(current_user["workout_set"]!=""){
        const workout_set = current_user["workout_set"]
        const active_workout_sub_obj = current_user["active_workouts"][workout_set]
        const active_workout_goal_sub_obj = current_user["active_workout_goals"][workout_set]
        const goal_expression = String(active_workout_goal_sub_obj["current"]) + go_up_down_map[workout_set]+ String(active_workout_goal_sub_obj["goal"])
        const ring_obj = current_user["rings"][workout_ring_key]
        //If they closed the workout ring
        if (active_workout_sub_obj["current"] >= active_workout_sub_obj["goal"]){
          //They might also have closed the workout goal ring or not, I have to set whole obj at once if they did aaa
          if (eval(goal_expression)){
            console.log("hiss")
            setUser({...current_user,
              //Update rings closed 
              rings:{
              ...current_user["rings"],[workout_ring_key]:{
                "workout":ring_obj["workout"]+1, 
                "calories":ring_obj["calories"], 
                "workout_goal":ring_obj["workout_goal"]+1}},
              //Also reset stuff
              active_workout_goals:"",active_workouts:"",workout_set:""
            })
            
          
          }
          console.log("hass")
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

    function handleChange1(event){
        setInput1(event.target.value);
    }
    function handleChange2(event){
        setInput2(event.target.value);
    }

    function UpdateStuff(){
        //Check if any workout has been set at all, if theres nothing then give a warning
        if (current_user["workout_set"]===""){
          console.log("work on warning bitch")
          return
        }
        //Might be a new day, check if we need somewhere to store info 
        
        let key = String(current_user["workout_set"])
        console.log(workout_ring_key in current_user["rings"]);
        //This looks god awful, but if its first time in the day i need to make a set of space for new info on this brand
        //new god awful wretched beautiful day
        if (workout_ring_key in current_user["rings"] === false){
          console.log("hereee")
          setUser({...current_user,
            //Set space for a new ring at the date
            rings:{
            ...current_user["rings"],[workout_ring_key]:{"workout":0, "calories":0, "workout_goal":0}},
            //Go update the new values of the current workout
            active_workouts:{
              ...current_user["active_workouts"],[key]:{
              ...current_user["active_workouts"][key], current: parseInt(current_user["active_workouts"][key]["current"])+parseInt(input1)}},
              //Go all the way inside pace, workout, and make a date for the new info of this workout
              workout_pace:{
                ...current_user["workout_pace"],[key]:{
                ...current_user["workout_pace"][key],[workout_ring_key]:{
                  "goal": current_user["workout_goal_set"], "avg_reached": parseInt(String(input2)),"all_paces":[parseInt(String(input2))]
                }

                }
              }

          })
        }
        else{
          console.log(current_user["workout_pace"][key][workout_ring_key]["avg_reached"])
          //Just update stuff
          setUser({...current_user, 
            //First update current workout progress
            active_workouts:{
            ...current_user["active_workouts"],[key]:{
            ...current_user["active_workouts"][key], current: parseInt(current_user["active_workouts"][key]["current"])+parseInt(String(input1)),
            
            }},
            //Update workout pace average
            workout_pace:{
              ...current_user["workout_pace"],[key]:{
                ...current_user["workout_pace"][key],[workout_ring_key]:{
                "goal": current_user["workout_pace"][key][workout_ring_key]["goal"], 
                "avg_reached":current_user["workout_pace"][key][workout_ring_key]["avg_reached"] +parseInt(String(input2))
                }

                }

            }
            //Went to go get snack
          
          
          
          })

        }
        //Regardless of what happens update localstorage object, and then close the form
        localStorage.setItem("user",JSON.stringify(current_user))
        setGetForm("");
        }


    return(
        <div>
        
    <Form className = "full-form">
      <img src = {redx} className = "red-x" onClick = {()=>{setGetForm("")}}></img>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style = {{fontFamily: "Noto Sans TC"}}>Run Distance</Form.Label>
        <Form.Control type="number" rows={1}placeholder="10 miles" onChange={handleChange1}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style = {{fontFamily: "Noto Sans TC"}}>Run Duration</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder ="01:30 hours:minutes" onChange = {handleChange2}/>
        <Button input type = "button" variant = "warning" style={{display: "inline" }} className = "submitbutton" onClick = {UpdateStuff}>Submit</Button>

      </Form.Group>
    </Form>
    {error_modal}
    </div>
    )

}

export default UpdateForm;