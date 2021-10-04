import React from 'react';
import cssClasses from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons) {
        buttonClass = cssClasses.Red;
    }

    if(props.persons.length <= 2) {
        assignedClasses.push(cssClasses.red);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(cssClasses.bold);
    }

  return (
      <div className={cssClasses.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>Toggle persons!</p>
          <button
              className={buttonClass}
              onClick={props.clicked}>Switch Name</button>
      </div>
  );
};

export default cockpit;