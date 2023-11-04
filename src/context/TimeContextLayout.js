import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { TimeContext } from './TimeContext';
import {UserContext} from "./UserContext";
import { useState } from 'react';

const TimeContextLayout = () => {
const [current_time,setTime] = useState(JSON.parse(localStorage.getItem("time"))|| "10/25/2023");

//If very first time then save this time 
if(localStorage.getItem("time")===null){
  localStorage.setItem("time",JSON.stringify(current_time))
  }
  return (
    <TimeContext.Provider value = {{current_time,setTime}}>
      <Outlet/>
    </TimeContext.Provider>
  );
};

export default TimeContextLayout;