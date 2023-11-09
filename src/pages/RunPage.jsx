import React, {useContext,useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import run from '../ass-ets/running-icon-on-transparent-background-hi.png';
import "./RunPage.scss"
import {Link,Navigate,useNavigate} from "react-router-dom";

function RunPage(){
    const navigator = useNavigate();
    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime}= useContext(TimeContext); 
    
    let workouts = ["Running","Biking","Lifting"]

    const [distance,setDistance]=useState(null);
    const [pace,setPace]=useState(null);

    const [showError,setShowError]=useState(false)
    const [errorMsg, setErrorMsg]= useState("")
    let has_been_clicked = false
    //Inspect, check console in browser you'll see what I mean
    const handleClose = () => setShowError(false);
    
    function setStuff(){
        has_been_clicked = true
        if((distance === null || pace === null) && has_been_clicked === true){
            setShowError(true)
            if (distance===null && pace===null){
                setErrorMsg("All fields ")
            }
            else if(distance===null){
            setErrorMsg("Distance ")
            }
            else if(pace===null){
                setErrorMsg("Pace ")
                } 

            console.log(errorMsg)
            return <Navigate to = "/run"></Navigate>
        }
        
        setUser({
            ...current_user,
            workout_goal_set: "Speed",
            workout_set: "Running",
            active_workouts: {"Running":{"current":0,"goal":parseInt(distance)}},
            active_workout_goals: {"Running":{"current":"good luck!","goal":parseInt(pace), "all":[]}},
            workout_pace:{
                ...current_user["workout_pace"],["Running"]:{
                  ...current_user["workout_pace"]["Running"],[current_time]:{
                    "goal": parseInt(pace), "avg_reached" : 0, "all_paces":[]
                  }
  
                  }
  
              }
        })
        localStorage.setItem("user",JSON.stringify(current_user))
        navigator("/run");
        }
        localStorage.setItem("user",JSON.stringify(current_user))


    return (<div className = "all-items">
            <Modal show={showError} onHide={handleClose} size = "lg">
        <Modal.Body style ={{fontSize: "100px", fontFamily: "Noto Sans TC sans-serif"}}>{errorMsg} can not be empty!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} style={{width: "200px",height: "200px",fontSize: "70px", fontFamily: "Noto Sans TC sans-serif"}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    <img src={run} className="run"></img>
    <Link to = "/setworkout"><Button variant = "primary" size="lg" className ="home-btn" style={{fontSize: '90px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)',  borderRadius: '33px', paddingTop: '30px', paddingBottom: '30px', position: 'absolute', marginLeft: '-1320px', marginTop: '-50px', paddingLeft: '35px', paddingRight: '30px'}}>Back</Button></Link>
    <div className='runtitle' style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginBottom: '50px', borderBottom: '3px solid black', display: 'inline-block' }}>Running Workout Settings</div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='distancetitle' style={{fontSize: '150px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Distance</div>
    <div className='distancedescription'>Enter the distance you want to run (miles)</div>
    <form id="distanceform" className="rundistancebox">
        <input type="number" onWheel={(e) => e.target.blur()} id="day1" name="days" min="0" placeholder="0" onInput={e=>setDistance(e.target.value)}/>  <br />
    </form>
    <div className='pacetitle' style={{fontSize: '150px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Pace</div>
    <div className='pacedescription'>Enter the pace that you want to run at (miles per hour)</div>
    <form id="paceform" className="runpacebox">
        <input type="number" onWheel={(e) => e.target.blur()} id="day1" name="days" min="0" placeholder="0" onInput={e=>setPace(e.target.value)} />  <br />
    </form>
    <Button variant = "secondary" className="submitrun" onClick = {setStuff} style ={{fontSize: '20px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', borderRadius: '11px'}}> Submit</Button>
    </div>)

}

export default RunPage;
