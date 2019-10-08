// componenet is just a functions that returns jsx
// ES6 is best practice for react
// function name is lowercase and same name as componenet
import React from 'react';

const person = (props) => {
    return <p>I'm a {props.name} and I am {props.age} years old!</p>
};

export default person;