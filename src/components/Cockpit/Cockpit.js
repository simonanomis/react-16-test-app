import React from 'react';
import classes from './Cockpit.css'
import Auxiliary from "../../hoc/Auxiliary";

const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if ( props.showPersons ) {
        btnClass = [classes.Button, classes.Red].join( ' ' );
    }

    if ( props.persons.length <= 2 ) {
        assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
        assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <Auxiliary>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log In</button>
        </Auxiliary>
    );
};

export default cockpit;