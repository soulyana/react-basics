// componenet is just a functions that returns jsx
// ES6 is best practice for react
// function name is lowercase and same name as componenet
import React from 'react';

const person = () => {
    return <p>I'm a person and I am {Math.floor(Math.random() * 20)} years old!</p>
}

export default person;