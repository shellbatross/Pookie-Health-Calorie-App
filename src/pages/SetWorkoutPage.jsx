import React, {useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {UserContext} from "../context/UserContext";
import { TimeContext} from '../context/TimeContext';
import bike from '../ass-ets/kisspng-cycling-bicycle-computer-icons-mountain-biking-cycle-sport-centre-5b192e8044dff0.2187165515283769602821.png';
import runner from '../ass-ets/running-icon-on-transparent-background-hi.png';
import lift from '../ass-ets/clipart1105277.png';
import "./SetWorkoutPage.scss"
import {Link} from "react-router-dom";

function SetWorkoutPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const {current_time, setTime} =useContext(TimeContext)
    const [pb,setPersonalBest] = useState(null)
    const [goal,setGoal] = useState(null)
    const [workoutType,setWorkoutType] = useState(null)

    const time_key = current_time
    //Inspect, check console in browser you'll see what I mean
    function setStuff(){
        setUser({
            ...current_user,
            workout_goal_set: workoutType,
            workout_set: "Other",
            active_workouts: {"Other":{"current":0,"goal":goal}},
            active_workout_goals: {"Other":{"current":"good luck!","goal":pb, "all":[]}},
            workout_pace:{
                ...current_user["workout_pace"],["Other"]:{
                  ...current_user["workout_pace"]["Other"],[current_time]:{
                    "goal": pb, "avg_reached" : 0, "all_paces":[]
                  }
  
                  }
  
              }
        })

        
        localStorage.setItem("user",JSON.stringify(current_user))
    }
    
    
    return (<div className = "set-workout-page">
    <br/> 
    <br/>
    <Link to = "/home"><Button variant = "primary" size="lg" className ="home-btn" style={{marginLeft: '50px', fontSize: '100px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)', width: '400px', borderRadius: '33px', paddingTop: '20px', paddingBottom: '20px'}}>Home</Button></Link>
    <div className='title' style={{fontSize: '170px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginLeft:'550px'}}>Choose a Workout</div>
    <div className='directions' style={{marginLeft: '130px'}}>Click an Icon or Submit a Custom Workout Below</div>
    <div className='images' style={{transform: 'scale(0.7)'}}>
    <Link to = "/bike"><Button variant = "primary" style={{display: "inline"}} className ="runbutton" ><img src={bike} className="bike"></img></Button></Link>
    <Link to = "/run"><Button variant = "primary" style={{display: "inline"}} className ="runbutton" ><img src={runner} className="runner"></img></Button></Link>
    <Link to = "/lift"><Button variant = "primary" style={{display: "inline"}} className ="runbutton" ><img src={lift} className="lift"></img></Button></Link>
    </div>
    <div className='customworkout' style={{borderBottom: '3px solid black', display: 'inline-block' , fontSize: '130px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', marginLeft:'590px', marginTop: '5px'}}>Custom Workout Form</div>
    <div className='disclaimer' style={{fontSize: '80px', marginLeft:'100px'}}>Disclaimer: The app does not track calories for custom workouts!</div>
    <Form.Select aria-label="Default select example" onChange={(e) => setWorkoutType(e.target.value)} className='goalbox' style={{marginLeft: '1000px', border: '2px solid purple'}}>
      <option>Choose your goal here!</option>
      <option value="Duration">Duration</option>
      <option value="Speed">Speed</option>
      <option value="Reps">Reps</option>
      <option value="Distance">Distance</option>
    </Form.Select>
    <br></br>
    <div className='personal' style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize: '90px', textAlign: 'center', marginLeft: '160px' }}>Enter how much or how long or this workout you are doing</div>
    <div className='personaldescription' style={{fontSize: '68px', textAlign: 'center' }}>i.e. How many sit ups you are doing, how many miles you are swimming</div>
    <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '-90px'}}>
    <form className="personalbox">
        <input type="number" onWheel={(e) => e.target.blur()} id="day1" name="days" min="0" placeholder="0" onInput={e=>setGoal(e.target.value)}/>  <br />
    </form>
    </div>
    <div className='goalnumber'  style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize: '100px', textAlign: 'center', marginLeft: '150px'}}>Enter your goal</div>
    <div className='personaldescription' style={{fontSize: '68px', textAlign: 'center' }}>i.e. Record of how many sit ups you have ever done, how fast you want to swim</div>
    <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '-90px'}}>
        
    <form className="goalnumberbox" style={{textAlign: 'center',marginTop: "-5px"}}>
        <input type="number" onWheel={(e) => e.target.blur()} id="day1" name="days" min="0" placeholder="0" onInput={e=>setPersonalBest(e.target.value)} />  <br />
    </form>
    </div>
    <Link to = "/home"><Button variant = "secondary" className="submitcustom" style={{textAlign: 'center', marginLeft: '1245px', fontSize: '20px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', borderRadius: '11px'}} onClick={setStuff}> Submit</Button></Link>
    </div>)

    }

export default SetWorkoutPage;