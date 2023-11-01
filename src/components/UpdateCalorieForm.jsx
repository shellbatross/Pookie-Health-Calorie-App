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

function UpdateCalorieForm(){
    //Some of the most scuffed code i've done in a frontend lmao
    /*
                            ╱|、
                          (˚ˎ 。7  ~~~ Meow ~~
                           |、˜〵          -Steph
                          じしˍ,)ノ


    */
    const {current_user,setUser}= useContext(UserContext)
    const {getForm, setGetForm}=useContext(FormContext)
    const [input1,setInput1] = useState("")
    const [input2,setInput2] = useState("")

    function handleChange1(event){
        setInput1(event.target.value);
    }

    function UpdateStuff(){
        setGetForm("");
        
    }
    return(
        <div>
        
    <Form className = "full-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style = {{fontFamily: "Noto Sans TC"}}>Calories ingested</Form.Label>
        <Form.Control type="number" rows={1}placeholder="300 calories" onChange={handleChange1}/>
        <Button input type = "button" variant = "warning" style={{display: "inline" }} className = "submitbutton" onClick = {UpdateStuff}>Submit</Button>
      </Form.Group>
    </Form>
    </div>
    )

}

export default UpdateCalorieForm;