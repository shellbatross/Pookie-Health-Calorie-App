import React, { useState,useContext }  from 'react';

const messages = {
    start: ["Hi {username}. It's a new day. Choose a workout in the Workout tab at the top of the page. Press the End Day button at the bottom of the page when you're done working out for today."],
    
    set: ["Hi {username}, you haven't set a workout yet! Head to the Workout tab to change that.",
        "Hi {username}, have you done your {set workout} workout yet? The day isn't over yet!"],
    
    motivate: ["Great job so far! Log another workout to help close your {any ring} ring!",
            "Your {any ring} is still not complete. Try another workout!"],

    calories: ["Have you eaten anything? Log your caloric intake!"],

    completed: ["Congratulations, {username}! You have completed the {completed ring} ring!"]
}

// https://www.verywellfit.com/how-many-calories-do-i-need-each-day-2506873


export default messages;