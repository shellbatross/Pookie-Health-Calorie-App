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

function DisplayWorkoutGraph(){

    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime} = useContext(TimeContext);

    console.log(current_user);
    console.log(current_time);

    let WCG = [[],[],[]];
    let ringsList = current_user["rings"];
    let dates = Object.keys(ringsList);

    for(var i = 0; i < dates.length; i++){
        WCG[0][i] = ringsList[dates[i]]['workout'];
        WCG[1][i] = ringsList[dates[i]]['calories'];
        WCG[2][i] = ringsList[dates[i]]['workout_goal'];
    }

    console.log("RINGSS for W, C, G: ", WCG);

    // graphing
    var data = [{
        x: [1, 2, 3, 4, 5, 6, 7],
        y: WCG[0],
        name: 'Workout',
        type: 'bar'
        }, {
        x: [1, 2, 3, 4, 5, 6, 7],
        y: WCG[1],
        name: 'Calories',
        type: 'bar'
    }, {
        x: [1, 2, 3, 4, 5, 6, 7],
        y: WCG[2],
        name: 'Goal',
        type: 'bar'
    }];
            
    // let layout = {barmode: 'stack'};

    return(<div className="display-workout-graph">

        <Plot className="graph" graphDiv="graph"
            data={data}

            layout={ {width: 550, height: 450, title: 'Rings Completed over Past 7 Days', tickmode: 'linear',
                yaxis: {dtick: 1, title: {text: '# of Rings'}},
                xaxis: {dtick: 1, title: {text: 'Days'}},
                barmode: 'stack'}}
        />

    </div>);
}

export default DisplayWorkoutGraph;