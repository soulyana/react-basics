// componenet is just a functions that returns jsx
// ES6 is best practice for react
// function name is lowercase and same name as componenet
// stateless "dumb", "presentational" component b/c it has no internal state mgmt
import React from 'react';
// import Radium from 'radium';
import './Person.css';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    // {/* <div className="Person" style={style}> */ }
    return (
        < div className="Person" >
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div >
    )
};
export default person;

// to use radium
// export default Radium(person);
