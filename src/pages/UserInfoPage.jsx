import React from 'react';
import "./UserInfoPage.scss"

function UserInfoPage(){

    return (<div>
        <br/>
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