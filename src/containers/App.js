import React, {Component} from 'react';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


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

        if (this.state.showPersons) {
            persons = (
                    <Persons
                        persons={this.state.persons}
                    clicked={this.deletePersonsHandler}
                    changed={this.nameChangedHandler}/>
            );
        }

        return (
                <div className={cssClasses.App}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}/>
                    {persons}
                </div>
        );
    }
}


export default App;
