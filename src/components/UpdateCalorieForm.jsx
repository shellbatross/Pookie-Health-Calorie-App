import React from "react";
import { useState,useContext,useEffect } from "react";
import "./UpdateCalorieForm.scss"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
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

      const [validated, setValidated] = useState(false);
      // Hook to store the result of the validation
      const [validity, setValidity] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.currentTarget;
        // Persist the result of the validation
        setValidity(form.checkValidity());
        setValidated(true);
      };


    localStorage.setItem("user",JSON.stringify(current_user))
    return(
        <div>
        
        {/* https://stackoverflow.com/questions/68012748/react-bootstrap-invalid-form-feedback-is-always-visible-how-to-test */}
    <Form noValidate
          validated={validated}
          onSubmit={handleSubmit} 
          className = "full-form" style={{marginLeft: '1400px', display: 'flex', alignItems: 'center' }}>

    {/* <InputGroup className="my-2"> */}
            
      <img src = {redx} className= "red-x"  onClick={()=>{setGetForm("")}}></img>
      <Form.Group className="mb-3" controlId="calories-input1">
      <div className="container">
        <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="col">
           <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize:'115px', marginLeft: '-900px'}}>Caloric Intake</Form.Label>
          </div>
          <div className="col">
           <Form.Control required 
            type="number" rows={1}placeholder="300" onInput = {e=>setCalories(e.target.value)} style={{ marginLeft: '-390px', border: '3px solid purple'}}/>

          <Form.Control.Feedback
              className="font-weight-bold"
              type="invalid"
              role="alert"
              data-validity={validity}
            >
              Input required
            </Form.Control.Feedback>

          </div>
        </div>
        </div>
      </Form.Group>
      {/* </InputGroup> */}
      <Button role="button" input type = "submit" variant = "warning" style={{display: "inline", marginLeft: '-900px'}} className = "submitbutton" onClick = {UpdateStuff}>Submit</Button>
    </Form>
    </div>

   
    )

}

export default UpdateCalorieForm;