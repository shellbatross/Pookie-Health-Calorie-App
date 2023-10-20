import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import {UserContext} from "../context/UserContext";
import { WorkoutContext } from '../context/WorkoutContext';

function SetWorkoutPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const {current_workout,setWorkout} = useContext(WorkoutContext);
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
    console.log(current_workout)

    function setNew(val){
        console.log("meow")
        setUser({...current_user, workout_set:val})

    }
    
    return (<Form.Select aria-label="Default select example" onChange= {(event)=>setNew(event.target.value)}>
    <option>Start setting your workout here!</option>
    <option value="Running">Running</option>
    <option value="Biking" >Biking</option>
    <option value="Lifting">Lifting</option>
  </Form.Select>)

}

export default SetWorkoutPage;