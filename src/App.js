import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component{
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Simona', age: 33},
            {name: 'Filip', age: 31}
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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonsHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
        }

        let classes = [];

        if(this.state.persons.length <= 2) {
            classes.push('red');
        }
        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }
        return (
            <div className="App">
                <h1>This a simple React App!</h1>
                <p className={classes.join(' ')}>Toggle persons!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        );
    }
}


export default App;
