import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; // omit js becaue added by build workflow

const App = props => {
    const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });

    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

     //event handler for onClick
    const switchNameHandler = () => {
      // console.log('Was clicked');
      // Replaces old state
      // DONT DO THIS: this.state.persons[0].name = 'Maximilian';
      setPersonsState ({
        persons: [
          { name: 'Maxine', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Souly', age: 31 }
        ]
      });
    };

    return (
      // Only 1 root element that you return
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        {/* pass a reference dont use () b/c itll execute immediately */}
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Im a react app!!!'));
  }

export default App;
/*
state = {
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
  ],
  otherState: 'some other value'
};


};*/