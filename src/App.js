import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from "./Char/Char"

class App extends Component {
  state={
    inputText: ""
  }

  deletePersonHandler=(index)=>{
    const deletedCharList= this.state.inputText.split("");
    deletedCharList.splice(index, 1);
    const updatedList=deletedCharList.join("")
    this.setState({
      inputText: updatedList
    })
  }
 

usenameChangedHandler=(event)=>{


this.setState({

  inputText: event.target.value
  
 })



}



  render() {

    const Style={
        color: "red",
        fontSize:"20px"
    }

    const charList= this.state.inputText.split("").map((ch, index)=>{
    return <Char charecter={ch} key={index} clicked={()=>this.deletePersonHandler(index)}></Char>
    })

    


    return (
      <div className="App">
   

        <input type="text" onChange={(event)=>this.usenameChangedHandler(event)} value={this.state.inputText} ></input>
        <p>{this.state.inputText}</p>
        <Validation inputTextLength={this.state.inputText.length}/>
        {charList}
       
      </div>
    );
  }
}

export default App;
            /* 
        
        
        <UserInputs click={this.usenameChangedHandler} value={this.state.username}/>
        <UserOutputs  userName= {this.state.username} />
        <UserOutputs  userName={this.state.username} />
        <UserOutputs  userName="ashat"/>
        <button style={Style} onClick={()=>this.changeUserNameHandler('nithish')}>change username</button>*/