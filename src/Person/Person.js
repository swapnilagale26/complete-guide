import React from "react";

const person=(props)=>{
    return(
    <div>
    <h1 onClick={props.click}>Hi I am a {props.name} and my age is {props.age}</h1>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
}

export default person;