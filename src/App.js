import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      // Only 1 root element that you return
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Im a react app!!!'));
  }
}

export default App;
