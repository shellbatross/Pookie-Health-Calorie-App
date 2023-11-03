import React from "react";
import { useState,useContext } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TimeContext } from "../context/TimeContext";
import "./PookieExp.scss";
function PookieExp(){
    const {current_time,setTime} = useContext(TimeContext)
    return(
      <div className = "whole-progress-bar">
        <h1 className='pookie-font' style={{fontSize:'100px'}}>Pookie Level 2</h1><h1 className = 'date' style={{fontSize:'80px'}}>{current_time}</h1>
      <ProgressBar>
      <ProgressBar className = 'pookie-font' striped variant="success" now={50} key={1} variant="currworkout" label = "x1.5 Exp"/>
      <ProgressBar className = 'pookie-font' variant="warning" now={20} key={2} variant  ="dailygoal" label = "x1 Exp" />
      <ProgressBar className = 'pookie-font' striped variant="danger" now={15} key={3} variant = "workoutgoal" label = "x2 Exp"/>
    </ProgressBar>
    <br></br>
    </div>
    )
}

export default PookieExp;