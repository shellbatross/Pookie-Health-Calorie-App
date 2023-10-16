import React from "react";
import {useState} from "react";

import CircleProgress from "../components/CircleProgress";
import Button from 'react-bootstrap/Button';
import "./StaticHomePage.scss"
import pookie from "../ass-ets/pookie_level2.png";
import speechbubble from "../ass-ets/speechbubble.png";
import PookieExp from "../components/PookieExp";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import SetWorkOutPopUp from "../components/SetWorkOutPopUp";
function StaticHomePage(){
    //Just making it semi useable for later, hardcoded values for rings but after that you can just pass in what to print in the rings

    return(
        <div className="whole-site">
        <div className = "main-buttons">
        <Link to = "/goals"><Button variant = "primary" style={{display: "inline"}} className ="goalsbutton" >Goals🏅</Button></Link>
        <Link to = "/setworkout"><Button variant = "secondary" style={{display: "inline"}} className = "caloriesbutton">Swap Workout🏃‍♀️</Button></Link>
        <Link to ="/userinfo"><Button variant = "info" style={{display: "inline"}} className = "workoutgoalsbutton">User Information 📁</Button></Link>
        </div>
        <div className="circles">
        <CircleProgress className = "workoutInfoCircle" props = {{"info":["Workout: Running","progress-bar-circle workout"]}}></CircleProgress>
        <CircleProgress className = "caloriesBurnedCircle" props = {{"info":["Calories Burned","progress-bar-circle dailygoal"]}}></CircleProgress>
        <CircleProgress props = {{"info":["Workout Goal: Running Pace","progress-bar-circle workoutgoal"]}}></CircleProgress>
        </div>
        <div className = "pookie-inline-wrapper">
        <img src = {pookie} className = "pookie"></img>
        <img src = {speechbubble} className = "speechbubble"></img>
        <div className = "form-wrapper">
        <Form className = "full-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Run Distance</Form.Label>
        <Form.Control type="email" placeholder="10" /><h1>miles</h1>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Run Duration</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder ="01:30"/><h1 className="format-for-submits">hours:minutes</h1>
        <Button variant = "warning" style={{display: "inline" }} className = "submitbutton">Submit</Button>

      </Form.Group>
    </Form>
    </div>
    </div>
    <PookieExp></PookieExp>
        </div>
        
    )
}

export default StaticHomePage;