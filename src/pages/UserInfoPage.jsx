import React, {useContext, useState} from 'react';
import {UserContext} from "../context/UserContext";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./UserInfoPage.scss"
import pookie from "../ass-ets/pookie_level2.png";

function UserInfoPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const [input, setInput] =useState("");

    function handleChange(event){
        setInput(event.target.value)
    }
    function handleClick(event){
        setUser({...current_user, weight: String(input)})
    }
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
    return (<div className='user-info-page'>
        <Link to = "/home"><Button variant = "primary" style={{display: "inline"}} className ="home-btn" >Home</Button></Link>

        <h1 className='page-title'> User Information </h1>
        <br/>
        <br/>
        <div class="container">
        <label-2 for="name"> Name </label-2>
        <input type="text" id="name" name="name" placeholder="ex: Sally Bob"></input> <br></br>
        </div>

        <div class="container">
        <label-2 htmlFor="age">Age </label-2>
        <input type="text" id="age" name="age" placeholder="ex: 23"></input> <br></br>
        </div>

        <div class="container">
        <label-2 htmlFor="weight">Weight (lbs) </label-2>
        <input type="text" id="weight" name="weight" placeholder="ex: 150" onChange = {handleChange}></input> <br></br>
        </div>

        <div class="container">
        <label-2 htmlFor="calorie">Caloric Intake </label-2>
        <input type="text" id="calorie" name="calorie" placeholder="ex: 2000"></input> <br></br>
        </div>
 
        <div class="container">
        <label-2 htmlFor="sex">Sex: </label-2>
        <select id="dropdown" className='sexx'>
                    <option value="Unselected">No Option Selected</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
        </select> 
        </div>
        
        <div class="container">
             <label-2 htmlFor="Fitness Level">Fitness Level </label-2>
        <select id="dropdown" className='level'>
                    <option value="Unselected">No Option Selected</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced or Athlete</option>
        </select> 
        </div>
        <br></br>
        <br></br>
        <div class="center">
            <button type="button" className ='button' onClick = {handleClick} >Submit</button>
        </div>
        <div className = "pookie-inline-wrapper">
        <img src = {pookie} className = "pookie" style={{marginLeft:'150px', width: '250px', height: '280px' }}></img>  
        </div>  
        
    </div>)

}

export default UserInfoPage;