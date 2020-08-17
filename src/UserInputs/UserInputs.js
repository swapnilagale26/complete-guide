import React from "react";

const userInputs=(props)=>{
    return(
    <input type="text" onChange={props.click} value={props.value}></input>
    )
}

export default userInputs;