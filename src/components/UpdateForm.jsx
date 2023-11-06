import React from "react";
import { useState,useContext,useEffect } from "react";
// import {setValidated, setValidity} from "./UpdateCalorieForm.jsx";
import "./UpdateForm.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {UserContext} from "../context/UserContext";
import { TimeContext } from "../context/TimeContext";
import { FormContext } from "../context/FormContext";
import { go_up_down_map } from "../ass-ets/WorkoutConstants";
import redx from "../ass-ets/redx.png";

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
    let error_modal = <></>
    console.log(current_user)
    //Bunch of useffects to keep track on each aspect of user,see if ring closes to update and confetti god this is so scuffed

    const [validated, setValidated] = useState(false);
    // Hook to store the result of the validation
    const [validity, setValidity] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log("============= PLEASEEEEEEEEEEEEEEEEEEEEEEE");
      const form = e.currentTarget;

        
      console.log("form : ", form);
      // Persist the result of the validation
      setValidity(form.checkValidity());
      console.log("form validation: ", form.checkValidity());

      setValidated(true);

      UpdateStuff();
    };

    function handleChange1(event){
        setInput1(event.target.value);
    }
    function handleChange2(event){
        setInput2(event.target.value);
    }

    function UpdateStuff(){
        console.log("entered UpdateStuff");
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
              ...current_user["active_workouts"],[key]:{"current": parseInt(input1), "goal": current_user["active_workouts"][key]["goal"]}},
              //Go all the way inside pace, workout, and make a date for the new info of this workout
              workout_pace:{
                ...current_user["workout_pace"],[key]:{
                ...current_user["workout_pace"][key],[workout_ring_key]:{
                  "goal": current_user["active_workout_goals"][current_user["workout_set"]]["goal"], 
                  "avg_reached": parseInt(String(input2)),"all_paces":[parseInt(String(input2))]
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
        //Close the form
        setGetForm("");
        }
        

    return(
        <div>
        
    <Form noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className = "full-form">

      <img src = {redx} className = "red-x" onClick = {()=>{setGetForm("")}}></img>
  
      <Form.Group className="mb-3" style={{marginLeft:'500px', paddingLeft: '1000px'}}>
        <div className="container">
        <div className="row">
        <div className="col">
        <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginLeft: '-1040px', textAlign: 'left'}}>Run Distance&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
        </div>
        <div className="col">
        <Form.Control required type="number" className="homepage-input" rows={1} placeholder="10" 
        // onChange={handleChange1} 
        onInput={e=>setInput1(e.target.value)}
        style={{ marginLeft: '-700px', marginRight: '0px', border: '3px solid purple', paddingLeft: '20px'}}/>

        <Form.Control.Feedback 
          style={{ marginLeft: '-120px'}}
              className="font-weight-bold"
              type="invalid"
              role="alert"
              data-validity={validity}
            >
              Required
            </Form.Control.Feedback>

        </div>
        </div>
        </div>
      </Form.Group>
      
      <Form.Group className="mb-3" style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <div className="container">
        <div className="row">
        <div className="col">
        <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',  marginLeft: '-10px', textAlign: 'left'}}>Run Duration</Form.Label>
        </div>
        <div className="col">
        <Form.Control required as="textarea" className="homepage-input" rows={1} placeholder ="01:30 hours:minutes" 
        // onChange = {handleChange2} 
        onInput={e=>setInput2(e.target.value)}
        style={{ marginLeft: '55px', border: '3px solid purple', paddingLeft: '20px', paddingRight: '70px'}}/>
        
        <Form.Control.Feedback 
          style={{ marginLeft: '-120px'}}
              className="font-weight-bold"
              type="invalid"
              role="alert"
              data-validity={validity}
            >
              Required
            </Form.Control.Feedback>

        </div>
        </div>
        </div>
      </Form.Group>
      <Button role="button" input type = "submit" variant = "warning" style={{display: "inline" }} className = "submitbutton" >Submit</Button>

    </Form>
    {error_modal}
    </div>
    )

}

export default UpdateForm;