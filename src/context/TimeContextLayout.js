import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { TimeContext } from './TimeContext';
import {UserContext} from "./UserContext";
import { useState } from 'react';

const TimeContextLayout = () => {
const [current_time,setTime] = useState("10/25/2023");
  return (
    <TimeContext.Provider value = {{current_time,setTime}}>
      <Outlet/>
    </TimeContext.Provider>
  );
};

export default TimeContextLayout;