import React, {Component} from 'react';
import cssClasses from './App.css';
import Person from './Person/Person'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";


class App extends Component{
    state = {
        persons: [
            {id: "abc123", name: 'Max', age: 28},
            {id: "abc321", name: 'Simona', age: 33},
            {id: "abc111", name: 'Filip', age: 31}
        ],
        otherState: 'Some other state',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    deletePersonsHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
         const doesShow = this.state.showPersons;
         this.setState({showPersons: !doesShow});
    };

    render() {
        let persons = null;
        let buttonClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <ErrorBoundary key={person.id}><Person
                                click={() => this.deletePersonsHandler(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/> </ErrorBoundary>
                        })
                    }
                </div>
            );

            buttonClass = cssClasses.Red;
        }

        let classes = [];

        if(this.state.persons.length <= 2) {
            classes.push(cssClasses.red);
        }
        if(this.state.persons.length <= 1) {
            classes.push(cssClasses.bold);
        }

        return (
                <div className={cssClasses.App}>
                    <h1>This a simple React App!</h1>
                    <p className={classes.join(' ')}>Toggle persons!</p>
                    <button
                        className={buttonClass}
                        onClick={this.togglePersonsHandler}>Switch Name</button>
                    {persons}
                </div>
        );
    }
}


export default App;
