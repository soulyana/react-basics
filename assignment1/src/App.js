import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Soulyana'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput username="Soulstarrr"/>
      </div>
    );
  }
}

export default App;
