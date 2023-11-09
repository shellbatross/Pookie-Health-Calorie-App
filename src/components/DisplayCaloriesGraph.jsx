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
    dates = dates.slice(Math.max(dates.length - 7, 0));


    for(var i = 0; i < dates.length; i++){
        // let val = (caloriesList[dates[i]]["intake"] * 1.0) / 100;
        let val = caloriesList[dates[i]]["intake"];
        caloriesIn[i] = val || 0;
        selectedGraph[i] = val || 0;
    }

    // let temp = Array(7 - dates.length).fill(0);
    // caloriesIn = [...temp, ...caloriesIn];

    console.log("CALORIES LIST :   ", caloriesList);
    console.log("CALORIES : ", caloriesIn);

    function maxYValue(){
        let m = ((Math.ceil((Math.max(...caloriesIn))) % 5) + 1) * 5;
        console.log("MAX X  :" , m);
        return m;
    }

    function maxXValue(){
        return dates.length + 1;
    }

    return(<div className="display-calories-graph">

        <Plot className="graph" graphDiv="graph"
            data={[{
                x: [1, 2, 3, 4, 5, 6, 7],
                y: caloriesIn,
                type: 'bar',
                marker: {color: '#9562a6'},
            }]}

            layout={ {width: 550, height: 450, title: '<b>Caloric Intake over Past 7 Days</b>', tickmode: 'linear',
                yaxis: {dtick: 250, title: {text: '<b>Calories</b>'}},
                xaxis: {autorange: false, range: [0, 7.5], dtick: 1, title: {text: '<b>Days</b>'},
                // colorway : ['#f3cec9', '#e7a4b6', '#cd7eaf']
            }}}
        />

    </div>);
}

export default DisplayCaloriesGraph;