// componenet is just a functions that returns jsx
// ES6 is best practice for react
// function name is lowercase and same name as componenet
// stateless "dumb", "presentational" component b/c it has no internal state mgmt
import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    // {/* <div className="Person" style={style}> */ }
    const rnd = Math.random();

    if ( rnd > 0.7)
    return (
        < div className={classes.Person} >
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div >
    )
};
export default person;

// to use radium
// export default Radium(person);
