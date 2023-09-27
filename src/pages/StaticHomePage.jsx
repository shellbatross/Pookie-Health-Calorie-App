import React from "react";
import {useState} from "react";

import CircleProgress from "../components/CircleProgress";

import "./StaticHomePage.scss"
import pookie from "../ass-ets/pookie_level2.png";
import PookieExp from "../components/PookieExp";

function StaticHomePage(){
    //Just making it semi useable for later, hardcoded values for rings but after that you can just pass in what to print in the rings

    return(
        <div className="whole-site">
        <div className="circles">
        <CircleProgress props = {{"info":["Workout","progress-bar-circle workout"]}}></CircleProgress>
        <CircleProgress props = {{"info":["Daily Goal","progress-bar-circle dailygoal"]}}></CircleProgress>
        <CircleProgress props = {{"info":["Workout Goal","progress-bar-circle workoutgoal"]}}></CircleProgress>
        </div>
        <img src = {pookie} className = "pookie"></img>
        <PookieExp></PookieExp>
        </div>
        
    )
}

export default StaticHomePage;