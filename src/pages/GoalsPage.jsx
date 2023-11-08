import React, { useState,useContext }  from 'react';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Plot from 'react-plotly.js';
import DisplayCaloriesGraph from "../components/DisplayCaloriesGraph.jsx";
import DisplayWorkoutGraph from '../components/DisplayWorkoutGraph.jsx';
import DisplayWorkoutGoalsGraph from '../components/DisplayWorkoutGoalsGraph.jsx';

import './GoalsPage.scss';

let selectedGraph = [];
let multipleLines = [];
let graphType = "";
const workoutTypes = ["Running", "Biking", "Lifting", "Other"];

function GoalsPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime} = useContext(TimeContext);

    console.log(current_user);
    console.log(current_time);

    const [goals, setGoals] = useState({
        x: [1, 2, 3, 4, 5, 6, 7],
        y: progValues(),
        // y: caloriesGraph(),
        type: 'line',
        mode: 'lines+markers',
        marker: {color: 'red'},
        name: 'Goals Progress'
    });

    const [layout, setLayout] = useState({datarevision: 0});

    const [revision, setRevision] = useState(0);

    // user presses button to select what they want to be graphed (workout, pace, or calories)
    // this selects it
    function chooseGraph(gType){
        graphType = gType;
        console.log("Gtype = :", graphType);

        goals.x = progValues();
        setRevision(revision + 1);
        layout.datarevision = revision + 1;
    }

    function workoutGraph(){
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
                  
        let layout = {barmode: 'stack'};
        
        return [WCG, data, layout];
    }

    function progValues() {

        console.log("please what the fuck is the graph type:  ", graphType);
        if (graphType === "Calories"){
            // return caloriesGraph();

        } else if (graphType === "Workout") {
            workoutGraph();
        } else {

        // let currGoal = 5;
        // stop hardcoding this value...
        let goalsMet = [];

        let allLines = [];

        // let loc = {...()};
        // let dates = Object.keys(loc);

        // for(var i = 0; i < selectedGraph.length; i++){
        //     goalsMet[i] = selectedGraph[i] || 0;

        // }

        // RUNNING

        let days_by_attr = (current_user["workout_pace"][workoutTypes[0]]);
        let dates = Object.keys(days_by_attr);


        for(var i = 0; i < dates.length; i++){
            let val = days_by_attr[dates[i]]["avg_reached"];
            goalsMet[i] = val || 0;
            selectedGraph[i] = val || 0;
        }

        // console.log("workoutType: ", workoutType);
        allLines[0] = goalsMet;
        console.log("allLines 0:   ", allLines);


        // BIKING

        days_by_attr = (current_user["workout_pace"]["Biking"]);
        console.log("HELLO PLS BIKIG: ", current_user["workout_pace"])
        dates = Object.keys(days_by_attr);

        goalsMet = [];

        for(var i = 0; i < dates.length; i++){
            let val = days_by_attr[dates[i]]["avg_reached"];
            goalsMet[i] = val || 0;
            selectedGraph[i] = val || 0;

            console.log("goalsmet: ", goalsMet);
        }

        allLines[1] = goalsMet;
        console.log("allLines 1:   ", allLines);


        return goalsMet;
        }
    }

    // https://legacy.reactjs.org/docs/hooks-state.html  used to understand hooks, referenced heavily
    // const [goals, setGoals] = useState({
    //         x: [1, 2, 3, 4, 5, 6, 7],
    //         y: progValues(),
    //         // y: caloriesGraph(),
    //         type: 'line',
    //         mode: 'lines+markers',
    //         marker: {color: 'red'},
    //         name: 'Goals Progress'
    //     });

    // const [layout, setLayout] = useState({datarevision: 0});

    // const [revision, setRevision] = useState(0);

    // const updateChart = () => { 

    // };

    return (<div className="page">
        <Link to = "/home"><Button variant = "primary" size="lg" className ="home-btn" style={{fontSize: '22px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)'}}>Home</Button></Link>

        &nbsp;

        <h1 className="page-txt"> Weekly Goal Progress </h1> <br />
        <h4 className="top-info"> The following graphs can help you visualize your progress over the past week. </h4> <br />

        <div class="flex-parent jc-center">
            <Button variant = "primary" size="lg" onClick={() => chooseGraph("Workout")} className ="workout-graph" style={{fontSize: '22px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)'}}> Workout</Button>   &nbsp; &nbsp;
            <Button variant = "primary" size="lg" onClick={() => chooseGraph("Pace")} className ="pace-graph" style={{fontSize: '22px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)'}}> Pace</Button>  &nbsp; &nbsp;
            <Button variant = "primary" size="lg" onClick={() => chooseGraph("Calories")} className ="calories-graph" style={{fontSize: '22px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)'}}> Calories</Button>
        </div>

        <br />

        <div className="text-box">  
        
            {graphType === "Pace" ? "Plots how much of your goal (e.g. pace) has been acheived per workout over the past 7 days or less. Click each point for the exact value." :   
                (graphType === "Calories" ? "Plots your caloric intake for the past 7 days or less. Note that caloric information for a day is saved only after the day ends." : 
                    (graphType === "Workout" ? "Plots the number of completed rings for each group (e.g. caloric intake) for the past 7 days or less." 
                        : "Select a graph type to view and learn more."))} </div>


        {/* https://www.w3schools.com/bootstrap/bootstrap_buttons.asp  bootstrap button style*/}

        {/* <button type="button" className ='button' onClick={() => updateChart()}>Submit</button> <br /> */}

        {/* https://plotly.com/javascript/react/  used to understand Plot elements */}
        {/* https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb  heavily referenced information*/}
        {graphType === "Pace" ? <DisplayWorkoutGoalsGraph></DisplayWorkoutGoalsGraph> :   
            (graphType === "Calories" ? <DisplayCaloriesGraph></DisplayCaloriesGraph> : 
                (graphType === "Workout" ? <DisplayWorkoutGraph></DisplayWorkoutGraph> : 
                
                <Plot className="graph" graphDiv="graph"
                data={[{
                    x: [1, 2, 3, 4, 5, 6, 7],
                    y: [0, 0, 0, 0, 0, 0, 0],
                    type: 'line',
                    marker: {color: 'blue'},
                }]}
    
                layout={ {width: 550, height: 450, title: '', tickmode: 'linear',
                    yaxis: {dtick: 1, title: {text: ''}},
                    xaxis: {dtick: 1, title: {text: ''}}}}
            /> ))}

    </div>)

}

export default GoalsPage;