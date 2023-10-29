import { Outlet } from 'react-router-dom';
import {UserContext} from './UserContext';
import {useState} from 'react';
import WorkoutContextLayout from './TimeContextLayout';
const UserContextLayout = () => {
    const user = 'justin';
    const user_names = {'justin':'leaguepenguin', 'bethel':'bethelstie', 'shraddha':'shredder', 'stephanie':'shell'}
    console.log(JSON.parse(localStorage.getItem('user')))
    //Get from local storage if there, if not make it and store it
    const [current_user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {
      'username': user_names[user],
      'height': '',
      'weight':'',
      'workout_set':'Running',  
      'workout_goal_set': 'Running Pace',
      'active_workouts': {'Running': {'current':2, 'goal':5}},
      'active_workout_goals': {'Running': {'current': 12, 'goal': 8}},
      'calories': {'current':238, 'goal':400},
      'rings': {"10/25/2023": {'workout': 2, 'calories': 1, 'workout_goal': 0}},
      'workout_pace':{ "Running": {"10/25/2023": {"goal": 8 ,"avg_reached": 11}, 
      "10/26/2023":{"goal": 8,  "avg_reached": 10}},
      "Biking":{},
      "Lifting":{},
      "Other": {}
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