import React from 'react';

import {useState, useEffect} from "react";

import "./ToDoList.scss";
function ToDoList(){
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
        let tmp_obj = {"strike":"false", "info":input}
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
                newList.push({"strike":"true","info": curr.info})

        }
        else{
            newList.push(curr)
        }

        }
        )
        setList(newList);
   
    }

    function deletefromlist(item,idx){
        let newList = []
        todoList.map((curr,i)=>
        {
            if(curr != item && idx != i){
                newList.push(curr)
            

        }
        }
        )
        setList(newList);
    }

    return (
    <div className='whole-list'>
        <ul className='list'>
        {todoList.map((item,i)=>{
        if(item.strike ==="false"){
            return(
                <div className='whole-list-item'>
        <li key = {i} onClick = {()=>rescramble(item,i)}>
            <button className="clickable-item">
                {item.info}
            </button>

            
        </li>
        <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Red_x.svg/900px-Red_x.svg.png?20111003033350" onClick = {()=>deletefromlist(item,i)}className = "delete-button" />
        </div>

        
        );
        }
        else{
            return(
            <div className='whole-list-item'>
            <li key = {i} onClick = {()=>rescramble(item,i)}>
            <button className="clickable-item">
                <s>{item.info}</s>
              
            </button>
        </li>
        <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Red_x.svg/900px-Red_x.svg.png?20111003033350" onClick = {()=>deletefromlist(item,i)} className = "delete-button" />
        </div>
            );
        }
        }
    ) }
   </ul>
   <input type = "text"  onChange = {handleChange} className="form">
    </input>
    <button type = "button" onClick = {handleAdd} className= "submitbutton">
        <h1 className='submitbuttonfont'>Add something to the to do list!</h1>
    </button>
   </div>
    );

}

export default ToDoList;