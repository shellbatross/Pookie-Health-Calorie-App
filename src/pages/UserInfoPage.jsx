import React, {useContext, useState} from 'react';
import {UserContext} from "../context/UserContext";
import { caloricIntake } from '../ass-ets/CalorieConstants';
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
        setUser({
            ...current_user, 
            name:   name === null ? current_user["name"]: name,
            height: height === null ? current_user["height"]: height,
            weight: weight === null ? current_user["weight"]: weight,
            age: age === null ? current_user["age"]: age,
            sex: sex === null ? current_user["sex"]: sex,
            fitness_level: fitnessLevel=== null ? current_user["fitness_level"]: fitnessLevel,
            BMR: Math.floor(caloricIntake(sex,age,weight,height)),
            calories: {"current": current_user["calories"]["current"], "goal": Math.floor(caloricIntake(sex,age,weight,height))
                
            }
        })
    
    }
    localStorage.setItem("user",JSON.stringify(current_user))
    //Inspect, check console in browser you'll see what I mean
    return (<div className='user-info-page'>
        
        <Link to = "/home"><Button variant = "primary" size="lg" className ="home-btn" style={{fontSize: '22px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', backgroundColor: 'rgb(75, 89, 181)'}}>Home</Button></Link>

        <h1 className='page-title'> User Information </h1>
        <br></br>
        <Accordion style={{paddingLeft: '30px', marginLeft: '100px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header style ={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize: '24px !important', border: "1px solid rgb(134, 76, 153)", backgroundColor: 'purple', fontWeight:"bold "}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Current Information</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Name: {current_user["name"]}</li>
          <li style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Height: {current_user["height"]}</li>
          <li style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Weight: {current_user["weight"]}</li>
          <li style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Age: {current_user["age"]}</li>
          <li style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Sex: {current_user["sex"]}</li>
          <li style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Fitness Level: {current_user["fitness_level"]}</li>

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
        <label-2 htmlFor="sex">Sex </label-2>
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
            <button type="button" style={{fontSize: '25px', borderRadius: '11px'}} className ='button' onClick = {handleClick} >Submit</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to = "/termsandconditions"><Button variant = "secondary" style={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize: '23px', marginLeft: '20px', marginTop: '-0.5px', backgroundColor: 'rgb(75, 89, 181)'}} className="termsbutton"> Terms and Conditions</Button></Link>
    </div>)

}

export default UserInfoPage;