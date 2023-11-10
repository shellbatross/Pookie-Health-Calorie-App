import { Outlet } from 'react-router-dom';
import {UserContext} from './UserContext';
import {useState} from 'react';
import WorkoutContextLayout from './TimeContextLayout';
import { caloricIntake } from '../ass-ets/CalorieConstants';
import { TimeContext } from './TimeContext';

const UserContextLayout = () => {
    const user = 'justin';
    const user_names = {'justin':'leaguepenguin', 'bethel':'bethelstie', 'shraddha':'shredder', 'stephanie':'shell'}
    //Get from local storage if there, if not make it and store it
    const [current_user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {
      'username': user_names[user],
      'name':'Justin',
      'sex': "M",
      'height': 170,
      'age': 21,
      'weight':158,
      'BMR': Math.floor(caloricIntake("M",21,158,170)),
      'fitness_level':"Beginner",
      'workout_set':'Running',  
      'workout_goal_set': 'Running Pace',
      'active_workouts': {'Running': {'current':2, 'goal':5}},
      'active_workout_goals': {'Running': {'current': 12, 'goal': 8,'all':[12,13,14,17]}},
      'calories': {'current':238, 'goal':Math.floor(caloricIntake("M",21,158,170))},
      'calories_per_day':{
        "10/21/2023": {"intake": 1790},
        "10/22/2023": {"intake": 1750},
        "10/23/2023": {"intake": 1650},
          "10/24/2023": {"intake": 1600},
          // "10/25/2023": {"intake": 1700}
        },
      'rings': {"10/21/2023": {'workout': 1, 'calories': 1, 'workout_goal': 2},
      "10/22/2023": {'workout': 2, 'calories': 1, 'workout_goal': 0},
      "10/23/2023": {'workout': 0, 'calories': 1, 'workout_goal': 1},
        "10/24/2023": {'workout': 1, 'calories': 1, 'workout_goal': 1},
        "10/25/2023": {'workout': 2, 'calories': 1, 'workout_goal': 0}},
      'workout_pace':{ 
        "Running": {
          "10/21/2023": {"goal": 8 ,"avg_reached": 13, "all_paces": []},
          "10/22/2023": {"goal": 8 ,"avg_reached": 12, "all_paces": []},
          "10/23/2023": {"goal": 8 ,"avg_reached": 10, "all_paces": []},
          "10/24/2023": {"goal": 8 ,"avg_reached": 11, "all_paces": []},
          "10/25/2023": {"goal": 8 ,"avg_reached": 14, "all_paces": [12,13,14,17]}},

      "Biking":{
        "10/21/2023": {"goal": 10 ,"avg_reached": 15, "all_paces": []},
        "10/22/2023": {"goal": 10 ,"avg_reached": 12, "all_paces": []},
        "10/23/2023": {"goal": 10 ,"avg_reached": 13, "all_paces": []},
        "10/24/2023": {"goal": 10 ,"avg_reached": 16, "all_paces": []},
        "10/25/2023": {"goal": 10,"avg_reached": 14, "all_paces": []}},

      "Lifting":{
        "10/21/2023": {"goal": 6 ,"avg_reached": 3, "all_paces": []},
        "10/22/2023": {"goal": 6 ,"avg_reached": 3, "all_paces": []},
        "10/23/2023": {"goal": 6 ,"avg_reached": 4, "all_paces": []},
        "10/24/2023": {"goal": 6 ,"avg_reached": 5, "all_paces": []},
        "10/25/2023": {"goal": 6 ,"avg_reached": 4, "all_paces": []}},

      "Other": {
        "10/21/2023": {"goal": 30 ,"avg_reached": 19, "all_paces": []},
        "10/22/2023": {"goal": 30 ,"avg_reached": 22, "all_paces": []},
        "10/23/2023": {"goal": 30 ,"avg_reached": 23, "all_paces": []},
        "10/24/2023": {"goal": 30 ,"avg_reached": 25, "all_paces": []},
        "10/25/2023": {"goal": 30,"avg_reached": 27, "all_paces": []}}
      }
      
    }
    );

    //Do this for the very first time they load the app only, if we do multiple setting up we will have a ton of  ///// and break it
    if(localStorage.getItem('user')===null){
    localStorage.setItem("user",JSON.stringify(current_user))
    }

  return (
    <UserContext.Provider value = {{current_user,setUser}}>
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserContextLayout;