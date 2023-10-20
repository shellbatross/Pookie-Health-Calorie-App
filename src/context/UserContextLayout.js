import { Outlet } from 'react-router-dom';
import {UserContext} from './UserContext';
import {useState} from 'react';
import WorkoutContextLayout from './WorkoutContextLayout';
const UserContextLayout = () => {
    const user = 'justin';
    const user_names = {'justin':'leaguepenguin', 'bethel':'bethelstie', 'shradha':'shredder', 'stephanie':'shell'}
    const [current_user, setUser] = useState(localStorage.getItem('current_user') || {
      'username': user_names[user],
      'height': '',
      'weight':'',
      'workout_set':'Running',
      'workout_goal_set': 'Running Pace',
      'workouts': {},
      'rings': {"default":100}
    });
  
  return (
    <UserContext.Provider value = {{current_user,setUser}}>
      <Outlet />
    </UserContext.Provider>
  );
};

export default UserContextLayout;