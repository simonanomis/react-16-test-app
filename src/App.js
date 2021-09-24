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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 40},
                {name: 'Simona', age: 35},
                {name: 'Filip', age: 33}
            ]
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
          backgroundColor: 'white',
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
                                age={person.age}/>
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I am Simona</h1>
                <p>This is working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        );
    }
}


export default App;
