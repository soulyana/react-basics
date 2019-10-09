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

  //immutable state update
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // new copy
    const persons = [...this.state.persons]; // new copied array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} />
          })}
        </div>
      );
    }

    return (
      // Only 1 root element that you return
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        {/* pass a reference dont use () b/c it'll execute immediately */}
        <button style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}


export default App;