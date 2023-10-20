import React, {useContext} from 'react';
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
    return (<div>
        Meow
    </div>)

}

export default SetWorkoutPage;