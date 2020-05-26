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

    switchNameHandler = () => {
        console.log('Was clicked');
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am Simona</h1>
                <p>This is working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies are LOL</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}


export default App;
