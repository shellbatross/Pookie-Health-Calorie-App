import React from "react";
import { useState,useContext } from "react";
import "./UpdateForm.scss"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {UserContext} from "../context/UserContext";

function UpdateForm(){
    const {current_user,setUser}= useContext(UserContext)
    const [input1,setInput1] = useState("")
    const [input2,setInput2] = useState("")

    function handleChange1(event){
        setInput1(event.target.value);
    }
    function handleChange2(event){
        setInput2(event.target.value);
    }

    function updateStuff(){
        let x = current_user["workout_set"]
        setUser({...current_user, [x]:2
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
        <Button variant = "warning" style={{display: "inline" }} className = "submitbutton" onClick = {updateStuff}>Submit</Button>

      </Form.Group>
    </Form>
    )
}

export default UpdateForm;