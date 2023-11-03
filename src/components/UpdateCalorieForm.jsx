import React from "react";
import { useState,useContext,useEffect } from "react";
import "./UpdateCalorieForm.scss"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Modal from 'react-bootstrap/Modal';
import {UserContext} from "../context/UserContext";
import { TimeContext } from "../context/TimeContext";
import { FormContext } from "../context/FormContext";
import { go_up_down_map } from "../ass-ets/WorkoutConstants";
import redx from "../ass-ets/redx.png";


function UpdateCalorieForm(){
    //Some of the most scuffed code i've done in a frontend lmao
    /*
                            ╱|、
                          (˚ˎ 。7  ~~~ Meow ~~
                           |、˜〵          -Steph
                          じしˍ,)ノ

    Everyday it doesn't matter, check out of BMR
    you close ring? Cool you got the calories you need in a day close.
    */
    const {current_user,setUser}= useContext(UserContext)
    const {getForm, setGetForm}=useContext(FormContext)
    const [calories,setCalories] = useState(null)


    function UpdateStuff(){
        //No idea if we are checking for errors yet
        
        setUser({...current_user,
          calories: calories === null? current_user["calories"] : {
            "current":current_user["calories"]["current"]+parseInt(calories),
            "goal": current_user["BMR"]
          }
        
        })

        
    }
    localStorage.setItem("user",JSON.stringify(current_user))
    return(
        <div>
        
    <Form className = "full-form">
      <img src = {redx} className= "red-x"  onClick={()=>{setGetForm("")}}></img>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <div className="container">
        <div className="row">
          <div className="col">
           <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize:'115px'}}>Caloric Intake&nbsp;&nbsp;&nbsp;</Form.Label>
          </div>
          <div className="col">
           <Form.Control type="number" rows={1}placeholder="300" onInput = {e=>setCalories(e.target.value)} style={{ marginLeft: '105px', border: '3px solid purple' }}/>
          </div>
        </div>
        </div>
        <Button input type = "button" variant = "warning" style={{display: "inline" }} className = "submitbutton" onClick = {UpdateStuff}>Submit</Button>
      </Form.Group>
    </Form>
    </div>
   
    )

}

export default UpdateCalorieForm;