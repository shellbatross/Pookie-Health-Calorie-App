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
import { MET_functions } from "../ass-ets/CalorieConstants";
import { formulaForPace, formWorkoutText, anythingThatNeedsPace } from "../ass-ets/WorkoutConstants";
import purplex from "../ass-ets/purplex.png";

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
    
    function getCurrent(){
    let all_info = current_user["active_workout_goals"][current_user["workout_set"]]["all"]
    console.log(all_info)
    let current_pace = 0
    let current = 0
    if (current_user["workout_goal_set"] in anythingThatNeedsPace || current_user["workout_set"] in anythingThatNeedsPace){
      current_pace = formulaForPace(parseInt(input1),parseInt(input2))
      all_info.push(parseInt(current_pace))
      const sum_of_paces = all_info.reduce((a,b)=>b+a,0);

      current = Math.floor(sum_of_paces/all_info.length)
      
    }
    else{
      all_info.push(parseInt(input2))
      const sum_of_stuff = all_info.reduce((a,b)=>b+a,0);
      current = Math.floor(sum_of_stuff/all_info.length)
    }

    return current
    }

    function pushV2(arr,elem){
    arr.push(elem)
    return arr}


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
              
              }

          )
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
                "avg_reached": current_user["active_workout_goals"] === ""?
                current_user["workout_pace"][key][workout_ring_key]["avg_reached"]
                :getCurrent(),
                "all_paces":pushV2(current_user["workout_pace"][key][workout_ring_key]["all_paces"],(parseInt(input2)))
                }

                }

            },
            //Went to go get snack

            active_workout_goals: current_user["active_workout_goals"] === ""? "":{
              ...current_user["active_workouts"],[key]:
              {"current": getCurrent(), 
              "goal": current_user["active_workout_goals"][key]["goal"],
              "all":pushV2(current_user["active_workout_goals"][key]["all"],(parseInt(input2)))
            
            }
            
            },

            calories: current_user["workout_set"]==="Other"? current_user["calories"] :
            current_user["workout_set"]=== "Lifting" ?
            {"current": current_user["calories"]["current"]-MET_functions[current_user["workout_set"]](parseInt(current_user["weight"]),parseInt(input1)),
            "goal":current_user["calories"]["goal"]
          } :
            {"current": current_user["calories"]["current"]-MET_functions[current_user["workout_set"]](parseInt(current_user["weight"]),parseInt(input2)),
            "goal":current_user["calories"]["goal"]
          }
          })
        }
        //Close the form
        setGetForm("");
        }
        

    return(
      <div>{current_user["workout_set"] === "" ? 
      <div>
    <Form noValidate
          validated={validated}
          onSubmit={handleSubmit} 
          className = "full-form" 
          // style={{marginLeft: '1400px', display: 'flex', alignItems: 'center' }}
          >

    {/* <InputGroup className="my-2"> */}
            
      <img src = {purplex} className= "red-x"  onClick={()=>{setGetForm("")}}></img>
      <Form.Group className="mb-3" style={{marginLeft:'500px', paddingLeft: '1550px', marginTop: '-30px'}}>
      <div className="container">
        <div className="row" 
        // style={{ display: 'flex', alignItems: 'center' }}
        >
          <div className="col">
           <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize:'115px', marginLeft: '-1800px',marginTop: "5px", transform: 'translateY(-70px)'}}>You need to go set a workout!</Form.Label>
          </div>
        </div>
        </div>
      </Form.Group>
      {/* </InputGroup> */}
      {/* <div id="outer"> <div id="inner">  */}
       
      {/* </div></div> */}
    </Form>
    </div>
      
      : current_user["workout_set"] === "Other" ? 
      
      
      <div>
        
    <Form noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className = "full-form">

      <img src = {purplex} className = "red-x" onClick = {()=>{setGetForm("")}}></img>
  
      <Form.Group className="mb-3" style={{marginLeft:'500px', paddingLeft: '1000px'}}>
        <div className="container">
        <div className="row">

        <div className="col">
        <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginLeft: '-1080px', textAlign: 'left'}}>{current_user["workout_goal_set"]}</Form.Label>
        </div>
        <div className="col">
        <Form.Control required type="number" onWheel={(e) => e.target.blur()} className="homepage-input" rows={1} 
        onInput={e=>setInput1(e.target.value)}
        style={{ marginLeft: '-380px', marginRight: '950px', border: '3px solid purple', paddingLeft: '20px', transform: 'translateY(-150px)'}}/>

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
        <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',  marginLeft: '-10px', textAlign: 'left', transform: 'translateY(-90px)'}}>Time/Distance</Form.Label>
        </div>
        <div className="col">
        <Form.Control required type="number" onWheel={(e) => e.target.blur()} className="homepage-input" rows={1} 
        // onChange = {handleChange2} 
        onInput={e=>setInput2(e.target.value)}
        style={{ marginLeft: '55px', border: '3px solid purple', paddingLeft: '20px', paddingRight: '70px', transform: 'translateY(-100px)'}}/>
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
      
      <Button role="button" input type = "submit" variant = "warning" style={{display: "inline", transform: 'translateX(-130px)'}} className = "submitbutton" >Submit</Button>

    </Form>
    {error_modal}
    </div>



      
      
      
      
      
      
      
      
      
      
      :

      <div>
        
    <Form noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className = "full-form">

      <img src = {purplex} className = "red-x" onClick = {()=>{setGetForm("")}}></img>
  
      <Form.Group className="mb-3" style={{marginLeft:'500px', paddingLeft: '1000px'}}>
        <div className="container">
        <div className="row">

        <div className="col">
        <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginLeft: '-1080px', textAlign: 'left', transform: 'translateY(-0.01px)'}}>{formWorkoutText[current_user["workout_set"]]["input1"]}</Form.Label>
        </div>
        <div className="col">
        <Form.Control required type="number" onWheel={(e) => e.target.blur()} className="homepage-input" rows={1} placeholder={formWorkoutText[current_user["workout_set"]]["placeholder1"]+ " "+ formWorkoutText[current_user["workout_set"]]["metric1"]}
        onInput={e=>setInput1(e.target.value)}
        style={{ marginLeft: '-400px', marginRight: '950px', border: '3px solid purple', paddingLeft: '20px', transform: 'translateY(-160px)'}}/>

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
        <Form.Label style = {{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',  marginLeft: '-10px', textAlign: 'left', transform: 'translateY(-70px)'}}>{formWorkoutText[current_user["workout_set"]]["input2"] }</Form.Label>
        </div>
        <div className="col">
        <Form.Control required type="number" onWheel={(e) => e.target.blur()} className="homepage-input" rows={1} placeholder ={formWorkoutText[current_user["workout_set"]]["placeholder2"] + " "+formWorkoutText[current_user["workout_set"]]["metric2"] }
        // onChange = {handleChange2} 
        onInput={e=>setInput2(e.target.value)}
<<<<<<< Updated upstream
        style={{ marginLeft: '40px', border: '3px solid purple', paddingLeft: '20px', paddingRight: '70px', transform: 'translateY(-80px)'}}/>
=======
        style={{ marginLeft: '40px', border: '3px solid purple', paddingLeft: '20px', paddingRight: '70px', transform: 'translateY(-100px)'}}/>
>>>>>>> Stashed changes
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
      
      <Button role="button" input type = "submit" variant = "warning" style={{display: "inline", transform: 'translateX(-150px)'}} className = "submitbutton" >Submit</Button>

    </Form>
    {error_modal}
    </div>
    
      
      }
      </div>
 

    )

}

export default UpdateForm;