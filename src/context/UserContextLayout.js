import { Outlet } from 'react-router-dom';
import {UserContext} from './UserContext';
import {useState} from 'react';
import WorkoutContextLayout from './TimeContextLayout';
const UserContextLayout = () => {
    const user = 'justin';
    const user_names = {'justin':'leaguepenguin', 'bethel':'bethelstie', 'shraddha':'shredder', 'stephanie':'shell'}
    const [current_user, setUser] = useState(localStorage.getItem('current_user') || {
      'username': user_names[user],
      'height': '',
      'weight':'',
      'workout_set':'Running',  
      'workout_goal_set': 'Running Pace',
      'active_workouts': {'Running': {'current':2, 'limit':5}},
      'active_workout_goals': {'Running': {'current': 12, 'goal': 8}},
      'calories': {'current':238, 'limit':400},
      'rings': {"10/25/2023": {'workout': 2, 'calories': 1, 'workout_goal': 0}}
    });
  
  return (
    <UserContext.Provider value = {{current_user,setUser}}>
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserContextLayout;