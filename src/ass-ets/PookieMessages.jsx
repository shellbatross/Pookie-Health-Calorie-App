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
function caloricIntake() {
    let sex = (Math.floor(Math.random() * 2) === 0) ? "M" : "F";
    let weight = 60; //kg
    let height = 170; //cm
    let age = 22;
    let bmr = 0;


    // For women, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
    if (sex === "F") {
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);

    // For men, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)
    } else {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);

    }

    return bmr;

    // TODO: calculate amr too (combines bmr with a value in relation to workout intensity desired)
}

export default messages;