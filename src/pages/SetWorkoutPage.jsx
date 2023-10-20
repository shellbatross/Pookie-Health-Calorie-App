import React from 'react';
import Users from '../context/Users';
function SetWorkoutPage(){
    let current_user = Users('justin');
    console.log(current_user);
    return (<div>
        Meow
    </div>)

}

export default SetWorkoutPage;