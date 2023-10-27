import React from "react";
import { useState,useContext,useEffect } from "react";
import "./UpdateForm.scss"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {UserContext} from "../context/UserContext";
import { TimeContext } from "../context/TimeContext";

function UpdateForm(){
    const {current_user,setUser}= useContext(UserContext)
    const {current_time,setTime}= useContext(TimeContext)
    const [input1,setInput1] = useState("")
    const [input2,setInput2] = useState("")
    useEffect(() => {
        //Runs only on the first render
        if(current_user["workout_set"]!=""){
        let workout_progress_key = current_user["active_workouts"][[current_user["workout_set"]]]
    console.log(workout_progress_key)
if(workout_progress_key["current"]>=workout_progress_key["limit"]){
    console.log("aaa")  
    //ohmyfuckinggodsettingstateslikethishasmemaldingiwannadieiwantbackend
    //ok then i need to make the current workout empty, and workout_set empty
    let workout_ring_key = String(current_time)
    console.log(workout_ring_key)
    setUser({...current_user, rings:{
        ...current_user["rings"],[workout_ring_key]:{
            ...current_user["rings"][workout_ring_key],workout:
                parseInt(current_user["rings"][current_time]["workout"])+parseInt("1")
        } 
    },workout_set: "",workout_goal_set:"" })
   console.log("not here")

}}
      }, [current_user]);

    function handleChange1(event){
        setInput1(event.target.value);
    }
    function handleChange2(event){
        setInput2(event.target.value);
    }

    function UpdateStuff(){
        
        let key = String(current_user["workout_set"])
        setUser({...current_user, active_workouts:{
            ...current_user["active_workouts"],[key]:{
            ...current_user["active_workouts"][key], current: parseInt(current_user["active_workouts"][key]["current"])+parseInt(input1)
            }
        }
        //check if after update if any rings are closed and then reset those rings
    })
    

        

    console.log(current_user)
    }

    return(
    <Form className = "full-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style = {{fontFamily: "Noto Sans TC"}}>Run Distance</Form.Label>
        <Form.Control type="email" rows={1}placeholder="10 miles" onChange={handleChange1}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style = {{fontFamily: "Noto Sans TC"}}>Run Duration</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder ="01:30 hours:minutes" onChange = {handleChange2}/>
        <Button variant = "warning" style={{display: "inline" }} className = "submitbutton" onClick = {UpdateStuff}>Submit</Button>

      </Form.Group>
    </Form>
    )
}

export default UpdateForm;