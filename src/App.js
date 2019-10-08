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
    otherState: 'some other value',
    showPersons: false
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

  // two-way binding
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    //inline styles restrict ability to use full css features
    // use to scope to a style and only applies to a single el
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      // Only 1 root element that you return
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        {/* pass a reference dont use () b/c it'll execute immediately */}
        <button style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {this.state.showPersons ? 
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div> : null
        }
      </div>
    );
  }
}


export default App;