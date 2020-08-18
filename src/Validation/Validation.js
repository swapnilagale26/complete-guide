import React from "react";



const validation = (props) => {
    let message="Text is Too Short"
    
    if(props.inputTextLength>=5){
        message="Text is Long Enough"
    }

return(
    <div>
        <p>{message}</p>
    </div>
)

};

export default validation;