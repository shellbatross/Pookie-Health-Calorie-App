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
<<<<<<< HEAD
    localStorage.setItem("user",JSON.stringify(current_user))
=======
    
>>>>>>> 18fa8fca13b38f3f5375df80d7f8cca4802b26dc
    return(
        <div>
        
    <Form className = "full-form" style={{marginLeft: 'auto', marginRight: 'auto', paddingLeft: '-555px', paddingRight: '-120px', paddingBottom: '280px'}}>
      <img src = {redx} className= "red-x"  onClick={()=>{setGetForm("")}}></img>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{paddingLeft: '1000px'}}>
      <div className="container">
        <div className="row">
          <div className="col">
           <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize:'115px', marginLeft: '-650px'}}>Caloric Intake</Form.Label>
          </div>
          <div className="col">
<<<<<<< HEAD
           <Form.Control type="number" rows={1}placeholder="300" onInput = {e=>setCalories(e.target.value)} style={{ marginLeft: '105px', border: '3px solid purple' }}/>
=======
           <Form.Control type="number" rows={1}placeholder="300" onChange={handleChange1} style={{ marginRight: '555px', border: '3px solid purple', marginLeft: '-430px', borderRadius: '3px'}}/>
>>>>>>> 18fa8fca13b38f3f5375df80d7f8cca4802b26dc
          </div>
        </div>
        </div>
      </Form.Group>
      <Button input type = "button" variant = "warning" style={{marginLeft: '455px', borderRadius: '23px'}} className = "submitbutton" onClick = {UpdateStuff}>Submit</Button>
    </Form>
    </div>
   
    )

}

export default UpdateCalorieForm;