import React, { useState }  from 'react';
import Plot from 'react-plotly.js';


function GoalsPage(){

    function progValues() {
        var days = document.getElementsByName("days");
        var currGoal = 5;
        // TODO: stop hardcoding this value... grab it from the other file, when that person completes it
        var goalsMet = [];

        for(var i = 0; i < days.length; i++){
            let incr = (parseInt(days[i].value) >= currGoal) ? 1 : 0;
            if (i === 0) {
                goalsMet[i] = incr;
            } else {
                goalsMet[i] = goalsMet[i - 1] + incr
            }
        }

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
        setRevision(revision + 1 );
        layout.datarevision = revision + 1;
    };

    return (<div id="page">
        <h2 className="gptitle">Weekly Goal Progress</h2> <br />
        <p>Current goal: 5 miles </p>

        <p>Input 7 days worth of workout progress. </p> <br />

        {/* https://www.w3schools.com/bootstrap/bootstrap_forms.asp  bootstrap form style */}
        <form id="days-form" className="form-inline">
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
        
        <br /> <br />

        {/* https://www.w3schools.com/bootstrap/bootstrap_buttons.asp  bootstrap button style*/}

        <button type="button" className="btn btn-info" onClick={() => updateChart()}>Submit</button>
        </form>

        {/* https://plotly.com/javascript/react/  used to understand Plot elements */}
        {/* https://medium.com/@jmmccota/plotly-react-and-dynamic-data-d40c7292dbfb  heavily referenced information*/}
        <Plot graphDiv="graph"
            data={[{
                x: [1, 2, 3, 4, 5, 6, 7],
                y: progValues(),
                type: 'line',
                marker: {color: 'blue'},
            }]}

            layout={ {width: 500, height: 400, title: 'Goals Met', tickmode: 'linear',
                yaxis: {autorange: false, range: [0, 7], dtick: 1}, 
                xaxis: {autorange: false, range: [1, 7], dtick: 1}}}
        /> 

    </div>)

}

export default GoalsPage;