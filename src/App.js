import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // omit js becaue added by build workflow

//stateful "smart", "container" components b/c they contain state of app. Only have a few > easier to maintain 

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  //event handler for onClick
  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // Replaces old state
    // DONT DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Souly', age: 31 }
      ]
    });
  };

  render() {
    return (
      // Only 1 root element that you return
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        {/* pass a reference dont use () b/c it'll execute immediately */}
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}


export default App;