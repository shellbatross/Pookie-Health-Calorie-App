import React, {useContext, useState} from 'react';
import {UserContext} from "../context/UserContext";
import {Link} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import "./UserInfoPage.scss"
import pookie from "../ass-ets/pookie_level2.png";

function UserInfoPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    const [name,setName]=useState(null);
    const [weight,setWeight]=useState(null);
    const [age, setAge] =useState(null);
    const [height, setHeight]=useState(null);
    const [sex,setSex]=useState(null);
    const [fitnessLevel,setFitnessLevel] = useState(null);

    //My life really is just setting scuffed objects now 
    //Oh right I need to put this into localstorage
    function handleClick(event){
        console.log(sex)
        setUser(prevUserState=>({
            ...prevUserState, 
            name:   name === null ? "": name,
            height: height === null ? "": height,
            weight: weight === null ? "": weight,
            age: age === null ? "": age,
            sex: sex === null ? "": sex,
            fitness_level: fitnessLevel=== null ? "": fitnessLevel,
        }))
        localStorage.setItem("user",JSON.stringify(current_user))
    
    }
    //Inspect, check console in browser you'll see what I mean
    return (<div className='user-info-page'>
        
        <Link to = "/home"><Button variant = "primary" style={{display: "inline"}} className ="home-btn" >Home</Button></Link>

        <h1 className='page-title'> User Information </h1>
        <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header style ={{fontWeight:"bold "}}>Your current information</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Name: {current_user["name"]}</li>
          <li>Height: {current_user["height"]}</li>
          <li>Weight: {current_user["weight"]}</li>
          <li>Age: {current_user["age"]}</li>
          <li>Sex: {current_user["sex"]}</li>
          <li>Fitness Level: {current_user["fitness_level"]}</li>

          </ul>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <br/>
        <br/>
        <div class="container">
        <label-2 for="name"> Name </label-2>
        <input type="text" id="name" name="name" placeholder="ex: Sally Bob" onInput={e=>setName(e.target.value)}></input> <br></br>
        </div>

        <div class="container">
        <label-2 htmlFor="age">Age </label-2>
        <input type="text" id="age" name="age" placeholder="ex: 23" onInput={e=>setAge(e.target.value)}></input> <br></br>
        </div>

        <div class="container">
        <label-2 htmlFor="weight">Weight (lbs) </label-2>
        <input type="text" id="weight" name="weight" placeholder="ex: 150" onInput={e=>setWeight(e.target.value)}></input> <br></br>
        </div>

        <div class="container">
        <label-2 htmlFor="calorie">Height </label-2>
        <input type="text" id="calorie" name="calorie" placeholder="ex: 170" onInput={e=>setHeight(e.target.value)}></input> <br></br>
        </div>
 
        <div class="container">
        <label-2 htmlFor="sex">Sex: </label-2>
        <select id="dropdown" className='sexx' onChange= {e=>setSex(e.target.value)} >
                    <option value="Unselected">No Option Selected</option>
                    <option value="F" >Female</option>
                    <option value="M" >Male</option>
        </select> 
        </div>
        
        <div class="container">
             <label-2 htmlFor="Fitness Level">Fitness Level </label-2>
        <select id="dropdown" className='level' onChange= {e=>setFitnessLevel(e.target.value)}>
                    <option value="Unselected">No Option Selected</option>
                    <option value="Beginner" >Beginner</option>
                    <option value="Intermediate" >Intermediate</option>
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