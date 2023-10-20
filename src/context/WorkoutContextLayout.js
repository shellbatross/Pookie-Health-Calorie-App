import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { WorkoutContext } from './WorkoutContext';
import {UserContext} from "../context/UserContext";
import { useState } from 'react';

const WorkoutContextLayout = () => {
const {current_user,setUser}= useContext(UserContext);
const [current_workout,setWorkout] = useState(current_user["workout_set"]|| '');
  return (
    <WorkoutContext.Provider value = {{current_workout,setWorkout}}>
      <Outlet />
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextLayout;