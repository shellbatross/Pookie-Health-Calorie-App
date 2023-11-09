import React, { useState,useContext }  from 'react';
import { UserContext } from '../context/UserContext';


//I want to randomly pick and feel free to have some with workout + some aspect of them like the ones here 
export function GrabMessage(){
    const {current_user,setCurrentUser} = useContext(UserContext);
    const messages = {
        start: ["Hi {username}. It's a new day. Choose a workout in the Workout tab at the top of the page. Press the End Day button at the bottom of the page when you're done working out for today."],
        
        set: ["Hi {username}, you haven't set a workout yet! Head to the Workout tab to change that.",
            "Hi {username}, have you done your {set workout} workout yet? The day isn't over yet!"],
        
        motivate: ["Great job so far! Log another workout to help close your {any ring} ring!",
                "Your {any ring} is still not complete. Try another workout!"],
    
        calories: ["Have you eaten anything? Log your caloric intake!"],
    
        completed: ["Congratulations, {username}! You have completed the {completed ring} ring!"]
    }
    
    let set = "Hi " + current_user["name"] + " you haven't set a workout yet! Head to the Workout tab to change that."
    let run = ["Keep running " + current_user["name"] + "! Log another workout to help close your rings!", "Your rings are still incomplete. Try running a bit more " + current_user["name"] + ", you can do it!"]
    let bike = ["Keep on biking " + current_user["name"] + "! Log another workout to help close your rings!", "Your rings are still incomplete. Try to bike some more " + current_user["name"] + ", you can do it!"]
    let lift = ["Keep lifting " + current_user["name"] + "! Log another workout to help close your rings!", "Your rings are still incomplete. Go for another set " + current_user["name"] + ", you can do it!"]
    let custom = ["Keep working on your rings " + current_user["name"] + "! Log another workout to close your rings!", "Your rings are still incomplete. Go for another workout " + current_user["name"] + ", you can do it!"]
    
    let msg = ""
    if(current_user["workout_set"] === "Running"){
        msg = run[Math.floor(Math.random()*run.length)];
        
    }

    if(current_user["workout_set"] === "Lifting"){
        msg = lift[Math.floor(Math.random()*lift.length)];
        
    }

    if(current_user["workout_set"] === "Biking"){
        msg = bike[Math.floor(Math.random()*bike.length)];
    }

    if(current_user["workout_set"] === "Other"){
        msg = custom[Math.floor(Math.random()*custom.length)];
    }

    if(current_user["workout_set"] === ""){
        msg = set;
    }

    return msg

}




// https://www.verywellfit.com/how-many-calories-do-i-need-each-day-2506873


//export default messages;