import React from 'react';

import {useState, useEffect} from "react";

function Tab3(){
    const [todoList,setList] = useState(["initial"]);

    useEffect(()=>{
        setList(["fkc", ...todoList]);
    },[]);
   
    function handleChange(event){

    };

    return (<div>
        <ul>
        {todoList.map((item,i)=>
    <li key = {i}>{item}</li>) }
    <input type = "text">
    </input>
   </ul>
   </div>
    );

}

export default Tab3;