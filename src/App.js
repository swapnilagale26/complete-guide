import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"
import UserInputs from "./UserInputs/UserInputs"
import UserOutputs from "./UserOutputs/UserOutputs"
// import person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {id: "sdc2" ,name: "swapnil", age: 23},
      {id: "ashciouh5" ,name: "nikita", age: 20},
      {id: "afcw2" ,name: "ashat", age: 26}
    ],
    showPersons: false
  }

  // updateClickHandler=(newName)=>{
  //   this.setState(
  //     {persons:[
  //       {name: newName, age: 23},
  //       {name: "nikita", age: 20},
  //       {name: "ashat", age: 29}
  //     ]}
  //   )
  // }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler=(index)=>{
    const person1= [...this.state.persons];
    person1.splice(index, 1);
    this.setState({
      persons: person1
    })
  }
 

//   state={
//       username: "swapnil"
// }

// changeUserNameHandler = (name) =>{
//   this.setState({

//       username: name

//   })
// }

usenameChangedHandler=(event, id)=>{
const personIndex= this.state.persons.findIndex(p=>{
  return p.id===id;
})

const person = {
  ...this.state.persons[personIndex]
}

person.name=event.target.value;

const persons=[...this.state.persons];

persons[personIndex]=person;

this.setState({

persons: persons
  
 })



}



  render() {

    const Style={
        color: "red",
        fontSize:"20px"
    }

    let person = null;

    if (this.state.showPersons){
      person= (
        <div>
        {this.state.persons.map((person, index)=>{
        return <Person key={person.id} name = {person.name} age={person.age} click={()=>this.deletePersonHandler(index)} changed={(event)=>this.usenameChangedHandler(event, person.id)}/>
      })}
      </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I am you react App</h1>
        <p>I am working!</p>      
        <button onClick={this.togglePersons}>Toggle Persons</button>
        {person}
       
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