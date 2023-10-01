import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./PookieExp.scss";
function PookieExp(){
    return(
      <div className = "whole-progress-bar">
        <h1>Pookie Level 2</h1>
      <ProgressBar>
      <ProgressBar striped variant="success" now={50} key={1} variant="currworkout" label = "x1.5 Experience!"/>
      <ProgressBar variant="warning" now={20} key={2} variant  ="dailygoal" label = "x1 Experience" />
      <ProgressBar striped variant="danger" now={15} key={3} variant = "workoutgoal" label = "x2 Experience!"/>
    </ProgressBar>
    </div>
    )
}

export default PookieExp;