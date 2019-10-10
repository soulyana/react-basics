import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // omit js becaue added by build workflow

//stateful "smart", "container" components b/c they contain state of app. Only have a few > easier to maintain 

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'def', name: 'Manu', age: 29 },
      { id: 'ghi', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // two-way binding
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // new obj copy with old obj info
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
     persons: persons
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
      backgroundColor: 'green',
      color: 'white',
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
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
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