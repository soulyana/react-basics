// componenet is just a functions that returns jsx
// ES6 is best practice for react
// function name is lowercase and same name as componenet
// stateless "dumb", "presentational" component b/c it has no internal state mgmt
import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;