import React from 'react';

import {useState, useEffect} from "react";

import "./Tab3.scss";
function Tab3(){
    //Okay so this thing is annoying so a state in react, as best id describe it is a variable that is going to change its value throughout lifespan of an app
    //the syntax is weird, but basically, here i am initializing todolist to a state of [], and the setList is a setter method that react implements for you
    const [todoList,setList] = useState([]);
    //same here, but to a state of ""
    const [input, setInput] = useState("");
    //***EXTREMELY IMPORTANT, I WAS MALDING FOR 30 MINUTES, YOU CAN NOT USE SETSTATE ON ITS OWN, IT HAS TO BE INSIDE SOME FUNCTION, OR USEFFECT OR BE TRACKED
    //BY LIFESPAN OF A FUNCTION INSIDE OF IT. YOU CAN NOT SET A VARIABLE WITHOUT SOMETHING BEEN TRIGGERED TO RENDER, WILL GIVE INFINTIE RE RENDERS
    
    //when the person finishes typing in the text box, and they click, the handle add will be called. inside handle add, i am setting the state of the todo list
    //to grab input, and ...put in the rest of todolist. Then this will re render the contents of the state of the new stte of the variable.
    function handleAdd(){
        let tmp_obj = {"strike":"false", "input":input}
        setList([...todoList,tmp_obj]);
    }
    //as the person types, they are going to change the input box. as the input changes with "onChange", I am calling this function to set the input state
    //to whatever they are typing, causing a re render of what is the input
    function handleChange(event){
        setInput(event.target.value);
    };
    function rescramble(item,idx){
        let newList = []
        todoList.map((curr,i)=>
        {
            if(curr === item && idx == i){
                newList.push({"strike":"true","input": curr.input})

        }
        else{
            newList.push(item)
        }

        }
        )
        setList(newList);
   
    }

    console.log(todoList);
    return (<div>
        <ul>
        {todoList.map((item,i)=>{
        if(item.strike ==="false"){
            return(
        <li key = {i} onClick = {()=>rescramble(item,i)}>
            <button className="clickable-item">
                {item.input}
            </button>
        </li>)
        }
        else{
            return(
            <li key = {i} onClick = {()=>rescramble(item,i)}>
            <button className="clickable-item">
                <s>{item.input}</s>
            </button>
        </li>
            )
        }
        }
    ) }
    <input type = "text"  onChange = {handleChange}>
    </input>
    <button type = "button" onClick = {handleAdd}>
        Add something to the to do list!
    </button>
   </ul>
   </div>
    );

}

export default Tab3;