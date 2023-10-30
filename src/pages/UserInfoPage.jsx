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
        <label htmlFor="sex">Sex: </label>
        <input type="text" id="sex" name="sex" placeholder="ex: Female"></input> <br></br>
        <br/>
        <br/>
        <label htmlFor="weight">Weight (lbs): </label>
        <input type="text" id="weight" name="weight" placeholder="ex: 150"></input> <br></br>
        <br/>
        <br/>
        <label htmlFor="height">Height (ft in): </label>
        <input type="text" id="height" name="height" placeholder="ex: 5 3"></input> <br></br>
        <br/>
        <br/>
        <label htmlFor="calorie">Caloric Intake: </label>
        <input type="text" id="calorie" name="calorie" placeholder="ex: 2000"></input> <br></br>
        <br/>
        <br/>
        <div class="text-center">
            <button type="button" className ='button' >Submit</button>
        </div>
        
    </div>)

}

export default UserInfoPage;