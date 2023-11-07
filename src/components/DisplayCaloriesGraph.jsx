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

function DisplayCaloriesGraph(){

    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime} = useContext(TimeContext);

    console.log(current_user);
    console.log(current_time);

    let caloriesIn = [];
    selectedGraph = [];

    let caloriesList = current_user['calories_per_day'];
    let dates = Object.keys(caloriesList);

    for(var i = 0; i < dates.length; i++){
        let val = (caloriesList[dates[i]]["intake"] * 1.0) / 100;
        caloriesIn[i] = val || 0;
        selectedGraph[i] = val || 0;
    }

    console.log("CALORIES LIST :   ", caloriesList);
    console.log("CALORIES : ", caloriesIn);

    return(<div className="display-calories-graph">

        <Plot className="graph" graphDiv="graph"
            data={[{
                x: [1, 2, 3, 4, 5, 6, 7],
                y: caloriesIn,
                type: 'line',
                marker: {color: 'red'},
            }]}

            layout={ {width: 550, height: 450, title: 'Caloric Intake over Past 7 Days', tickmode: 'linear',
                yaxis: {autorange: false, range: [0,  20], dtick: 1, title: {text: 'Calories'}},
                xaxis: {autorange: false, range: [1, 8], dtick: 1, title: {text: 'Days'}}}}
        />

    </div>);
}

export default DisplayCaloriesGraph;