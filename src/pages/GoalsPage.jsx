import React, { useState,useContext }  from 'react';
import {UserContext} from "../context/UserContext";
import { TimeContext } from '../context/TimeContext';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Plot from 'react-plotly.js';

import './GoalsPage.scss';

let selectedGraph = [];

function GoalsPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const {current_time,setTime} = useContext(TimeContext);

    console.log(current_user);
    console.log(current_time);

    //You can access whatever user info you want like this
    let running_pace_info = (current_user["workout_pace"]["Running"])
    //Turn it into array like this for info you may need 
    let values = Object.keys(running_pace_info)

    console.log(values)

    const graphs = {"Workout": [3, 5, 9, 0, 2, 6, 4],  // e.g. running goal of 5mi
                    "Calories": [15, 16, 13, 14, 14, 18, 17],  // e.g. caloric intake of 1700 but the graph hates huge numbers so scaled down
                    "Pace": [13, 12, 12, 10, 9, 10, 8, 9]};  // e.g. pace goal of 8m/mi

    // user presses button to select what they want to be graphed (workout, pace, or calories)
    // this selects it
    function chooseGraph(graphType){
        selectedGraph = graphs[graphType];
        console.log("Chosen Graph: ",selectedGraph);
    }

    function maxYValue(){
        return Math.max(...selectedGraph) + 1;
    }

    function progValues() {
        var currGoal = 5;
        // TODO: stop hardcoding this value...
        var goalsMet = [];

        for(var i = 0; i < selectedGraph.length; i++){
            goalsMet[i] = selectedGraph[i] || 0;

        }

        console.log("List of selected graph values:", selectedGraph);

        // for(var i = 0; i < days.length; i++) {}
            // let incr = (parseInt(days[i].value) >= currGoal) ? 1 : 0;
            // if (i === 0) {
            //     goalsMet[i] = incr;
            // } else {
            //     goalsMet[i] = goalsMet[i - 1] + incr
            // }

            // for the literal value
            // goalsMet[i] = parseInt(days[i].value) || 0;
        // }

        return goalsMet
    }

    // https://legacy.reactjs.org/docs/hooks-state.html  used to understand hooks, referenced heavily
    const [goals, setGoals] = useState({
            x: [1, 2, 3, 4, 5, 6, 7],
            y: progValues(),
            type: 'line',
            mode: 'lines+markers',
            marker: {color: 'red'},
            name: 'Goals Progress'
        });

    const [layout, setLayout] = useState({datarevision: 0});

    const [revision, setRevision] = useState(0);

    const updateChart = () => { 
        goals.x = progValues();
        setRevision(revision + 1);
        layout.datarevision = revision + 1;
    };

    // TODO: warn users if they don't have a week's worth of information. Should I allow it anyways?

    // TODO: see if i can remove the submit button completely..
    return (<div className="page">
        <Link to = "/home"><Button variant = "primary" size="lg" className ="home-btn" >Home</Button></Link>

        <h2 className="gptitle">Weekly Goal Progress</h2> <br />
        <h4 className="goal-num">Current goal: 5 miles </h4>

        <p className="input-msg">Input 7 days worth of workout progress. </p> <br />

        <div class="flex-parent jc-center">
        {/* <div className="graph-btn"> */}
            <Button variant = "primary" size="lg" onClick={() => chooseGraph("Workout")} className ="workout-graph" > Workout</Button>   &nbsp;
            <Button variant = "primary" size="lg" onClick={() => chooseGraph("Pace")} className ="pace-graph" > Pace</Button>  &nbsp;
            <Button variant = "primary" size="lg" onClick={() => chooseGraph("Calories")} className ="calories-graph" > Calories</Button>
        </div>

        {/* https://www.w3schools.com/bootstrap/bootstrap_forms.asp  bootstrap form style */}
        {/* <form id="days-form" className="form-inline">
        <label htmlFor="day1">Day 1:     </label>
        <input type="number" id="day1" name="days" min="0" placeholder="0" />  <br />
        
        <label htmlFor="day2">Day 2:</label>
        <input type="number" id="day2" name="days" min="0" placeholder="0" />  <br />

        <label htmlFor="day3">Day 3:</label>
        <input type="number" id="day3" name="days" min="0" placeholder="0" />  <br />

        <label htmlFor="day4">Day 4:</label>
        <input type="number" id="day4" name="days" min="0" placeholder="0" />  <br />

        <label htmlFor="day5">Day 5:</label>
        <input type="number" id="day5" name="days" min="0" placeholder="0" />  <br />
        
        <label htmlFor="day6">Day 6:</label>
        <input type="number" id="day6" name="days" min="0" placeholder="0" />  <br />

        <label htmlFor="day7">Day 7:</label>
        <input type="number" id="day7" name="days" min="0" placeholder="0" />  
        
        </form> */}
        <br />

        {/* https://www.w3schools.com/bootstrap/bootstrap_buttons.asp  bootstrap button style*/}
        <button type="button" className ='button' onClick={() => updateChart()}>Submit</button> <br />
        {/* https://plotly.com/javascript/react/  used to understand Plot elements */}
        {/* https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb  heavily referenced information*/}
        <Plot className="graph" graphDiv="graph"
            data={[{
                x: [1, 2, 3, 4, 5, 6, 7],
                y: progValues(),
                type: 'line',
                marker: {color: 'purple'},
            }]}

            layout={ {width: 550, height: 450, title: 'Goals Met Over the Past 7 Days', tickmode: 'linear',
                yaxis: {autorange: false, range: [0,  maxYValue()], dtick: 1, title: {text: 'Goals Met'}},
                xaxis: {autorange: false, range: [1, 7], dtick: 1, title: {text: 'Days'}}}}
        /> 

        {/* TODO: still need to make the graph change labels based on what 
            TODO: for calories, may be able to have the actual value (1700 instead of 17) if i change the y-axis tickmarks
            TODO: add a horizontal line w their goal for whatever they selected (e.g. if running goal 5mi then y=5 on the graph*/}

    </div>)

}

export default GoalsPage;