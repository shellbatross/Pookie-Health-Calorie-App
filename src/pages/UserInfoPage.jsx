import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./UserInfoPage.scss"

function UserInfoPage(){
    //Like normal  const [current_user, setUser] = useState([]) or something, but I am giving it to you
    //the "context" is an object, our current user with all their information. When you update set 
    //the state with setUser
    const {current_user,setUser}= useContext(UserContext);
    //Inspect, check console in browser you'll see what I mean
    console.log(current_user)
    return (<div className='user-info-page'>
        <Link to = "/home"><Button variant = "primary" style={{display: "inline"}} className ="home-btn" >Home</Button></Link>

        <h1 className='page-title'> User Information </h1>
        <br/>
        <br/>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="ex: Sally Bob"></input> <br></br>
        <br/>
        <br/>
        <label htmlFor="age">Age: </label>
        <input type="text" id="age" name="age" placeholder="ex: 23"></input> <br></br>
        <br/>
        <br/>
        <div>
        <label htmlFor="sex">Sex: </label>
        <select id="dropdown" className='sexx'>
                    <option value="Unselected">No Option Selected</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
        </select> 
        </div>
        <br/>
        <br/>
        <label htmlFor="weight">Weight (lbs): </label>
        <input type="text" id="weight" name="weight" placeholder="ex: 150"></input> <br></br>
        <br/>
        <br/>
        <label htmlFor="calorie">Caloric Intake: </label>
        <input type="text" id="calorie" name="calorie" placeholder="ex: 2000"></input> <br></br>
        <br/>
        <br/>
        
        <div> 
        <label htmlFor="Fitness Level">Fitness Level: </label>
        <select id="dropdown" className='level'>
                    <option value="Unselected">No Option Selected</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced or Athlete</option>
        </select> 
        </div>
        <div>
        <label htmlFor="height">Height ft: </label>
        <input type="text" id="height-ft" name="height" placeholder="5"></input>
        <label htmlFor="height"> in: </label>
        <input type="text" id="height=in" name="height" placeholder="5"></input> <br></br>
        <br/>
        <br/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="text-center">
            <button type="button" className ='button' >Submit</button>
        </div>
        
    </div>)

}

export default UserInfoPage;