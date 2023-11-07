import React, { useState,useContext }  from 'react';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Plot from 'react-plotly.js';

let selectedGraph = [];
let multipleLines = [];
let graphType = "";
const workoutTypes = ["Running", "Biking", "Lifting", "Other"];

function DisplayWorkoutGoalsGraph(){

    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime} = useContext(TimeContext);

    console.log(current_user);
    console.log(current_time);

    let currGoal = 5;
    // TODO: stop hardcoding this value...
    let goalsMet = [];

    let allLines = [[], [], [], []];

    // let loc = {...()};
    // let dates = Object.keys(loc);

    // for(var i = 0; i < selectedGraph.length; i++){
    //     goalsMet[i] = selectedGraph[i] || 0;

    // }




    // let days_by_attr = (current_user["workout_pace"][workoutTypes[0]]);
    // let dates = Object.keys(days_by_attr);

    
    for(var j = 0; j < workoutTypes.length; j++){

        let days_by_attr = (current_user["workout_pace"][workoutTypes[j]]);
        let dates = Object.keys(days_by_attr);

        for(var i = 0; i < dates.length; i++){
            let val = days_by_attr[dates[i]]["avg_reached"];
            allLines[j][i] = val || 0;
        }

        // console.log("allLines ", j, " :   ", allLines[j]);
    }

    console.log("allLines:  ", allLines);

    var data = [{
        x: [1, 2, 3, 4, 5, 6, 7],
            y: allLines[0],
            name: 'Running',
            type: 'line',
            marker: {'color': '#4b59b5'}},
        {x: [1, 2, 3, 4, 5, 6, 7],
            y: allLines[1],
            name: 'Biking',
            type: 'line',
            marker: {'color': '#54afd6'}}, 
        {x: [1, 2, 3, 4, 5, 6, 7],
            y: allLines[2],
            name: 'Lifting',
            type: 'line',
            marker: {'color': '#97c8e1'}}, 
        {x: [1, 2, 3, 4, 5, 6, 7],
            y: allLines[3],
            name: 'Other',
            type: 'line',
            marker: {color: '#9562a6'},}
    ];



    return(<div className="display-workout-goals-graph">

        <Plot className="graph" graphDiv="graph"
            data={data}

            layout={ {width: 550, height: 450, title: 'Workout Goals over Past 7 Days', tickmode: 'linear',
                yaxis: {title: {text: 'Goal Reached'}},
                xaxis: {dtick: 1, title: {text: 'Days'}}}}
        />

    </div>);
}

export default DisplayWorkoutGoalsGraph;