import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component{
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Simona', age: 33},
            {name: 'Filip', age: 31}
        ]
    }

    switchNameHandler = (newName) => {
        //console.log('Was clicked');
        // DONT DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: newName, age: 40},
                {name: 'Simona', age: 35},
                {name: 'Filip', age: 33}
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am Simona</h1>
                <p>This is working!</p>
                <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Maximilian!!')}> My Hobbies are LOL</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}


export default App;
