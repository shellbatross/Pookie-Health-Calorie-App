import React, { useState,useContext }  from 'react';
import { TimeContext } from '../context/TimeContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Time(){
    const {current_time,setTime}= useContext(TimeContext);  
    const [input, setInput] = useState("");

    function handleChange(event){   
        setInput(event.target.value);
    };

    function changeTime(){
        setTime(input)
    };

    return(
        <div>
        <b style = {{fontSize: "200px"}}>THE TIME IS: {current_time}</b>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Change time meow</Form.Label>
          <Form.Control type="email" placeholder="DD/MM/YYYY" onChange = {handleChange}/>
        </Form.Group>
        </Form>
        <Button variant="primary" type="submit" style = {{height: "500px", width: "500px", fontSize: "50px"}} onClick = {changeTime}>
       Change Time
      </Button>
      </div>
    )

}

export default Time;