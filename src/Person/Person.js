// componenet is just a functions that returns jsx
// ES6 is best practice for react
// function name is lowercase and same name as componenet
// stateless "dumb", "presentational" component b/c it has no internal state mgmt
import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;