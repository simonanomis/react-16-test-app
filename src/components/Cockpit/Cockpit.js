import React from 'react';
import cssClasses from './Cockpit.css'
import Auxiliary from "../../hoc/Auxiliary";

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = cssClasses.Button;

    if(props.showPersons) {
        buttonClass = [cssClasses.Button, cssClasses.Red].join(' ');
    }

    if(props.persons.length <= 2) {
        assignedClasses.push(cssClasses.red);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(cssClasses.bold);
    }

  return (
      <Auxiliary>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>Toggle persons!</p>
          <button
              className={buttonClass}
              onClick={props.clicked}>Switch Name</button>
      </Auxiliary>
  );
};

export default cockpit;