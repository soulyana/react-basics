import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'; // omit js becaue added by build workflow
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Radium, { StyleRoot } from 'radium';

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
    // person.name = event.input.value;//error
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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
            <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundary>
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // };
    }

    // let classes = ['red', 'bold'].join(' '); //becomes valid css class list
    // const classes = [];
    // if (this.state.persons.length <= 2) {
    //   classes.push('red');
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push('bold');
    // }

    const assignedClasses = [];
    if (this.state.persons.length <= 2 ) {
      assignedClasses.push(classes.red); 
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      // Only 1 root element that you return
      // {/* <StyleRoot> */}
      <div className={classes.App}>
        <h1>Hi, I'm a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        {/* pass a reference dont use () b/c it'll execute immediately */}
        <button className={btnClass}
      //  {/* style={style} */}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
      // {/* </StyleRoot> */}
    );
  }
}


export default App;
// export default Radium(App);